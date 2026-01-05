
import React, { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

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
                placeholder="Find templates for Skincare, Fashion, Therapy..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-1 focus:ring-pastel-green"
              />
              <div className="relative ml-2">
                <button 
                  onClick={() => toggleDropdown('niches')}
                  className="flex items-center gap-1 text-sm font-medium text-gray-600 px-4 py-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-gray-200"
                >
                  Niches <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'niches' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'niches' && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-[60] animate-in fade-in zoom-in-95 duration-200">
                    {['Skincare', 'Therapy', 'Beauty', 'Fashion', 'Wellness', 'Luxury'].map((niche) => (
                      <a key={niche} href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-beige-bg hover:text-pastel-green rounded-xl transition-colors font-medium">
                        {niche}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767629735/d7ossdffxjwyecr82uce.svg" 
              alt="Best Email Designs Logo" 
              className="h-14 md:h-20 cursor-pointer object-contain"
            />
          </div>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#" className="hover:text-pastel-green transition-colors">For Agencies</a>
              <a href="#" className="hover:text-pastel-green transition-colors">Log in</a>
            </div>
            
            <button className="bg-dark-text text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-pastel-green transition-all shadow-sm">
              Join & Save
            </button>
            
            <button className="relative group p-1" onClick={onOpenCart} aria-label="View Shopping Cart">
              <ShoppingCart size={24} className="group-hover:text-pastel-green transition-colors" />
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
          {CATEGORIES.slice(1, 6).map((cat) => (
            <a key={cat.id} href="#" className="hover:text-pastel-green border-b-2 border-transparent hover:border-pastel-green pb-1 transition-all">
              {cat.label}
            </a>
          ))}
          <a href="#" className="bg-pink-100 text-pink-600 px-3 py-0.5 rounded-full hover:bg-pink-200 transition-colors">New Drops</a>
          
          <div className="relative">
            <button 
              onClick={() => toggleDropdown('flows')}
              className="flex items-center gap-1 hover:text-pastel-green transition-colors"
            >
              More Flows <ChevronDown size={14} className={`transition-transform ${activeDropdown === 'flows' ? 'rotate-180' : ''}`} />
            </button>
            
            {activeDropdown === 'flows' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-[60] animate-in fade-in zoom-in-95 duration-200">
                {['Cart Recovery', 'Win-back', 'Post-purchase', 'VIP Exclusive', 'Re-engagement', 'Cross-sell'].map((flow) => (
                  <a key={flow} href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-beige-bg hover:text-pastel-green rounded-xl transition-colors font-medium">
                    {flow}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4 z-[100]">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search industries..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-beige-bg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {CATEGORIES.map(cat => (
                <a key={cat.id} href="#" className="text-sm font-bold py-3 px-4 bg-beige-bg rounded-xl text-center hover:bg-pastel-green hover:text-white transition-all">{cat.label}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
