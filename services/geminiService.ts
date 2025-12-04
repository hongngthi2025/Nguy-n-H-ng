import { GoogleGenAI, Type } from "@google/genai";
import { AssessmentAnswers, AssessmentResultData } from "../types";

const analyzeAssessment = async (answers: AssessmentAnswers): Promise<AssessmentResultData> => {
  if (!process.env.API_KEY) {
    console.warn("No API KEY found, returning mock logic result.");
    return calculateMockResult(answers);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Bạn là một chuyên gia đánh giá rủi ro ESG (Môi trường, Xã hội, Quản trị) và Tài chính Xanh.
      Hãy phân tích câu trả lời của một Doanh nghiệp vừa và nhỏ (SME) dưới đây và đưa ra đánh giá.
      
      Dữ liệu đầu vào:
      - Ngành nghề: ${answers.industry === 'manufacturing' ? 'Sản xuất' : 'Dịch vụ'}
      - Theo dõi CO2: ${answers.co2Tracking}
      - Nguồn năng lượng: ${answers.energySource}
      - Xử lý rác thải: ${answers.wasteManagement}
      - Kiểm toán tài chính: ${answers.financialAudit}
      - Nhân sự pháp chế: ${answers.complianceOfficer}

      Yêu cầu đầu ra (JSON):
      1. score: Điểm tín dụng xanh ước tính (0-100).
      2. summary: Một đoạn văn ngắn tổng quan (tiếng Việt).
      3. gaps: Danh sách các vấn đề (issue), giải pháp gợi ý (solution), chi phí ước tính bằng VNĐ (estimatedCost), và mức độ cấp thiết (urgency: high/medium/low).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            summary: { type: Type.STRING },
            gaps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  issue: { type: Type.STRING },
                  solution: { type: Type.STRING },
                  estimatedCost: { type: Type.STRING },
                  urgency: { type: Type.STRING, enum: ['high', 'medium', 'low'] }
                }
              }
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");
    
    return JSON.parse(resultText) as AssessmentResultData;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return calculateMockResult(answers);
  }
};

// Fallback logic if AI fails or no key
const calculateMockResult = (answers: AssessmentAnswers): AssessmentResultData => {
  let score = 50;
  const gaps = [];

  if (answers.co2Tracking === 'no' || answers.co2Tracking === 'dont_know') {
    score -= 15;
    gaps.push({
      issue: 'Chưa đo lường phát thải CO2 (Scope 1 & 2)',
      solution: 'Thuê chuyên gia thiết lập hệ thống kiểm kê GHG theo ISO 14064.',
      estimatedCost: '15.000.000 - 30.000.000 VNĐ',
      urgency: 'high'
    });
  } else {
    score += 10;
  }

  if (answers.energySource === 'grid') {
    score -= 5;
    gaps.push({
      issue: 'Phụ thuộc hoàn toàn vào điện lưới',
      solution: 'Lắp đặt điện mặt trời áp mái hoặc mua chứng chỉ I-REC.',
      estimatedCost: 'Từ 200.000.000 VNĐ (Đầu tư hệ thống)',
      urgency: 'medium'
    });
  } else if (answers.energySource === 'renewable') {
    score += 15;
  }

  if (answers.financialAudit === 'no' || answers.financialAudit === 'dont_know') {
    score -= 10;
    gaps.push({
      issue: 'Thiếu minh bạch tài chính',
      solution: 'Thực hiện kiểm toán độc lập và chuẩn hóa báo cáo tài chính.',
      estimatedCost: '30.000.000 VNĐ / năm',
      urgency: 'high'
    });
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    summary: 'Dựa trên đánh giá sơ bộ, doanh nghiệp của bạn đang ở mức trung bình. Để tiếp cận nguồn vốn xanh quốc tế, bạn cần cải thiện minh bạch dữ liệu môi trường ngay lập tức.',
    gaps: gaps as any
  };
};

export { analyzeAssessment };
