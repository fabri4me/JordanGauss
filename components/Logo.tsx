
import React from 'react';

const Logo: React.FC<{ className?: string; size?: number; showText?: boolean; vertical?: boolean }> = ({ 
  className = "", 
  size = 60, 
  showText = true,
  vertical = false 
}) => {
  const colors = {
    blue: '#4285f4',
    red: '#ea4335',
    yellow: '#fbbc05',
    green: '#34a853'
  };

  const Icon = () => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* HEMISFERIO IZQUIERDO: CEREBRO */}
      {/* Parte Superior: Azul */}
      <path 
        d="M50 12 C42 12 36 15 32 20 C28 16 18 16 14 22 C10 28 10 38 18 43 C14 48 14 58 20 63 L50 63" 
        stroke={colors.blue} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path d="M50 12 V63" stroke={colors.blue} strokeWidth="6.5" strokeLinecap="round" />
      
      {/* Parte Inferior: Rojo */}
      <path 
        d="M50 63 L20 63 C14 68 14 78 18 83 C14 88 14 98 18 103 C22 108 30 108 34 103 C38 108 44 110 50 110" 
        stroke={colors.red} 
        strokeWidth="6.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        transform="translate(0, -10)"
      />
      <path d="M50 53 V88" stroke={colors.red} strokeWidth="6.5" strokeLinecap="round" />

      {/* HEMISFERIO DERECHO: CUBO ISOMÉTRICO 2x2 */}
      {/* Parte Amarilla (Superior y bordes altos) */}
      <path d="M50 12 L88 34 M50 34 L88 34 M69 23 V45" stroke={colors.yellow} strokeWidth="6.5" strokeLinecap="round" />
      <path d="M50 34 L88 56" stroke={colors.yellow} strokeWidth="6.5" strokeLinecap="round" />
      
      {/* Parte Verde (Frontal y bordes bajos) */}
      <path d="M88 34 V78 M50 56 L88 78 M50 78 L88 100" stroke={colors.green} strokeWidth="6.5" strokeLinecap="round" />
      <path d="M50 56 H88 M69 45 V89" stroke={colors.green} strokeWidth="6.5" strokeLinecap="round" />
      
      {/* Eje central */}
      <path d="M50 12 V100" stroke="#000" strokeWidth="0.1" opacity="0.1" />
    </svg>
  );

  if (!showText) return <Icon />;

  return (
    <div className={`flex ${vertical ? 'flex-col items-center text-center' : 'items-center space-x-6'} ${className}`}>
      <div className="relative flex-shrink-0 flex items-center justify-center">
         <Icon />
      </div>
      <div className={`flex flex-col ${vertical ? 'mt-8' : ''}`}>
        <div className={`${vertical ? 'text-6xl md:text-7xl' : 'text-[38px]'} font-bold tracking-tight leading-none flex items-center font-sans`}>
          <span style={{ color: colors.blue }}>J</span>
          <span style={{ color: colors.red }}>ordan</span>
          <span className="ml-1" style={{ color: colors.yellow }}>G</span>
          <span style={{ color: colors.green }}>auss</span>
        </div>
        <span className={`${vertical ? 'text-xl mt-4' : 'text-[14px] mt-1.5'} font-medium tracking-[0.15em] text-slate-400`}>
          Inteligencia en todas su formas
        </span>
      </div>
    </div>
  );
};

export default Logo;
