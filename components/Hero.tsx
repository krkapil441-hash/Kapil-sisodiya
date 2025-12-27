
import React from 'react';
// Added TrendingUp to imports to resolve line 70 error
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full max-w-7xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 px-3 py-1 rounded-full text-indigo-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Performance Marketing & SEO Strategist</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Turning Traffic into <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Growth.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              I’m Kapil, a results-driven Digital Marketer specializing in scalable Meta & Google Ads and localized SEO strategies that drive measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#case-studies" 
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center"
              >
                My Services
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
              {/* Using a high-quality abstract placeholder that looks professional */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl rotate-3 transform shadow-2xl"></div>
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Digital Strategy" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl -rotate-3 transform border-4 border-white shadow-xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Live Clients</p>
                    <p className="text-lg font-bold text-slate-900">2 Active</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Experience</p>
                    <p className="text-lg font-bold text-slate-900">1+ Year @ Muftlo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;