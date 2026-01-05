
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center bg-beige-bg">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-12 opacity-100 transition-opacity duration-700">
        Bring your creative<br />ideas to life.
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 font-medium leading-relaxed">
        High-performance email templates for <span className="text-dark-text font-bold">Skincare</span>, <span className="text-dark-text font-bold">Therapy</span>, and <span className="text-dark-text font-bold">Fashion</span> businesses. 
        Engineered for conversion and flawless deliverability.
      </p>

      <div className="w-full max-w-3xl relative mb-12 transition-all">
        <div className="flex items-center bg-white rounded-full shadow-2xl border border-gray-100 p-2 pl-6">
          <Search size={22} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search therapy, skincare, or fashion templates..."
            className="flex-1 text-lg outline-none bg-transparent"
          />
          <div className="h-8 w-px bg-gray-200 mx-4 hidden sm:block"></div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-2 text-gray-600 font-bold hover:text-pastel-green transition-colors">
            Trending Flows <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
        {['Skincare Flow', 'Therapy Intro', 'Beauty Launch', 'Fashion Lookbook', 'Welcome Series', 'Cart Recovery'].map((tag) => (
          <button
            key={tag}
            className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-600 font-semibold hover:border-pastel-green hover:text-pastel-green transition-all shadow-sm text-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
