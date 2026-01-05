
import React, { useState } from 'react';
import { Heart, Plus, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { generateSubjectLines } from '../services/geminiService';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onPreview: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onPreview }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSubjectLines, setShowSubjectLines] = useState(false);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [isLoadingSubjects, setIsLoadingSubjects] = useState(false);

  const handleAIHelp = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (subjects.length > 0) {
      setShowSubjectLines(!showSubjectLines);
      return;
    }
    setIsLoadingSubjects(true);
    const ideas = await generateSubjectLines(product.title);
    setSubjects(ideas);
    setIsLoadingSubjects(false);
    setShowSubjectLines(true);
  };

  return (
    <div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPreview(product)}
    >
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-sm border border-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isFeatured && (
            <span className="bg-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm flex items-center gap-1">
              <span className="w-3 h-3 bg-teal-500 rounded-full flex items-center justify-center">
                <svg width="6" height="6" viewBox="0 0 10 10" fill="white"><path d="M1 5l3 3 5-6" stroke="white" strokeWidth="2" fill="none"/></svg>
              </span>
              Featured Shop
            </span>
          )}
          {product.isSale && (
            <span className="bg-pink-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm -rotate-6">
              20% OFF
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <button 
            className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 text-gray-600 hover:text-red-500"
            onClick={(e) => { e.stopPropagation(); /* Heart logic */ }}
          >
            <Heart size={20} />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="p-2 bg-pastel-green text-white rounded-full shadow-lg hover:bg-[#096a67]"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* AI Helper Trigger */}
        <button 
          onClick={handleAIHelp}
          className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm text-xs font-bold border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          {isLoadingSubjects ? 'Thinking...' : <><Sparkles size={12} className="text-pastel-green" /> Subject Ideas</>}
        </button>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Eye size={18} className="text-pastel-green" />
            <span className="text-xs font-bold uppercase tracking-wider">Quick Preview</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-between items-start gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate group-hover:text-pastel-green transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500">
            by <span className="underline hover:text-gray-900 cursor-pointer">{product.author}</span> in <span className="hover:text-gray-900 cursor-pointer">Design</span>
          </p>
        </div>
        <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded font-bold text-sm">
          ${product.price}
        </div>
      </div>

      {/* Subject Lines Popover */}
      {showSubjectLines && (
        <div 
          className="absolute bottom-full left-0 right-0 mb-4 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 z-10 animate-in fade-in slide-in-from-bottom-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-xs font-bold uppercase text-gray-400">AI Suggested Subject Lines</h4>
            <button onClick={() => setShowSubjectLines(false)} className="text-gray-400 hover:text-gray-600">
              <Plus className="rotate-45" size={16} />
            </button>
          </div>
          <ul className="space-y-2">
            {subjects.map((s, idx) => (
              <li key={idx} className="text-sm text-gray-700 p-2 bg-gray-50 rounded hover:bg-teal-50 border border-transparent hover:border-teal-100 cursor-pointer">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
