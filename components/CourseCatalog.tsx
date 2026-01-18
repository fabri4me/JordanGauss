
import React, { useState } from 'react';
import { COURSES } from '../constants';

const CourseCatalog: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Math' | 'AI'>('All');
  const coursesUrl = "https://drive.google.com/drive/folders/1ziLsbFH2nBECMrsC9VF2Ua72FY8oVs01?usp=sharing";

  const filteredCourses = filter === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter);

  const getBrandBg = (category: string) => {
    return category === 'Math' ? 'bg-brand-blue' : 'bg-brand-green';
  };

  const getLevelStyle = (level: string) => {
    if (level === 'Avanzado') return 'bg-brand-red/10 text-brand-red border-brand-red/20';
    if (level === 'Intermedio') return 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20';
    return 'bg-brand-green/10 text-brand-green border-brand-green/20';
  };

  return (
    <section id="courses" className="py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 space-y-6 sm:space-y-10 md:space-y-0">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none">
               Skills para <span className="text-brand-green underline decoration-4 sm:decoration-8 underline-offset-4 sm:underline-offset-8">Ganar.</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg md:text-2xl font-medium">Programas diseñados para la vida real, no para el pizarrón.</p>
          </div>
          
          <div className="flex bg-slate-900/50 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
            {(['All', 'Math', 'AI'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-white text-slate-950 scale-105 shadow-xl' 
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'Todos' : cat === 'Math' ? 'Math' : 'AI'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group flex flex-col bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden hover:bg-white/[0.08] transition-all hover:translate-y-[-8px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <a href={coursesUrl} target="_blank" rel="noopener noreferrer" className="block relative h-64 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                <div className={`absolute top-8 right-8 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border backdrop-blur-xl ${getLevelStyle(course.level)}`}>
                  {course.level}
                </div>
              </a>
              
              <div className="p-10 flex-1 flex flex-col space-y-6">
                <div className="flex items-center space-x-2">
                   <div className={`w-3 h-3 rounded-full ${getBrandBg(course.category)}`}></div>
                   <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                      {course.category === 'Math' ? 'Math Elite' : 'AI Master'}
                   </span>
                </div>
                <a href={coursesUrl} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-3xl font-black group-hover:text-brand-blue transition-colors leading-tight cursor-pointer">{course.title}</h3>
                </a>
                <p className="text-slate-400 text-lg leading-relaxed flex-1">{course.description}</p>
                
                <div className="flex items-center justify-between pt-8 border-t border-white/10">
                  <div className="flex items-center space-x-3 text-white font-black text-sm">
                    <svg className="w-5 h-5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path></svg>
                    <span>{course.duration}</span>
                  </div>
                  <a 
                    href={coursesUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-brand-blue text-white text-sm font-black transition-all hover:scale-110 active:scale-95 shadow-lg shadow-brand-blue/20 inline-block"
                  >
                    Detalles
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href={coursesUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-7 bg-brand-green text-white text-xl font-black rounded-[2.5rem] hover:bg-brand-green/90 transition-all transform hover:scale-105 shadow-2xl shadow-brand-green/30"
          >
            <span>Ver Catálogo Completo</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
