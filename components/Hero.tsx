
import React from 'react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/message/IMR4LQ7W66N2I1";

  return (
    <section className="relative pt-44 pb-32 md:pt-64 md:pb-48 overflow-hidden bg-[#0b0e14]">
      {/* Background Blobs (Google Colors) */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[150px] animate-blob"></div>
      <div className="absolute top-40 right-[10%] w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-[20%] w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[150px] animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-40 right-[20%] w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[150px] animate-blob"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass border border-white/10 text-sm font-black text-white mb-10 shadow-xl">
          <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green animate-pulse"></span>
          <span className="tracking-wide uppercase">Para niños en Bolivia</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-10 leading-[0.85] text-white">
          No son <span className="text-brand-blue">errores</span>,<br />
          son <span className="text-brand-green">talentos.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-xl md:text-3xl text-slate-400 mb-14 leading-relaxed font-medium">
          ¿A tu hijo le cuesta el colegio? Ayudamos a transformar sus dificultades en fortalezas con el apoyo de la <span className="text-white font-bold">Inteligencia Artificial</span> y la <span className="text-white font-bold">Lógica</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-8">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-12 py-7 rounded-[2.5rem] bg-brand-blue hover:bg-brand-blue/90 text-white text-xl font-black transition-all transform hover:scale-105 shadow-2xl shadow-brand-blue/30 flex items-center justify-center space-x-3">
             <span>Hablar con nosotros</span>
          </a>
          <a href="#about" className="w-full sm:w-auto px-12 py-7 rounded-[2.5rem] glass hover:bg-white/10 transition-all text-white text-xl font-black flex items-center justify-center">
            Ver Metodología
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
