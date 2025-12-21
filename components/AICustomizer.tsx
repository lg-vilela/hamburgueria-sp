
import React, { useState } from 'react';
import { getAIBurgerRecommendation } from '../services/geminiService';
import { RecommendedBurger } from '../types';
import { Sparkles, Loader2, UtensilsCrossed } from 'lucide-react';

const AICustomizer: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState<RecommendedBurger | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsultAI = async () => {
    if (!mood.trim()) return;
    setLoading(true);
    const result = await getAIBurgerRecommendation(mood);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-primary w-6 h-6 animate-pulse" />
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Experiência IA</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Qual o seu humor hoje?</h2>
        <p className="text-burger-gray mb-8 max-w-lg mx-auto text-lg">
          Deixe nossa inteligência artificial sugerir o hambúrguer perfeito para o seu momento.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center max-w-2xl mx-auto mb-10">
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Ex: Estou com fome de algo picante e aventureiro"
            className="flex-1 px-6 py-4 rounded-full border border-white/10 bg-white/5 focus:bg-white/10 focus:ring-2 focus:ring-primary outline-none text-lg text-white placeholder:text-gray-500 transition-all"
          />
          <button
            onClick={handleConsultAI}
            disabled={loading || !mood.trim()}
            className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            Consultar Mestre IA
          </button>
        </div>

        {recommendation && (
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl text-left animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary/20 p-4 rounded-2xl">
                <UtensilsCrossed className="w-12 h-12 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-2">{recommendation.name}</h3>
                <p className="text-gray-300 mb-4 italic text-lg leading-relaxed">"{recommendation.reasoning}"</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {recommendation.ingredients.map((ing, i) => (
                    <span key={i} className="bg-black/40 px-3 py-1 rounded-full text-sm border border-white/10 text-gray-300">
                      {ing}
                    </span>
                  ))}
                </div>
                <button className="px-8 py-3 bg-primary text-white rounded-full font-bold text-sm shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
                  Eu Quero Este!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AICustomizer;
