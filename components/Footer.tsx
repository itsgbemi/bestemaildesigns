
import React from 'react';
import { Twitter, Instagram, Facebook, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <img 
              src="https://res.cloudinary.com/dqhawdcol/image/upload/v1767629735/d7ossdffxjwyecr82uce.svg" 
              alt="TemplateFlow" 
              className="h-8 mb-6"
            />
            <p className="text-gray-500 mb-8 max-w-xs text-sm leading-relaxed">
              Accelerate your projects with millions of ready-to-use products from independent creators worldwide.
            </p>
            <div className="flex gap-4 text-gray-400">
              <Globe size={20} className="hover:text-pastel-green cursor-pointer" />
              <Facebook size={20} className="hover:text-pastel-green cursor-pointer" />
              <Twitter size={20} className="hover:text-pastel-green cursor-pointer" />
              <Instagram size={20} className="hover:text-pastel-green cursor-pointer" />
              <Github size={20} className="hover:text-pastel-green cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Earn</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Affiliate Partner Benefits</a></li>
              <li><a href="#" className="hover:text-pastel-green">Shop Benefits</a></li>
              <li><a href="#" className="hover:text-pastel-green">Become an Ambassador</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Resources</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Blog</a></li>
              <li><a href="#" className="hover:text-pastel-green">Collections</a></li>
              <li><a href="#" className="hover:text-pastel-green">Help Center</a></li>
              <li><a href="#" className="hover:text-pastel-green">Licenses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">The Goods</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">Free Drops</a></li>
              <li><a href="#" className="hover:text-pastel-green">Enterprise Sales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-4 text-[13px] font-medium text-gray-700">
              <li><a href="#" className="hover:text-pastel-green">About</a></li>
              <li><a href="#" className="hover:text-pastel-green">Brand</a></li>
              <li><a href="#" className="hover:text-pastel-green">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-400 font-medium uppercase tracking-widest">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
          <div>
            © 2025 TemplateFlow, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
