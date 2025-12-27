
import React from 'react';
import { 
  Globe, 
  MapPin, 
  Cpu, 
  PenTool, 
  BarChart, 
  Smartphone, 
  Search, 
  LineChart 
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      category: "Strategy & SEO",
      skills: [
        { name: "Digital Strategy", icon: <LineChart className="w-5 h-5" /> },
        { name: "Local SEO (GMB)", icon: <MapPin className="w-5 h-5" /> },
        { name: "On-Page SEO", icon: <Globe className="w-5 h-5" /> },
        { name: "Keyword Research", icon: <Search className="w-5 h-5" /> },
      ]
    },
    {
      category: "Performance Ads",
      skills: [
        { name: "Meta Ads (FB/IG)", icon: <Smartphone className="w-5 h-5" /> },
        { name: "Google Search Ads", icon: <BarChart className="w-5 h-5" /> },
        { name: "Lead Generation", icon: <Cpu className="w-5 h-5" /> },
        { name: "Ad Script Writing", icon: <PenTool className="w-5 h-5" /> },
      ]
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="lg:max-w-md">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Expertise & Technical Stack</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              A blend of creative copywriting and analytical thinking. I use modern tools to ensure every campaign is trackable and optimized.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Google Analytics', 'Ahrefs', 'Meta Ads Manager', 'Google Ads Editor', 'Canva', 'Semrush'].map((tool) => (
                <span key={tool} className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm">{group.category}</h3>
                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-4 bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300 group">
                      <div className="text-indigo-400 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-slate-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
