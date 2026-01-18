
import React, { useState } from 'react';
import Logo from './Logo';
import AboutModal from './AboutModal';

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl glass border border-white/5 text-brand-blue text-xs font-black uppercase tracking-widest">
              <span>Nuestra Identidad</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-white">
              Ciencia y <span className="text-brand-blue">Empatía</span> unidas.
            </h2>
            
            <div className="space-y-8 text-slate-400 text-xl leading-relaxed">
              <p>
                En <strong>Jordan Gauss</strong>, la educación no es una línea de montaje. Nuestra metodología es única en Bolivia porque está <strong>dirigida por un Psicólogo y Profesor de Matemáticas</strong>.
              </p>
              <p>
                Entendemos que el fracaso escolar en matemáticas no siempre es falta de estudio; a menudo es un <strong>bloqueo neurocognitivo o emocional</strong> que requiere un experto capaz de ver más allá del cuaderno.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-2xl shadow-brand-blue/30 hover:scale-105 active:scale-95"
              >
                Conoce nuestra historia
              </button>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all border border-white/10"
              >
                Ver Metodología
              </button>
            </div>

            <div className="relative pl-10 border-l-4 border-brand-yellow py-4">
               <div className="flex items-center space-x-4 mb-3">
                  <div className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-lg text-[10px] font-black uppercase tracking-widest border border-brand-yellow/20">Perfil Profesional Dual</div>
               </div>
              <p className="text-white text-2xl font-bold italic leading-relaxed">
                "Atendemos el cerebro que piensa, pero también el corazón que siente la frustración."
              </p>
            </div>
          </div>
          
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative group p-4 cursor-pointer" onClick={() => setIsModalOpen(true)}>
               <div className="absolute inset-0 bg-brand-gradient blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative glass border-white/10 rounded-[4rem] p-12 md:p-20 shadow-2xl flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-700">
                  <Logo size={280} vertical />
                  <div className="mt-8 px-6 py-2 rounded-full bg-brand-blue/10 text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    Explorar Jordan Gauss
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
