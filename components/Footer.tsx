import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gold-500 rounded-sm flex items-center justify-center">
                  <span className="text-navy-900 font-serif font-bold text-lg">T</span>
                </div>
                <div className="font-serif font-bold text-xl tracking-wide">
                  TRUSTGREEN
                </div>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Nền tảng công nghệ tài chính tiên phong kết nối nguồn vốn xanh bền vững với doanh nghiệp Việt Nam thông qua sự minh bạch và tri thức chuyên gia.
             </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Nền tảng</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Đánh giá tín dụng xanh</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Tìm chuyên gia</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Đăng ký đối tác</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Câu chuyện thành công</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Về chúng tôi</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Sứ mệnh & Tầm nhìn</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Đội ngũ lãnh đạo</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Tin tức & Sự kiện</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-gold-500">Liên hệ</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>info@tinxanh.vn</li>
              <li>+84 28 9999 8888</li>
              <li>Tầng 12, Tòa nhà Tài Chính, Quận 1, TP.HCM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 GreenConnect Project. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản sử dụng</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;