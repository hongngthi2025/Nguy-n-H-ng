import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import Button from './Button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium transition-colors ${
    isScrolled ? 'text-white hover:text-gold-500' : 'text-white hover:text-gold-500'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
            <span className="text-navy-900 font-serif font-bold text-xl">T</span>
          </div>
          <div className={`font-serif font-bold text-2xl tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
            TRUSTGREEN
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => onNavigate('home')} className={linkClasses}>Trang chủ</button>
          <button className={linkClasses}>Mạng lưới Chuyên gia</button>
          <button className={linkClasses}>Đối tác Vốn</button>
          <button className={linkClasses}>Về chúng tôi</button>
          
          <Button 
            variant="primary" 
            className="rounded-sm"
            onClick={() => onNavigate('assessment')}
          >
            Đánh giá Hồ sơ
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-900 absolute top-full left-0 right-0 p-6 shadow-xl border-t border-navy-800">
          <div className="flex flex-col space-y-4">
             <button onClick={() => {onNavigate('home'); setIsMobileMenuOpen(false)}} className="text-white text-left text-lg">Trang chủ</button>
             <button className="text-white text-left text-lg">Mạng lưới Chuyên gia</button>
             <button className="text-white text-left text-lg">Đối tác Vốn</button>
             <Button onClick={() => {onNavigate('assessment'); setIsMobileMenuOpen(false)}} variant="primary" fullWidth>Đánh giá Hồ sơ</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;