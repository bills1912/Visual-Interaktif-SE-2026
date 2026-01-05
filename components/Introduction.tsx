import React from 'react';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
  const years = [1986, 1996, 2006, 2016];

  return (
    <section className="relative z-10 bg-bpsBlack pt-32 pb-40 rounded-t-[3rem] border-t border-white/10 mt-[-5vh]">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-block px-4 py-1 rounded-full border border-bpsOrange/30 bg-bpsOrange/10 text-bpsOrange font-mono text-xs tracking-widest uppercase mb-6">
                    Mengenal Sensus Ekonomi
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-4xl mx-auto mb-8">
                    Pendataan Lengkap <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bpsOrange to-yellow-400">10 Tahun Sekali</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Amanat UU No. 16 Tahun 1997. Menyediakan data dasar seluruh kegiatan ekonomi sebagai landasan penyusunan kebijakan nasional.
                </p>
            </motion.div>
        </div>

        {/* Timeline Visualization (Matching PPT layout) */}
        <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-bpsOrange transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                {/* Past Censuses */}
                {years.map((year, i) => (
                    <motion.div 
                        key={year}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center group"
                    >
                        <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center mb-4 group-hover:border-bpsOrange group-hover:scale-110 transition-all duration-300 shadow-xl">
                            <span className="font-mono text-slate-500 font-bold group-hover:text-white">SE</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-600 group-hover:text-slate-400">{year}</span>
                    </motion.div>
                ))}

                {/* Current Census (2026) - Highlighted */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="flex flex-col items-center col-span-2 md:col-span-1"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-bpsOrange blur-2xl opacity-20 animate-pulse"></div>
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bpsOrange to-red-600 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(249,115,22,0.5)] relative z-10">
                             <img src="/assets/logo-se2026.svg" alt="2026" className="w-12 h-12 object-contain brightness-0 invert" />
                        </div>
                    </div>
                    <span className="text-3xl font-bold text-white mt-2">2026</span>
                    <span className="text-bpsOrange text-xs font-mono uppercase tracking-widest mt-1 animate-bounce">Coming Soon</span>
                </motion.div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;