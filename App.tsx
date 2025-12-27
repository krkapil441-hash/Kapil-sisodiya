
import React, { useState, useEffect } from 'react';
import { 
  User, 
  Target, 
  TrendingUp, 
  Search, 
  BarChart3, 
  FileText, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  Linkedin,
  Instagram,
  Zap,
  CheckCircle2,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Services from './components/Services';
import StrategyAssistant from './components/StrategyAssistant';
import CTA from './components/CTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <Services />
        <div className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Get a Free AI Marketing Tip
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Enter your industry below to see how I would approach your digital growth using my custom AI-assisted workflow.
              </p>
            </div>
            <StrategyAssistant />
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
