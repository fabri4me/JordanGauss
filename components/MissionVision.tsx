
import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="p-10 rounded-[3rem] glass border-t-4 border-brand-red space-y-6 transform hover:scale-[1.02] transition-transform">
            <div className="w-16 h-16 bg-brand-red/10 rounded-2xl flex items-center justify-center text-brand-red mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-white">Nuestra Misión</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nuestra meta es encontrar el talento que tu hijo tiene guardado. Queremos que cada niño que nos visite en Cochabamba o virtualmente, aprenda a su ritmo y se convierta en alguien exitoso y seguro de sí mismo.
            </p>
          </div>

          {/* Visión */}
          <div className="p-10 rounded-[3rem] glass border-t-4 border-brand-green space-y-6 transform hover:scale-[1.02] transition-transform">
            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 className="text-3xl font-black text-white">Nuestra Visión</h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Queremos ser el lugar favorito de los papás en Bolivia y el mundo para que sus hijos aprendan. Soñamos con un futuro donde pensar diferente no sea un problema, sino un orgullo para cada familia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
