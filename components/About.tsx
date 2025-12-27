
import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6 sm:text-4xl">
              Professional Growth with an <br className="hidden md:block" /> 
              <span className="text-indigo-600">Ethical Framework.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                As a Digital Marketing Strategist, I don't believe in "vanity metrics." A million impressions are worthless if they don't lead to a conversation, a booking, or a sale.
              </p>
              <p>
                My approach is rooted in <strong>Data & Search Intent</strong>. Whether I'm optimizing a Google Business Profile for local dominance or crafting ad scripts for Meta, my goal is to bridge the gap between where your customers are and where you want them to be.
              </p>
              <p>
                With over a year of experience at <strong>Muftlo</strong>, I have transitioned from foundational learning to handling high-stakes live client accounts across SEO and Performance Marketing.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Client-focused approach",
                "Data-driven decision making",
                "Transparent reporting",
                "Scalable growth models"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-6 bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">My Philosophy</h3>
              <p className="text-slate-600 mb-8 italic">
                "Marketing is no longer about the stuff that you make, but about the stories you tell and the problems you solve for your local community."
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-indigo-600 mb-1">Local SEO Focus</h4>
                  <p className="text-sm text-slate-500">Helping small businesses become the #1 choice in their neighborhood.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-indigo-600 mb-1">Performance Ads</h4>
                  <p className="text-sm text-slate-500">Balancing creative hooks with algorithmic precision to lower CPL.</p>
                </div>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-100 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
