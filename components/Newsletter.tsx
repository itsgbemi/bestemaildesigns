
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="px-4 md:px-8 py-16 max-w-[1440px] mx-auto">
      <div className="rounded-[48px] overflow-hidden bg-gradient-to-br from-[#e0fdfb] via-[#f7f2b9] to-[#f4e0fd] p-8 md:p-20 flex flex-col md:flex-row items-center gap-12 relative shadow-inner">
        
        <div className="flex-1 z-10 text-center md:text-left">
          <span className="text-pastel-green font-black uppercase tracking-[0.3em] text-xs mb-4 block">Insider Access</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-800 leading-[1.1] mb-6">
            Scale your brand<br />with better<br /><span className="text-pastel-green">Email Strategy.</span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-lg leading-relaxed">
            Join 12,000+ business owners receiving weekly design tips and <span className="font-bold text-dark-text">15% OFF</span> their first professional template.
          </p>
        </div>

        <div className="flex-1 z-10 max-w-lg w-full">
          <div className="flex flex-col gap-6 bg-white/50 backdrop-blur-xl p-6 md:p-8 rounded-[32px] border border-white/60 shadow-xl">
            <div className="flex flex-col sm:flex-row bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100 gap-2">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="flex-1 px-4 py-4 outline-none text-gray-800 bg-transparent font-medium"
                aria-label="Email address"
              />
              <button className="bg-pastel-green text-white px-8 py-4 rounded-xl font-black hover:bg-[#096a67] transition-all transform hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                JOIN NOW
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-widest text-center">
                Trusted by creators in Beauty, Wellness, and Fashion.
              </p>
              <p className="text-[10px] text-gray-400 leading-relaxed text-center italic">
                By signing up, you consent to receive marketing emails from Best Email Designs. You can unsubscribe at any time. View our Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
