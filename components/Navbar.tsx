import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Left: BPS Logo + Text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-bpsOrange rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">BPS</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Badan Pusat Statistik</div>
            <div className="font-serif font-bold text-lg text-slate-800">
              Sensus <span className="text-bpsOrange">Ekonomi 2026</span>
            </div>
          </div>
        </div>
        
        {/* Right: SE2026 Badge */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-xs font-medium text-slate-500 uppercase tracking-widest">
            Visual Interaktif
          </span>
          <div className="w-14 h-12 bg-gradient-to-br from-bpsOrange to-orange-600 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-white leading-none">
              <div className="text-[6px] font-bold">SENSUS</div>
              <div className="text-[6px] font-bold">EKONOMI</div>
              <div className="text-sm font-black">2026</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;