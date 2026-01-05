import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-bpsOrange rounded-sm flex items-center justify-center text-black font-bold text-xs tracking-tighter">
                BPS
            </div>
            <div className="font-serif font-bold text-xl text-white tracking-wide">
                SE<span className="text-bpsOrange italic">2026</span>
            </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Visual Interaktif</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;