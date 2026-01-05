
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center bg-beige-bg">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-12 opacity-100 transition-opacity duration-700">
        Bring your creative<br />ideas to life.
      </h1>

      <div className="w-full max-w-3xl relative mb-12 transition-all duration-1000">
        <div className="flex items-center bg-white rounded-full shadow-xl border border-gray-100 p-2 pl-6">
          <Search size={22} className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search millions of creative assets..."
            className="flex-1 text-lg outline-none bg-transparent"
          />
          <div className="h-8 w-px bg-gray-200 mx-4 hidden sm:block"></div>
          <button className="hidden sm:flex items-center gap-2 px-6 py-2 text-gray-600 font-medium hover:text-pastel-green">
            All Categories <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl transition-all duration-1000">
        {['graphic', 'vector illustration', 'digital illustration', 'modern typography', 'logo', 'logo mockup', 'email template'].map((tag) => (
          <button
            key={tag}
            className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-medium hover:border-pastel-green hover:text-pastel-green transition-all shadow-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
