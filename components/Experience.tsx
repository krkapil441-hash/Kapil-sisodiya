
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg text-slate-600">Building a track record of growth and consistency.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-0 pl-8 pb-12">
            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-sm"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold text-slate-900">Digital Marketing Specialist</h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>2023 - Present</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg mb-6">
              <Briefcase className="w-5 h-5" />
              <span>Muftlo</span>
            </div>
            
            <div className="prose prose-slate prose-lg text-slate-600 max-w-none">
              <p>
                Joined Muftlo as a core member of the digital marketing team. Responsible for end-to-end execution of multi-channel strategies for a diverse portfolio of clients.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                  <span>Managed Google Ads and Meta Ads campaigns for lead generation, focusing on audience segmentation and A/B testing ad copies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                  <span>Spearheaded Local SEO initiatives, optimizing Google Business Profiles for improved local map pack rankings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                  <span>Conducted in-depth search intent analysis and competitor research to identify untapped keyword opportunities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></div>
                  <span>Developed short-form content scripts for high-converting social media video ads.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative border-l-2 border-transparent ml-4 md:ml-0 pl-8">
             <div className="absolute -left-[11px] top-0 w-5 h-5 bg-slate-200 rounded-full border-4 border-white shadow-sm"></div>
             <p className="text-slate-400 font-medium">Ongoing growth and client success...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
