import React from 'react';
import Button from '../Button';
import { ViewState } from '../../types';
import { ArrowRight, Globe } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern skyscraper with green plants" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Globe size={16} className="text-gold-500" />
            <span className="text-white text-xs md:text-sm font-medium tracking-wider uppercase">Kết nối chuẩn EU Taxonomy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Khơi Thông <span className="text-gold-500 italic">Dòng Vốn Xanh</span> <br />
            Bằng Tri Thức Chuyên Gia.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Kết nối Doanh nghiệp SME với nguồn vốn ưu đãi toàn cầu thông qua quy trình thẩm định dữ liệu minh bạch, được xác thực bởi mạng lưới chuyên gia hàng đầu.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Button 
              onClick={() => onNavigate('assessment')} 
              className="text-base px-8 py-4 rounded-sm"
            >
              Đánh giá Hồ sơ Ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-base px-8 py-4 border-white text-white hover:bg-white hover:text-navy-900 rounded-sm"
            >
              Tham gia Mạng lưới Chuyên gia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;