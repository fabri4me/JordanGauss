
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Stats from './Stats';
import ResearchSection from './components/ResearchSection';
import CourseCatalog from './components/CourseCatalog';
import ParentWhatsApp from './components/ParentWhatsApp';
import GeminiAdvisor from './components/GeminiAdvisor';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

const App: React.FC = () => {
  const whatsappUrl = "https://wa.me/message/IMR4LQ7W66N2I1";

  return (
    <div className="min-h-screen selection:bg-brand-blue selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <MissionVision />
        <ResearchSection />
        <CourseCatalog />
        <GeminiAdvisor />
        <ParentWhatsApp />
        
        {/* Call to Action Final Section */}
        <section className="py-32 relative overflow-hidden bg-slate-950/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-6 text-center space-y-10 relative z-10">
             <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                Empecemos el viaje <span className="text-brand-green">hoy.</span>
             </h2>
             <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                Cada día cuenta en el desarrollo de tu hijo. Dale las herramientas que necesita para brillar con luz propia.
             </p>
             <div className="pt-10">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-16 py-8 bg-white text-slate-950 text-xl font-black rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-white/10 inline-block active:scale-95"
                >
                  Contáctanos Ahora
                </a>
             </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;