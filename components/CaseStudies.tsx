
import React from 'react';
import { Search, BarChart3, TrendingUp, Users } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Local SEO: Dominating Local Map Pack",
      type: "Google Business Profile & On-Page SEO",
      client: "Service-Based Local Business",
      icon: <Search className="w-8 h-8" />,
      challenge: "Low visibility for 'near me' searches and high dependency on paid leads.",
      strategy: [
        "NAP consistency cleanup across citations.",
        "Keyword-rich GMB posts and image optimization.",
        "Internal linking audit and localized landing pages."
      ],
      results: "45% increase in 'Request Quote' clicks within 3 months.",
      color: "indigo"
    },
    {
      title: "Performance Marketing: Lead Quality Scale",
      type: "Meta & Google Ads",
      client: "B2B / E-commerce Lead Gen",
      icon: <BarChart3 className="w-8 h-8" />,
      challenge: "High Cost Per Lead (CPL) and low quality of incoming leads.",
      strategy: [
        "Shifted from broad targeting to interest-based lookalikes.",
        "Refined ad script writing focusing on pain-point resolution.",
        "Implemented conversion tracking for bottom-of-funnel events."
      ],
      results: "32% reduction in CPL while increasing lead-to-conversion rate by 15%.",
      color: "emerald"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Live Client Results</h2>
          <p className="mt-4 text-lg text-slate-600">Real strategies, ethical claims, and tangible growth.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cases.map((item, idx) => (
            <div key={idx} className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.color === 'indigo' ? 'bg-indigo-600 text-white' : 'bg-emerald-600 text-white'}`}>
                {item.icon}
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">{item.type}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-400" /> The Challenge
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{item.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase mb-3">Strategic Execution</h4>
                  <ul className="space-y-3">
                    {item.strategy.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${item.color === 'indigo' ? 'bg-indigo-400' : 'bg-emerald-400'}`}></div>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`p-6 rounded-2xl ${item.color === 'indigo' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-emerald-600 text-white shadow-lg shadow-emerald-100'}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-widest opacity-80">Key Outcome</span>
                  </div>
                  <p className="text-xl font-bold">{item.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
