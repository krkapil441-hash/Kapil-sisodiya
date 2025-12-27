
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-indigo-600">KAPIL.</a>
            <p className="mt-2 text-slate-500 text-sm">
              Helping brands thrive in a digital-first world.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#case-studies" className="hover:text-indigo-600 transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Kapil. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
