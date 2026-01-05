
import React from 'react';
import { Twitter, Instagram, Facebook, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767629735/d7ossdffxjwyecr82uce.svg" 
                alt="Best Email Designs" 
                className="h-20 md:h-28 object-contain cursor-pointer"
              />
            </div>
            <p className="text-gray-500 mb-8 max-w-xs text-sm leading-relaxed">
              Premium email design resources for high-growth businesses in the skincare, beauty, and therapy sectors.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Globe size={20} className="hover:text-pastel-green cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-pastel-green cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-pastel-green cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-pastel-green cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Solutions</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Skincare Brands</a></li>
              <li><a href="#" className="hover:text-pastel-green">Therapy Practices</a></li>
              <li><a href="#" className="hover:text-pastel-green">Fashion Ecommerce</a></li>
              <li><a href="#" className="hover:text-pastel-green">Welcome Sequences</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Design Blog</a></li>
              <li><a href="#" className="hover:text-pastel-green">Email Benchmarks</a></li>
              <li><a href="#" className="hover:text-pastel-green">License Agreement</a></li>
              <li><a href="#" className="hover:text-pastel-green">Support Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Templates</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Klaviyo Flows</a></li>
              <li><a href="#" className="hover:text-pastel-green">Mailchimp Sets</a></li>
              <li><a href="#" className="hover:text-pastel-green">HTML Source</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Our Mission</a></li>
              <li><a href="#" className="hover:text-pastel-green">Partner Program</a></li>
              <li><a href="#" className="hover:text-pastel-green">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Use</a>
            <a href="#" className="hover:text-gray-600">Cookie Policy</a>
          </div>
          <div>
            © 2025 Best Email Designs, Inc. Optimized for Business Growth.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
