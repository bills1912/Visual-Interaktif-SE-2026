import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: BPS Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-bpsOrange rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">BPS</span>
            </div>
            <div>
              <div className="text-sm text-slate-400 uppercase tracking-wider">Badan Pusat Statistik</div>
              <div className="font-serif text-2xl font-bold">Sensus Ekonomi 2026</div>
            </div>
          </div>
          
          {/* Right: SE2026 Badge */}
          <div className="w-20 h-20 bg-gradient-to-br from-bpsOrange to-orange-600 rounded-xl flex items-center justify-center shadow-xl">
            <div className="text-center text-white">
              <div className="text-[8px] font-bold">SENSUS</div>
              <div className="text-[8px] font-bold">EKONOMI</div>
              <div className="text-xl font-black">2026</div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 font-medium">Mencatat Ekonomi Indonesia</p>
            <p className="text-slate-500 text-sm">© 2026 Badan Pusat Statistik. Visual Interaktif Concept.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;