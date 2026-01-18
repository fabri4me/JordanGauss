
import React, { useState } from 'react';
import Logo from './Logo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'historia' | 'ciencia'>('historia');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0b0e14] border border-white/10 rounded-[4rem] shadow-2xl animate-in zoom-in duration-300">
        {/* Header con Tabs */}
        <div className="sticky top-0 z-20 bg-[#0b0e14]/80 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size={50} />
          
          <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-white/5">
            <button 
              onClick={() => setActiveTab('historia')}
              className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'historia' ? 'bg-white text-slate-950 shadow-xl' : 'text-slate-500'}`}
            >
              Nuestra Historia
            </button>
            <button 
              onClick={() => setActiveTab('ciencia')}
              className={`px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'ciencia' ? 'bg-white text-slate-950 shadow-xl' : 'text-slate-500'}`}
            >
              Evidencia Científica
            </button>
          </div>

          <button 
            onClick={onClose}
            className="p-3 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="p-10 md:p-20">
          {activeTab === 'historia' ? (
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className="text-3xl font-black text-white">¿Quién es Juan Pablo Gonzales Cruz?</h3>
                  <div className="flex space-x-3">
                     <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-lg text-[9px] font-black uppercase border border-brand-blue/20">Psicólogo</span>
                     <span className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-lg text-[9px] font-black uppercase border border-brand-yellow/20">Profesor de Matemáticas</span>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Jordan Gauss nace de una convicción personal de Juan Pablo: <strong>"Ningún niño es malo en matemáticas, solo hay métodos que fallan en conectar con su cerebro."</strong>
                  </p>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Con más de 4 años de experiencia uniendo la psicología con la pedagogía exacta, ha desarrollado un sistema que libera a los niños de la <strong>Indefensión Aprendida</strong> (la creencia de que no pueden aprender).
                  </p>
                  <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl space-y-4">
                     <p className="text-white font-bold text-xs uppercase tracking-widest text-brand-red">Sobre nuestro Logo Diferente</p>
                     <p className="text-slate-500 text-sm italic">
                       "Nuestro logo no es una marca corporativa más; es un manifiesto. Representa la intersección imperfecta entre lo humano y lo lógico. Si nuestras mentes son únicas, nuestra imagen debe ser el reflejo de esa libertad creativa."
                     </p>
                  </div>
                </div>
                <div className="relative">
                   <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-brand-blue/20 to-brand-green/20 border border-white/5 flex items-center justify-center p-10 overflow-hidden">
                      <Logo size={200} vertical />
                   </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {/* Ventana de Evidencia Científica (Inspirada en el PDF) */}
              <div className="relative glass border-white/10 rounded-[3rem] overflow-hidden p-1 bg-gradient-to-br from-slate-900 to-black">
                <div className="bg-[#0b0e14] rounded-[2.8rem] p-8 md:p-16 space-y-12">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/5 pb-10">
                    <div className="space-y-2">
                       <h4 className="text-brand-blue font-black text-xs uppercase tracking-[0.3em]">Technical Abstract 01.A</h4>
                       <h3 className="text-3xl font-black text-white italic">"Neurocognición de la Dificultad Aritmética"</h3>
                    </div>
                    <div className="px-4 py-2 bg-brand-green/10 border border-brand-green/20 rounded-xl text-brand-green text-[10px] font-black uppercase">
                       Validado por Psicología & Lógica
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-10">
                       <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                             <div className="w-8 h-8 rounded-lg bg-brand-red/20 flex items-center justify-center text-brand-red font-bold text-xs">01</div>
                             <h5 className="text-white font-bold text-xl uppercase tracking-tight">El Bloqueo Amigdalino</h5>
                          </div>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            El cerebro bajo estrés matemático activa la amígdala, "secuestrando" la corteza prefrontal. Esto anula la capacidad de razonar. Nuestra intervención desactiva esta respuesta de miedo antes de enseñar el número.
                          </p>
                       </div>

                       <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                             <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-xs">02</div>
                             <h5 className="text-white font-bold text-xl uppercase tracking-tight">Magnitud vs Símbolo</h5>
                          </div>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            Muchos niños "fallan" porque no han hecho la transición de la magnitud física (dedos) al símbolo abstracto (cifras). Usamos IA y visualización 3D para construir este puente neuronal.
                          </p>
                       </div>
                    </div>

                    <div className="bg-slate-950 p-8 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center text-center space-y-6">
                       <div className="relative w-full h-40 flex items-center justify-center">
                          {/* Mini Diagrama de "Puente Cognitivo" */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                             <div className="w-32 h-32 rounded-full border-4 border-dashed border-brand-blue animate-spin-slow"></div>
                          </div>
                          <div className="flex items-center space-x-4 z-10">
                             <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white font-black">P</div>
                             <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-brand-blue"></div>
                             <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-black">L</div>
                          </div>
                       </div>
                       <h5 className="text-white font-black text-sm uppercase">Sincronización Hemisférica</h5>
                       <p className="text-[11px] text-slate-600 leading-relaxed font-mono">
                         [PSICOLOGÍA] + [LÓGICA MATEMÁTICA] = 
                         <br/>
                         APRENDIZAJE DE ALTO IMPACTO
                       </p>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/5">
                    <div className="p-8 bg-brand-blue/5 border border-brand-blue/10 rounded-[2rem] space-y-4">
                       <h5 className="text-brand-blue font-black text-xs uppercase tracking-widest">Protocolo de Doble Excepcionalidad (2e)</h5>
                       <p className="text-slate-400 text-sm italic">
                         "Identificamos el talento superior que a menudo se esconde detrás de un bajo rendimiento escolar. Un niño que no puede sumar rápidamente puede ser un genio en pensamiento sistémico. Nuestra misión es encontrar ese diamante."
                       </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="text-center">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  Basado en el Informe de Investigación de Juan Pablo Gonzales Cruz
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
