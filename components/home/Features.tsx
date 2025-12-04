import React from 'react';
import { ViewState } from '../../types';
import { Shield, Zap, TrendingUp, Users, FileCheck, Lock, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';
import Button from '../Button';

interface FeaturesProps {
    onNavigate: (view: ViewState) => void;
}

export const ProblemSolution: React.FC = () => (
  <section className="py-20 bg-ivory">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">Điểm nghẽn Dữ liệu & Niềm tin</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-600 mb-2">Vấn đề của SME</h3>
              <p className="text-gray-600">Thiếu dữ liệu minh bạch, không biết bắt đầu chuyển đổi xanh từ đâu, khó tiếp cận vốn vay lãi suất thấp.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="font-bold text-red-600 mb-2">Vấn đề của Ngân hàng</h3>
              <p className="text-gray-600">Lo ngại rủi ro "tẩy xanh" (greenwashing), chi phí thẩm định ESG quá cao và tốn thời gian.</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="absolute -inset-4 bg-gold-500/20 rounded-full blur-3xl"></div>
           <div className="relative bg-navy-900 text-white p-10 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-gold-500 mb-4">Giải pháp TRUSTGREEN</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Chuẩn hóa dữ liệu theo khung EU Taxonomy & ISO.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Mạng lưới chuyên gia độc lập xác thực dữ liệu.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Hồ sơ tín dụng xanh kỹ thuật số (Green Profile).</span>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const Mechanism: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-serif font-bold text-navy-900 mb-16">Cơ chế hoạt động</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 hidden md:block"></div>
        
        {[
          { icon: Zap, title: "1. Tự đánh giá AI", desc: "Sử dụng công cụ Health Check để nhận diện nhanh hiện trạng và lỗ hổng." },
          { icon: Users, title: "2. Chuyên gia xác thực", desc: "Kết nối với chuyên gia top 5% để rà soát, tư vấn và cấp xác thực." },
          { icon: TrendingUp, title: "3. Nhận vốn ưu đãi", desc: "Hồ sơ đạt chuẩn được gửi tới đối tác Ngân hàng với lãi suất tốt nhất." }
        ].map((item, idx) => (
          <div key={idx} className="group bg-white p-8 border border-gray-100 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-navy-900 text-gold-500 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
              <item.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const USP: React.FC = () => (
  <section className="py-20 bg-navy-900 text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-white mb-4">Lợi thế cạnh tranh</h2>
        <p className="text-gray-400">Tại sao TrustGreen là lựa chọn số 1 cho Tài chính Bền vững?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors">
            <Shield className="w-12 h-12 text-gold-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Compliance First</h3>
            <p className="text-gray-300 text-sm">Ưu tiên sự tuân thủ tuyệt đối các tiêu chuẩn quốc tế (CBAM, GRI, SBTi) để giảm thiểu rủi ro pháp lý dài hạn.</p>
        </div>
        <div className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors">
            <Award className="w-12 h-12 text-gold-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Chất lượng Tinh hoa</h3>
            <p className="text-gray-300 text-sm">Chỉ tuyển chọn Top 5% chuyên gia có chứng chỉ hành nghề và kinh nghiệm thực chiến trên 5 năm.</p>
        </div>
        <div className="bg-navy-800 p-8 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors">
            <Lock className="w-12 h-12 text-gold-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Bảo mật & Tốc độ</h3>
            <p className="text-gray-300 text-sm">Quy trình số hóa 100%, bảo mật dữ liệu doanh nghiệp, rút ngắn thời gian phê duyệt vốn lên đến 60%.</p>
        </div>
      </div>
    </div>
  </section>
);

export const Testimonials: React.FC<FeaturesProps> = ({ onNavigate }) => (
  <section className="py-20 bg-ivory">
     <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-navy-900 text-center mb-16">Lời chứng thực</h2>
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
          {TESTIMONIALS.map((t, i) => (
             <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-xl shadow-md border-t-4 border-gold-500 snap-center">
                <div className="mb-4">
                  {[1,2,3,4,5].map(star => <span key={star} className="text-gold-500 text-lg">★</span>)}
                </div>
                <p className="text-gray-600 italic mb-6">"{t.quote}"</p>
                <div>
                   <h4 className="font-bold text-navy-900">{t.name}</h4>
                   <p className="text-sm text-gray-500 uppercase tracking-wide">{t.role}</p>
                </div>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <div className="bg-forest-800 p-8 md:p-12 rounded-2xl relative overflow-hidden text-white mx-auto max-w-4xl">
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-gold-500 rounded-full opacity-20"></div>
               <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10">Sẵn sàng để "Xanh hóa" nguồn vốn?</h3>
               <p className="mb-8 relative z-10 text-gray-200">Bắt đầu hành trình với bài đánh giá miễn phí chỉ trong 2 phút.</p>
               <Button onClick={() => onNavigate('assessment')} className="relative z-10 bg-white text-forest-900 hover:bg-gray-100">
                  Thực hiện Đánh giá Ngay <ArrowRight className="ml-2 w-4 h-4"/>
               </Button>
            </div>
        </div>
     </div>
  </section>
);