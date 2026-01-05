
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-12 max-w-[1440px] mx-auto">
      <div className="rounded-[32px] overflow-hidden bg-gradient-to-r from-[#d1fffc] via-[#f7f2b9] to-[#c7f4a5] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 relative">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
        
        <div className="flex-1 z-10">
          <h2 className="text-4xl md:text-6xl font-black text-gray-800 leading-tight mb-4">
            Get 15% OFF<br />your next<br />purchase!
          </h2>
        </div>

        <div className="flex-1 z-10 max-w-lg w-full">
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Sign up today for a <span className="font-bold">15% OFF</span> welcome coupon and weekly emails with design inspiration and deals on fonts, graphics, templates & more!
          </p>
          
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 px-4 py-3 outline-none text-gray-800"
            />
            <button className="bg-[#48bdb2] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#3caaa0] transition-colors">
              SIGN UP
            </button>
          </div>
          
          <p className="mt-4 text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">
            By completing this form you agree to receive email announcements, news, and special offers from TemplateFlow. You may unsubscribe at any time. See our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
