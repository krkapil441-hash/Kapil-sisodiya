
import React from 'react';
import { Target, Zap, TrendingUp, Search } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Performance Marketing",
      desc: "Full-funnel Meta and Google Ads management aimed at maximizing ROAS and lowering acquisition costs.",
      features: ["Advanced Targeting", "Budget Scaling", "A/B Creative Testing"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Local SEO Mastery",
      desc: "Helping local businesses dominate their map pack to drive real foot traffic and local inquiries.",
      features: ["GMB Optimization", "Citation Building", "Local Content Strategy"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Content & Copywriting",
      desc: "High-impact ad scripts and short-form content designed to capture attention in under 3 seconds.",
      features: ["Hook Frameworks", "Conversion Copy", "Short-form Scripts"],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">Services Offered</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
          Focused services tailored for small to medium businesses looking for professional digital execution.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-8 text-left hover:border-indigo-600 transition-all shadow-sm hover:shadow-md">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
