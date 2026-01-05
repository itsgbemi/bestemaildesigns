
import React, { useState, useEffect } from 'react';
import { X, Monitor, Smartphone, Sparkles, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { generateTemplateCopy } from '../services/geminiService';

interface ProductPreviewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductPreviewModal: React.FC<ProductPreviewModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [aiCopy, setAiCopy] = useState<{ headline: string, body: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAiCopy(null);
      setViewMode('desktop');
    }
  }, [isOpen]);

  if (!product) return null;

  const handleGenerateCopy = async () => {
    setIsLoading(true);
    const copy = await generateTemplateCopy(product.title);
    setAiCopy(copy);
    setIsLoading(false);
  };

  return (
    <div className={`fixed inset-0 z-[120] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="absolute inset-0 bg-dark-text/80 backdrop-blur-md" onClick={onClose} />
      
      <div className={`relative bg-beige-bg w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl transition-transform duration-500 transform ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Left Side: Live Preview Area */}
        <div className="flex-1 bg-gray-100 flex flex-col p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 p-1 bg-white rounded-xl shadow-sm border border-gray-200">
              <button 
                onClick={() => setViewMode('desktop')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-pastel-green text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Monitor size={20} />
              </button>
              <button 
                onClick={() => setViewMode('mobile')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-pastel-green text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Smartphone size={20} />
              </button>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Preview Mode</span>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className={`bg-white shadow-2xl transition-all duration-500 overflow-hidden relative ${viewMode === 'desktop' ? 'w-full aspect-video rounded-lg' : 'w-[320px] h-[540px] rounded-[32px] border-[8px] border-gray-900'}`}>
              <img src={product.image} alt="Preview" className="w-full h-full object-cover" />
              
              {/* AI Content Overlay */}
              {aiCopy && (
                <div className="absolute inset-0 bg-white/95 p-8 flex flex-col justify-center animate-in fade-in zoom-in-95">
                  <h3 className="text-2xl font-bold mb-4 text-dark-text">{aiCopy.headline}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{aiCopy.body}</p>
                  <div className="mt-auto flex items-center gap-2 text-pastel-green font-bold text-sm">
                    <CheckCircle2 size={16} /> AI Generated Context
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-pastel-green border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="font-bold text-pastel-green animate-pulse">Writing your copy...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="w-full md:w-[400px] p-10 flex flex-col border-l border-gray-100 bg-white">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-dark-text transition-colors">
            <X size={24} />
          </button>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-pastel-green mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ready to use</span>
              <div className="h-px flex-1 bg-pastel-green/20"></div>
            </div>
            <h2 className="text-3xl font-bold text-dark-text mb-4 leading-tight">{product.title}</h2>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>by <span className="text-dark-text font-bold underline">{product.author}</span></span>
              <span>•</span>
              <span className="capitalize">{product.category}</span>
            </div>
          </div>

          <div className="space-y-6 mb-10 flex-1">
            <div className="p-4 rounded-2xl bg-beige-bg border border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed">
                Save hours of work with this professional, drag-and-drop compatible layout. Perfect for marketing campaigns, newsletters, and announcements.
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleGenerateCopy}
                disabled={isLoading}
                className="w-full group flex items-center justify-center gap-3 py-3 border-2 border-dashed border-pastel-green rounded-xl text-pastel-green font-bold text-sm hover:bg-pastel-green hover:text-white transition-all disabled:opacity-50"
              >
                <Sparkles size={18} className="group-hover:animate-bounce" />
                Fill with AI Content
              </button>
              <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">Try it before you buy it</p>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 font-bold text-lg uppercase tracking-widest">Price</span>
              <span className="text-4xl font-black text-pastel-green">${product.price}</span>
            </div>
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-pastel-green text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-[#096a67] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-teal-100"
            >
              <ShoppingCart size={24} />
              BUY TEMPLATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewModal;
