
import React, { useState, useRef, useEffect } from 'react';
import { getCourseRecommendationStream } from '../services/geminiService';

const GeminiAdvisor: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "¿Cómo ayuda la IA a un niño con TDAH?",
    "¿Matemáticas a temprana edad?",
    "Clases para niños que odian los números",
    "Metodología de Juan Pablo"
  ];

  const handleAsk = async (textToAsk?: string) => {
    const query = textToAsk || goal;
    if (!query.trim() || loading) return;
    
    setGoal(query);
    setLoading(true);
    setRecommendation('');
    setIsCopied(false);
    
    try {
      const stream = getCourseRecommendationStream(query);
      for await (const chunk of stream) {
        setRecommendation(prev => prev + chunk);
      }
    } catch (err) {
      setRecommendation("Lo sentimos, hubo un problema. Por favor intenta de nuevo o escríbenos a WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(recommendation);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    if (recommendation && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [recommendation]);

  return (
    <section className="py-16 sm:py-24 md:py-32 container mx-auto px-4 sm:px-6">
      <div className="relative glass border-white/5 rounded-2xl sm:rounded-3xl md:rounded-[4rem] p-6 sm:p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl group">
        <div className={`absolute -top-16 sm:-top-24 -right-16 sm:-right-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full blur-[80px] sm:blur-[120px] transition-all duration-1000 ${loading ? 'bg-brand-blue/30 animate-pulse' : 'bg-brand-blue/5'}`}></div>
        <div className={`absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 w-48 sm:w-96 h-48 sm:h-96 rounded-full blur-[80px] sm:blur-[120px] transition-all duration-1000 ${loading ? 'bg-brand-red/30 animate-pulse' : 'bg-brand-red/5'}`}></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-10 md:space-y-12 relative z-10">
          <div className="flex justify-center">
             <div className="px-6 py-2 rounded-2xl bg-slate-950 border border-white/10 flex items-center space-x-3">
                <div className="flex space-x-1">
                   <div className={`w-1.5 h-1.5 rounded-full bg-brand-blue ${loading ? 'animate-bounce' : ''}`}></div>
                   <div className={`w-1.5 h-1.5 rounded-full bg-brand-red ${loading ? 'animate-bounce [animation-delay:0.2s]' : ''}`}></div>
                   <div className={`w-1.5 h-1.5 rounded-full bg-brand-yellow ${loading ? 'animate-bounce [animation-delay:0.4s]' : ''}`}></div>
                   <div className={`w-1.5 h-1.5 rounded-full bg-brand-green ${loading ? 'animate-bounce [animation-delay:0.6s]' : ''}`}></div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Asesor IA Especializado</span>
             </div>
          </div>

          <div className="space-y-3 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-white">
              ¿Cuál es tu <span className="text-brand-gradient">Duda Hoy?</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto">
              Nuestra IA está entrenada con la metodología de Juan Pablo para darte una respuesta inmediata sobre el potencial de tu hijo.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto">
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(s)}
                disabled={loading}
                className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-slate-400 hover:text-white hover:bg-brand-blue/20 hover:border-brand-blue/30 transition-all disabled:opacity-50 line-clamp-1"
              >
                {s}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch space-y-3 sm:space-y-0 sm:space-x-3 max-w-3xl mx-auto">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Ej: Mi hijo tiene 8 años y se bloquea con las restas..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl px-4 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-white text-sm sm:text-base lg:text-lg placeholder:text-slate-600 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue transition-all disabled:opacity-50"
                disabled={loading}
              />
            </div>
            <button 
              onClick={() => handleAsk()}
              disabled={loading || !goal.trim()}
              className="px-6 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white text-slate-950 text-sm sm:text-base lg:text-lg font-black rounded-2xl sm:rounded-3xl hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale shadow-2xl whitespace-nowrap"
            >
              {loading ? 'Analizando...' : 'Consultar'}
            </button>
          </div>

          {recommendation && (
            <div ref={responseRef} className="mt-16 p-10 bg-slate-950/80 rounded-[3rem] border border-brand-blue/30 text-left animate-in fade-in zoom-in duration-500 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-green opacity-50"></div>
              
              <div className="flex flex-col md:flex-row items-start md:space-x-8 space-y-6 md:space-y-0">
                <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-blue/30 overflow-hidden">
                   {loading ? (
                     <div className="w-full h-full bg-brand-blue flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                     </div>
                   ) : (
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                   )}
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="text-xs font-black uppercase tracking-[0.3em] text-brand-blue">Respuesta de Jordan Gauss AI</div>
                    <button 
                      onClick={copyToClipboard}
                      className="p-2 hover:bg-white/10 rounded-lg text-slate-500 hover:text-white transition-all flex items-center space-x-2"
                    >
                      <span className="text-[10px] font-black uppercase">{isCopied ? 'Copiado' : 'Copiar'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                    </button>
                  </div>
                  <div className="text-white text-xl md:text-2xl leading-relaxed font-bold whitespace-pre-line">
                    {recommendation}
                    {loading && <span className="inline-block w-2 h-6 bg-brand-blue ml-2 animate-pulse rounded-full"></span>}
                  </div>
                  {!loading && (
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                       <p className="text-slate-500 text-xs font-medium italic">Esta respuesta ha sido generada por IA en base a nuestra metodología científica.</p>
                       <a 
                        href="https://wa.me/message/IMR4LQ7W66N2I1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-green text-xs font-black uppercase tracking-widest hover:underline"
                       >
                        Hablar con Juan Pablo
                       </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
