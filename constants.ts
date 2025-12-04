import { ExpertProfile } from './types';
import { Shield, Award, FileCheck, CheckCircle2 } from 'lucide-react';

export const MOCK_EXPERT: ExpertProfile = {
  id: 'exp-001',
  name: 'TS. Nguyễn Văn Minh',
  title: 'Chuyên gia Kiểm kê Khí nhà kính & Tài chính Xanh',
  image: 'https://picsum.photos/id/1055/400/400',
  experienceYears: 12,
  projectsCompleted: 45,
  ratePerHour: 2500000,
  badges: ['verified', 'degree', 'nda'],
  keywords: ['EU Taxonomy', 'ISO 14001', 'CBAM', 'GRI Standards'],
  bio: 'Tiến sĩ Môi trường với hơn 12 năm kinh nghiệm tư vấn cho các tập đoàn đa quốc gia và các dự án năng lượng tái tạo tại Việt Nam. Chuyên sâu về đánh giá rủi ro môi trường và xây dựng khung tài chính xanh theo chuẩn quốc tế.',
  packages: [
    { title: 'Tư vấn 1:1 (1 giờ)', price: '2.500.000 VNĐ', desc: 'Giải đáp thắc mắc về lộ trình ESG và tiêu chuẩn vay vốn.' },
    { title: 'Rà soát hồ sơ nhanh', price: '15.000.000 VNĐ', desc: 'Đánh giá tính hợp lệ của hồ sơ trước khi nộp ngân hàng.' },
    { title: 'Báo cáo CBAM sơ bộ', price: '45.000.000 VNĐ', desc: 'Tính toán và lập báo cáo phát thải cho hàng xuất khẩu EU.' }
  ],
  caseStudies: [
    {
      problem: 'Doanh nghiệp dệt may bị khách hàng EU yêu cầu chứng chỉ xanh.',
      solution: 'Xây dựng lộ trình chuyển đổi năng lượng và đo lường dấu chân carbon.',
      result: 'Đạt chứng chỉ sau 6 tháng, giữ lại hợp đồng trị giá 2 triệu USD.'
    },
    {
      problem: 'Nhà máy gỗ khó tiếp cận vốn vay lãi suất thấp.',
      solution: 'Chuẩn hóa báo cáo tài chính tích hợp yếu tố ESG.',
      result: 'Được ngân hàng giải ngân gói tín dụng xanh lãi suất 5.5%.'
    }
  ]
};

export const TESTIMONIALS = [
  {
    role: 'CEO Doanh nghiệp Sản xuất',
    name: 'Trần Thanh Hùng',
    quote: 'Nhờ TrustGreen, chúng tôi đã hiểu rõ lỗ hổng trong dữ liệu môi trường của mình và kết nối được với chuyên gia thực sự chất lượng.'
  },
  {
    role: 'Giám đốc Khối KHDN Ngân hàng',
    name: 'Lê Thu Thủy',
    quote: 'Nền tảng giúp ngân hàng tiết kiệm 40% thời gian thẩm định nhờ dữ liệu đã được các chuyên gia trong mạng lưới xác thực sơ bộ.'
  },
  {
    role: 'Chuyên gia Độc lập',
    name: 'Dr. Sarah Nguyen',
    quote: 'Một môi trường làm việc chuyên nghiệp, minh bạch, nơi tri thức của chuyên gia được định giá xứng đáng.'
  }
];