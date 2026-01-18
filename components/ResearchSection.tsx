
import React, { useState } from 'react';
import Logo from './Logo';

const ResearchSection: React.FC = () => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  const talents = [
    {
      observed: "Fallo en cálculo secuencial",
      mechanism: "Procesamiento Holístico / Hemisferio Derecho Dominante",
      talent: "Pensamiento Sistémico: Capacidad para proyectos complejos, arquitectura e ingeniería de sistemas.",
      badge: "Divergencia"
    },
    {
      observed: "Lentitud en recuperación de datos",
      mechanism: "Memoria de Trabajo verbal limitada",
      talent: "Incubación Creativa: Reflexión profunda y análisis cualitativo superior.",
      badge: "Profundidad"
    },
    {
      observed: "Ansiedad ante la evaluación",
      mechanism: "Secuestro de la Amígdala (Teoría de la Eficiencia)",
      talent: "Inteligencia Interpersonal: Alta sensibilidad emocional y liderazgo empático.",
      badge: "Social"
    }
  ];

  return (
    <section id="research" className="py-32 bg-[#0d1117] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Encabezado de Autoridad */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-widest">
                <span>Investigación & Pedagogía de Vanguardia</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
                El <span className="text-brand-gradient">Déficit</span> como Marcador de <span className="text-white">Talento.</span>
              </h2>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                 <p className="text-slate-300 font-bold flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                    <span>Dirigido por Juan Pablo Gonzales Cruz</span>
                 </p>
                 <div className="flex space-x-3">
                    <span className="px-3 py-1 bg-brand-blue/20 text-brand-blue rounded-lg text-[9px] font-black uppercase tracking-widest">Psicólogo</span>
                    <span className="px-3 py-1 bg-brand-yellow/20 text-brand-yellow rounded-lg text-[9px] font-black uppercase tracking-widest">Profesor de Matemáticas</span>
                 </div>
              </div>
            </div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed pt-10">
              <p>
                Basado en nuestro último informe técnico, hemos identificado que muchos niños catalogados con "Discalculia" poseen en realidad una <strong>arquitectura cerebral divergente</strong>. 
              </p>
              <p>
                Nuestro enfoque no busca "arreglar" al niño, sino proveerle la <strong>prótesis cognitiva</strong> (tecnología y lógica) necesaria para que su talento natural florezca.
              </p>
            </div>
          </div>

          {/* Sección Simbólica: El Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/[0.02] rounded-[4rem] p-10 border border-white/5">
            <div className="flex justify-center p-10">
               <div className="relative">
                  <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full"></div>
                  <Logo size={200} showText={false} />
               </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-black text-white">¿Por qué nuestro logo es "Diferente"?</h3>
               <p className="text-slate-400 leading-relaxed italic border-l-4 border-brand-yellow pl-6">
                 "Si nuestras mentes no siguen el patrón estándar, nuestra identidad tampoco debería hacerlo. El logo de Jordan Gauss es un símbolo de divergencia: el cerebro orgánico y el cubo lógico no encajan perfectamente porque <strong>la genialidad nace del roce entre lo que somos y lo que podemos construir.</strong>"
               </p>
               <p className="text-slate-500 text-sm">
                 A diferencia de los logos corporativos simétricos, el nuestro celebra la asimetría cognitiva. Es un recordatorio de que ser diferente no es un error de diseño, sino una evolución del pensamiento.
               </p>
            </div>
          </div>

          {/* Matriz de Hallazgos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {talents.map((t, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border-t-8 border-brand-blue group hover:bg-white/[0.05] transition-all">
                <div className="mb-6 flex justify-between items-center">
                  <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{t.badge}</div>
                  <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue text-xs font-bold">{i+1}</div>
                </div>
                <h4 className="text-brand-red font-black text-sm mb-4">Dificultad: {t.observed}</h4>
                <p className="text-slate-500 text-xs mb-6 italic leading-relaxed">{t.mechanism}</p>
                <div className="pt-6 border-t border-white/5">
                   <div className="text-white font-black text-lg group-hover:text-brand-green transition-colors">{t.talent}</div>
                </div>
              </div>
            ))}
          </div>

          {/* El Artículo / Resumen Técnico */}
          <div className="relative glass border-white/10 rounded-[4rem] p-10 md:p-20 overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7zm0 1.5L18.5 9H13V3.5zM6 20V4h6v6h6v10H6z"/></svg>
             </div>
             
             <div className="relative z-10 space-y-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-white italic">"Etiología Psicofisiológica de las Dificultades Matemáticas"</h3>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Resumen Ejecutivo del Informe Técnico</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="text-brand-yellow font-black text-xs uppercase">Hallazgo 1.1</div>
                         <h5 className="text-white font-bold text-xl">Transición de Magnitud a Símbolo</h5>
                         <p className="text-slate-400 text-sm">El salto de contar con los dedos (magnitud) a la recuperación de memoria (símbolo) es donde ocurre el primer bloqueo. Nuestra metodología hackea este proceso mediante visualización espacial.</p>
                      </div>
                      <div className="space-y-2">
                         <div className="text-brand-blue font-black text-xs uppercase">Hallazgo 2.3</div>
                         <h5 className="text-white font-bold text-xl">Teoría de la Eficiencia del Procesamiento</h5>
                         <p className="text-slate-400 text-sm">La ansiedad matemática no es falta de capacidad, es un secuestro emocional. Entrenamos la inhibición y la flexibilidad cognitiva para liberar el potencial.</p>
                      </div>
                   </div>
                   <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 space-y-6">
                      <h5 className="text-white font-black">Doble Excepcionalidad (2e)</h5>
                      <p className="text-slate-500 text-sm leading-relaxed italic">
                        "Muchos estudiantes poseen un razonamiento abstracto superior (física cuántica, filosofía) pero fallan en el cálculo aritmético secuencial. Son los diamantes en bruto de Jordan Gauss."
                      </p>
                      <button className="w-full py-4 bg-white text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">
                        Leer Artículo Completo
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
