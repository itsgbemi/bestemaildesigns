
import React, { useState, useEffect } from 'react';
import { X, Monitor, Smartphone, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface ProductPreviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    if (!isOpen) {
      setViewMode('desktop');
    }
  }, [isOpen]);

  if (!product) return null;

  const getIndustryBenefits = (category: string) => {
    switch(category) {
      case 'therapy': return 'HIPAA-compliant aesthetic, calming typography, and professional layouts.';
      case 'skincare': return 'High-resolution product grids, routine-focused layouts, and clean beauty design.';
      case 'fashion': return 'Mobile-first editorial grids, lookbook styles, and bold shopping CTAs.';
      default: return 'High-conversion design, responsive layout, and dark-mode optimization.';
    }
  };

  return (
    <div className={`fixed inset-0 z-[120] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-dark-text/80 backdrop-blur-md" onClick={onClose} />
      
      <div className={`relative bg-beige-bg w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl transition-transform duration-500 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Left Side: Live Preview Area */}
        <div className="flex-1 bg-gray-100 flex flex-col p-6 min-h-[400px] border-r border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-200">
              <button 
                onClick={() => setViewMode('desktop')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-pastel-green text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                aria-label="Desktop Preview"
              >
                <Monitor size={20} />
              </button>
              <button 
                onClick={() => setViewMode('mobile')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-pastel-green text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                aria-label="Mobile Preview"
              >
                <Smartphone size={20} />
              </button>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Responsive Simulation</span>
          </div>

          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div className={`bg-white shadow-2xl transition-all duration-500 overflow-hidden relative border border-gray-200 ${viewMode === 'desktop' ? 'w-full aspect-video rounded-lg' : 'w-[300px] h-[520px] rounded-[32px] border-[10px] border-gray-900 shadow-xl'}`}>
              <img src={product.image} alt={`${product.title} Email Preview`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[450px] p-10 flex flex-col bg-white">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-dark-text transition-colors">
            <X size={24} />
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-pastel-green mb-3">
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">Industry Standard</span>
              <div className="h-px flex-1 bg-pastel-green/20"></div>
            </div>
            <h2 className="text-3xl font-black text-dark-text mb-4 leading-tight">{product.title}</h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
              <span className="text-pastel-green capitalize px-3 py-1 bg-pastel-green/5 rounded-full">{product.category} niche</span>
              <span>•</span>
              <span className="text-dark-text underline">Professional License</span>
            </div>
          </div>

          <div className="space-y-6 mb-10 flex-1">
            <div className="p-5 rounded-2xl bg-beige-bg border border-gray-100">
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {getIndustryBenefits(product.category)} Optimized for maximum deliverability on Outlook, Gmail, and Apple Mail.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                'Klaviyo & Mailchimp Ready',
                'Fully Responsive Design',
                'Dark Mode Optimized',
                'Conversion-Focused CTAs'
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                  <CheckCircle2 size={18} className="text-pastel-green" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Single License</span>
                <span className="text-4xl font-black text-dark-text">${product.price}</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded">Instantly Downloadable</span>
              </div>
            </div>
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-pastel-green text-white py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-[#096a67] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-teal-100"
            >
              <ShoppingCart size={24} />
              GET THIS DESIGN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
