
import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#faf7f2] border-b border-gray-200 sticky top-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-1">
            <div className="hidden lg:flex relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search millions of creative assets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-pastel-green"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 border-l border-gray-300 ml-4 h-6 self-center group cursor-pointer">
                <span className="text-sm font-medium text-gray-600 px-3 flex items-center gap-1">
                  All Categories <ChevronDown size={14} />
                </span>
              </div>
            </div>
            
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767629735/d7ossdffxjwyecr82uce.svg" 
              alt="TemplateFlow Logo" 
              className="h-8 md:h-10 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-pastel-green">Enterprise</a>
              <button className="text-gray-400">...</button>
              <a href="#" className="hover:text-pastel-green">Join</a>
              <a href="#" className="hover:text-pastel-green">Log in</a>
            </div>
            
            <button className="bg-[#5c4eba] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-[#4b3e9b]">
              Save 25%
            </button>
            
            <button className="relative group p-1" onClick={onOpenCart}>
              <ShoppingCart size={24} className="group-hover:text-pastel-green" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-pastel-green text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-[13px] font-semibold text-gray-700">
          {['Fonts', 'Templates & Themes', 'Graphics', 'Photos', 'Illustrations', 'Icons', 'Mockups', 'Brushes & More', '3D'].map((item) => (
            <a key={item} href="#" className="hover:text-pastel-green border-b-2 border-transparent hover:border-pastel-green pb-1">
              {item}
            </a>
          ))}
          <a href="#" className="bg-pink-100 text-pink-600 px-3 py-0.5 rounded-full hover:bg-pink-200">Sale</a>
          <a href="#" className="flex items-center gap-1 hover:text-pastel-green">
            More <ChevronDown size={14} />
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-4 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {['Fonts', 'Templates', 'Graphics', 'Photos', 'Illustrations', 'Sale'].map(item => (
              <a key={item} href="#" className="text-lg font-medium py-2 border-b border-gray-100">{item}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
