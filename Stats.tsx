
import React from 'react';
import { STATS } from './constants';

const Stats: React.FC = () => {
  const statColors = ['text-brand-blue', 'text-brand-red', 'text-brand-green'];
  const borderColors = ['border-brand-blue/20', 'border-brand-red/20', 'border-brand-green/20'];
  const bgColors = ['hover:bg-brand-blue/5', 'hover:bg-brand-red/5', 'hover:bg-brand-green/5'];

  return (
    <section id="stats" className="py-32 bg-[#0b0e14]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-1.5 bg-brand-yellow rounded-full"></div>
            <span className="text-brand-yellow text-sm font-black uppercase tracking-[0.3em]">Impact Dashboard</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none">Nuestras <span className="text-brand-gradient">Métricas.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`glass p-12 rounded-[3.5rem] border-2 ${borderColors[idx % 3]} group ${bgColors[idx % 3]} transition-all duration-500`}>
              <div className={`${statColors[idx % 3]} mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={stat.icon}></path>
                </svg>
              </div>
              <div className="text-7xl font-black text-white tracking-tighter mb-4 group-hover:translate-x-2 transition-transform duration-500">{stat.value}</div>
              <div className="text-slate-500 font-black uppercase tracking-[0.25em] text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-12 glass rounded-[4rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 bg-gradient-to-r from-slate-950/80 to-transparent">
          <div className="space-y-3">
            <h4 className="text-white font-black text-2xl uppercase tracking-tight">Distribución Geográfica</h4>
            <p className="text-slate-500 font-bold text-lg">Cochabamba (Sede Presencial) + Red Virtual Global</p>
          </div>
          <div className="flex items-center space-x-6">
             <div className="flex -space-x-5">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-16 h-16 rounded-full border-4 border-[#0b0e14] bg-slate-800 overflow-hidden shadow-2xl">
                    <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="Student" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="flex flex-col">
                <span className="text-white font-black text-2xl tracking-tighter">+12k Niños</span>
                <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest">En nuestra red</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;