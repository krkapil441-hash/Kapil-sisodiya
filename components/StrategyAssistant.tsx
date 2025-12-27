
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, Loader2, Send } from 'lucide-react';

const StrategyAssistant: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getStrategy = async () => {
    if (!industry.trim()) return;
    
    setLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are Kapil, a digital marketing expert. Give a concise (max 100 words), high-impact marketing tip for a business in the "${industry}" industry. Focus on either Local SEO or Meta Ads. Speak professionally as Kapil. Start directly with the advice.`,
        config: {
          temperature: 0.7,
        }
      });

      setSuggestion(response.text || "I'm having a small technical glitch. Let's talk directly via the contact form!");
    } catch (err) {
      console.error(err);
      setError("I couldn't generate a tip right now, but I'd love to chat in person!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">Kapil's Strategy Bot</h3>
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g. Real Estate, Dental Clinic, Gym..."
            className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-slate-800"
            onKeyDown={(e) => e.key === 'Enter' && getStrategy()}
          />
          <button
            onClick={getStrategy}
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
        
        {suggestion && (
          <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100 animate-in fade-in slide-in-from-top-4 duration-500">
            <p className="text-slate-800 leading-relaxed italic">"{suggestion}"</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-200 rounded-full"></div>
              <span className="text-xs font-bold text-indigo-600 uppercase">Kapil's AI Assistant</span>
            </div>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyAssistant;
