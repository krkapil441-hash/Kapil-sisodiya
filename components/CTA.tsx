
import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-center relative">
          {/* Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-[0.05] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-[0.05] rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
              Ready to take your digital presence to the next level?
            </h2>
            <p className="text-indigo-100 text-xl mb-12 max-w-xl mx-auto">
              Whether it's a quick audit or a long-term strategy, I'm ready to help you grow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:contact@kapil.com" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-indigo-500 text-white rounded-2xl font-bold text-lg hover:bg-indigo-400 transition-all border border-indigo-400 flex items-center justify-center gap-3"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-white mb-1">100%</span>
                <span className="text-indigo-100 text-xs font-bold uppercase tracking-widest">Ethical Claims</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-white mb-1">24/7</span>
                <span className="text-indigo-100 text-xs font-bold uppercase tracking-widest">Support</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-white mb-1">ROI</span>
                <span className="text-indigo-100 text-xs font-bold uppercase tracking-widest">Driven Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
