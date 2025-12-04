import React, { useEffect, useState } from 'react';
import { ViewState, AssessmentAnswers, AssessmentResultData } from '../../types';
import { analyzeAssessment } from '../../services/geminiService';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Button from '../Button';
import { AlertTriangle, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

interface Props {
  answers: AssessmentAnswers;
  onNavigate: (view: ViewState) => void;
}

const AssessmentResult: React.FC<Props> = ({ answers, onNavigate }) => {
  const [data, setData] = useState<AssessmentResultData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await analyzeAssessment(answers);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [answers]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory">
        <Loader2 className="w-12 h-12 text-gold-500 animate-spin mb-4" />
        <p className="text-navy-900 font-medium">Hệ thống AI đang phân tích dữ liệu...</p>
      </div>
    );
  }

  if (!data) return <div>Error loading data</div>;

  // Chart Data
  const scoreData = [
    { name: 'Score', value: data.score },
    { name: 'Remaining', value: 100 - data.score },
  ];
  const COLORS = [data.score > 70 ? '#2C5F2D' : data.score > 40 ? '#D4AF37' : '#DC2626', '#E5E7EB'];

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8 text-center">Kết Quả Đánh Giá Tín Dụng Xanh (Ước tính)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Score & Summary */}
          <div className="lg:col-span-1 bg-white p-8 rounded-xl shadow-lg border-t-4 border-navy-900 h-fit sticky top-24">
            <div className="h-64 relative mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={scoreData}
                    cx="50%"
                    cy="50%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {scoreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
                <span className="text-5xl font-bold text-navy-900">{data.score}</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Điểm / 100</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">Đánh giá chung</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {data.summary}
              </p>
            </div>

            <Button onClick={() => onNavigate('expert-profile')} fullWidth>
              Tìm Chuyên Gia Ngay
            </Button>
          </div>

          {/* Right Column: Gap Analysis */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Phân tích Lỗ hổng & Giải pháp</h2>
            
            {data.gaps.length === 0 ? (
                <div className="bg-green-50 p-6 rounded-lg border border-green-200 flex items-start">
                    <CheckCircle className="text-green-600 w-6 h-6 mr-4 mt-1" />
                    <div>
                        <h4 className="font-bold text-green-800">Tuyệt vời!</h4>
                        <p className="text-green-700">Doanh nghiệp của bạn đã có nền tảng rất tốt. Hãy liên hệ chuyên gia để nhận xác thực chính thức ngay.</p>
                    </div>
                </div>
            ) : (
                data.gaps.map((gap, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                    <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase mb-2 ${
                        gap.urgency === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                        {gap.urgency === 'high' ? 'Cần khắc phục ngay' : 'Nên cải thiện'}
                    </div>
                    <h4 className="font-bold text-navy-900 text-lg flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                        {gap.issue}
                    </h4>
                    </div>
                    
                    <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0">
                    <div className="mb-3">
                        <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Giải pháp gợi ý:</span>
                        <p className="text-gray-700 mt-1">{gap.solution}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Chi phí ước tính:</span>
                            <p className="text-forest-800 font-bold">{gap.estimatedCost}</p>
                        </div>
                        <button 
                            onClick={() => onNavigate('expert-profile')}
                            className="text-gold-600 hover:text-gold-700 text-sm font-semibold flex items-center"
                        >
                            Thuê chuyên gia <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                    </div>
                </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;