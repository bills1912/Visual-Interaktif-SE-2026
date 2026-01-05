import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-20 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <h4 className="font-serif text-2xl text-white mb-4">Sensus Ekonomi 2026</h4>
        <p className="font-sans text-sm tracking-widest uppercase mb-8">Badan Pusat Statistik</p>
        <p className="text-xs opacity-50">© 2026. Interactive Experience Concept.</p>
      </div>
    </footer>
  );
};

export default Footer;