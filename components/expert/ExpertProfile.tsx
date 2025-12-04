import React, { useState } from 'react';
import { ViewState } from '../../types';
import { MOCK_EXPERT } from '../../constants';
import Button from '../Button';
import { Shield, Award, FileCheck, MapPin, Star, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const ExpertProfile: React.FC<Props> = ({ onNavigate }) => {
  const [conflictChecked, setConflictChecked] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleConflictCheck = () => {
    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      setConflictChecked(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
           <span className="cursor-pointer hover:text-navy-900" onClick={() => onNavigate('home')}>Trang chủ</span> / <span>Danh sách chuyên gia</span> / <span className="text-navy-900 font-medium">{MOCK_EXPERT.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: ID & Quick Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               <div className="h-32 bg-navy-900 relative">
                  <div className="absolute top-4 right-4 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded">
                     TOP RATED
                  </div>
               </div>
               <div className="px-6 pb-6 relative">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-md absolute -top-16 left-1/2 -translate-x-1/2 overflow-hidden bg-gray-200">
                     <img src={MOCK_EXPERT.image} alt={MOCK_EXPERT.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-20 text-center">
                     <h1 className="text-2xl font-serif font-bold text-navy-900">{MOCK_EXPERT.name}</h1>
                     <p className="text-gray-500 text-sm mb-4">{MOCK_EXPERT.title}</p>
                     
                     <div className="flex justify-center gap-2 mb-6">
                        {MOCK_EXPERT.badges.includes('verified') && (
                           <span className="group relative">
                              <Shield className="w-5 h-5 text-blue-500" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Đã xác thực danh tính</span>
                           </span>
                        )}
                        {MOCK_EXPERT.badges.includes('degree') && (
                           <span className="group relative">
                              <Award className="w-5 h-5 text-gold-500" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Đã xác minh bằng cấp</span>
                           </span>
                        )}
                        {MOCK_EXPERT.badges.includes('nda') && (
                           <span className="group relative">
                              <FileCheck className="w-5 h-5 text-green-600" />
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">Cam kết bảo mật (NDA)</span>
                           </span>
                        )}
                     </div>

                     <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 mb-6">
                        <div>
                           <div className="text-xl font-bold text-navy-900">{MOCK_EXPERT.experienceYears} năm</div>
                           <div className="text-xs text-gray-500 uppercase">Kinh nghiệm</div>
                        </div>
                        <div>
                           <div className="text-xl font-bold text-navy-900">{MOCK_EXPERT.projectsCompleted}+</div>
                           <div className="text-xs text-gray-500 uppercase">Dự án</div>
                        </div>
                     </div>
                     
                     <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
                        <span className="text-xs text-gray-500 block">Giá tham khảo:</span>
                        <span className="text-xl font-bold text-forest-800">{MOCK_EXPERT.ratePerHour.toLocaleString('vi-VN')} đ / giờ</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Conflict Check Widget */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
               <h3 className="font-bold text-navy-900 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                  Kiểm tra Xung đột lợi ích
               </h3>
               <p className="text-xs text-gray-500 mb-4">Bắt buộc thực hiện trước khi thuê để đảm bảo chuyên gia không làm việc cho đối thủ trực tiếp.</p>
               
               {!conflictChecked ? (
                  <Button 
                     variant="outline" 
                     fullWidth 
                     onClick={handleConflictCheck}
                     disabled={isChecking}
                  >
                     {isChecking ? 'Đang kiểm tra...' : 'Kiểm tra ngay'}
                  </Button>
               ) : (
                  <div className="bg-green-50 text-green-700 p-3 rounded text-sm flex items-center justify-center font-medium border border-green-200">
                     <CheckCircle2 className="w-4 h-4 mr-2" />
                     Không phát hiện xung đột
                  </div>
               )}
            </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Bio */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
               <h2 className="text-xl font-serif font-bold text-navy-900 mb-4 border-b border-gray-100 pb-2">Giới thiệu</h2>
               <p className="text-gray-700 leading-relaxed mb-6">{MOCK_EXPERT.bio}</p>
               
               <div className="flex flex-wrap gap-2">
                  {MOCK_EXPERT.keywords.map((kw, i) => (
                     <span key={i} className="px-3 py-1 bg-navy-50 text-navy-800 text-sm rounded-full font-medium">
                        {kw}
                     </span>
                  ))}
               </div>
            </section>

            {/* Service Packages */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
               <h2 className="text-xl font-serif font-bold text-navy-900 mb-6 border-b border-gray-100 pb-2">Gói Dịch vụ</h2>
               <div className="space-y-4">
                  {MOCK_EXPERT.packages.map((pkg, i) => (
                     <div key={i} className="border border-gray-200 rounded-lg p-5 hover:border-gold-500 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="font-bold text-navy-900 group-hover:text-gold-600 transition-colors">{pkg.title}</h3>
                           <span className="font-bold text-forest-800">{pkg.price}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{pkg.desc}</p>
                     </div>
                  ))}
               </div>
            </section>

            {/* Case Studies */}
            <section className="bg-white p-8 rounded-xl shadow-sm">
               <h2 className="text-xl font-serif font-bold text-navy-900 mb-6 border-b border-gray-100 pb-2">Dự án Tiêu biểu (Case Studies)</h2>
               <div className="grid grid-cols-1 gap-6">
                  {MOCK_EXPERT.caseStudies.map((cs, i) => (
                     <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-navy-900">
                        <div className="mb-3">
                           <span className="text-xs font-bold uppercase text-red-500">Vấn đề:</span>
                           <p className="text-sm text-gray-800">{cs.problem}</p>
                        </div>
                        <div className="mb-3">
                           <span className="text-xs font-bold uppercase text-blue-500">Giải pháp:</span>
                           <p className="text-sm text-gray-800">{cs.solution}</p>
                        </div>
                        <div>
                           <span className="text-xs font-bold uppercase text-green-600">Kết quả:</span>
                           <p className="text-sm text-gray-800 font-medium">{cs.result}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            <div className="flex justify-end pt-4">
               <Button 
                  size="lg" 
                  disabled={!conflictChecked} 
                  className="shadow-xl"
               >
                  Đặt lịch hẹn tư vấn
               </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;