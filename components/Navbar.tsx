
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import AboutModal from './AboutModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const whatsappUrl = "https://wa.me/message/IMR4LQ7W66N2I1";
  const coursesUrl = "https://drive.google.com/drive/folders/1ziLsbFH2nBECMrsC9VF2Ua72FY8oVs01?usp=sharing";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-8'}`}>
        <div className="container mx-auto px-3 sm:px-6 max-w-7xl">
          <div className={`flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] transition-all duration-500 border border-white/5 ${isScrolled ? 'glass shadow-2xl scale-95' : 'bg-slate-950/40 backdrop-blur-sm'}`}>
            <a href="#" className="hover:opacity-80 transition-opacity transform hover:scale-105 transition-transform duration-300">
              <Logo size={isScrolled ? 28 : 36} />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-12 text-[11px] lg:text-[13px] font-black text-slate-300 uppercase tracking-[0.2em]">
              <button onClick={() => setIsAboutOpen(true)} className="hover:text-brand-blue transition-colors relative group">
                Nosotros
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-blue transition-all group-hover:w-full rounded-full"></span>
              </button>
              <a href={coursesUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors relative group">
                Cursos
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-green transition-all group-hover:w-full rounded-full"></span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors relative group">
                Contacto
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-yellow transition-all group-hover:w-full rounded-full"></span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-6 lg:px-10 py-3 lg:py-4 rounded-xl lg:rounded-[1.5rem] bg-white text-slate-950 hover:bg-brand-blue hover:text-white transition-all font-black shadow-xl active:scale-95 text-[10px] lg:text-xs inline-block text-center">
                Acceso
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-3 rounded-2xl glass text-white active:scale-90 transition-transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[70px] z-40 p-4 sm:p-6 animate-in fade-in slide-in-from-top duration-300">
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col space-y-6 sm:space-y-8 text-center border border-white/10 shadow-3xl">
              <button onClick={() => { setIsAboutOpen(true); setIsMobileMenuOpen(false); }} className="text-lg sm:text-xl font-black text-white uppercase tracking-widest">Nosotros</button>
              <a href={coursesUrl} className="text-lg sm:text-xl font-black text-white uppercase tracking-widest">Cursos</a>
              <a href={whatsappUrl} className="text-lg sm:text-xl font-black text-white uppercase tracking-widest">Contacto</a>
              <a href={whatsappUrl} className="w-full py-5 sm:py-6 rounded-2xl bg-brand-blue text-white font-black text-lg sm:text-xl">Acceso Campus</a>
            </div>
          </div>
        )}
      </nav>

      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </>
  );
};

export default Navbar;
