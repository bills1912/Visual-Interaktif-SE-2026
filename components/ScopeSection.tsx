import React from 'react';
import { motion } from 'framer-motion';

const ScopeSection: React.FC = () => {
  return (
    <section className="bg-slate-900 relative border-t border-slate-800 overflow-hidden py-32">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE: Sunburst Diagram Recreation (PPT Visual) */}
            <div className="relative h-[500px] flex items-center justify-center">
                {/* Central Core */}
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute z-30 w-40 h-40 bg-gradient-to-br from-bpsOrange to-red-600 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-4 border-slate-900"
                >
                    <h3 className="text-2xl font-bold text-white leading-none">SE2026</h3>
                    <p className="text-[10px] text-white/80 mt-1 px-2 leading-tight">Seluruh Kegiatan Kecuali A,O,T</p>
                </motion.div>

                {/* Layer 1: Categories (Animated Segments) */}
                <Sector rotation={0} color="bg-yellow-500" label="Ekonomi Hijau" delay={0.3} />
                <Sector rotation={45} color="bg-blue-500" label="Ekonomi Biru" delay={0.4} />
                <Sector rotation={90} color="bg-purple-500" label="Digital" delay={0.5} />
                <Sector rotation={135} color="bg-green-500" label="Lingkungan" delay={0.6} />
                <Sector rotation={180} color="bg-slate-500" label="Kewilayahan" delay={0.7} />
                <Sector rotation={225} color="bg-pink-500" label="Skala Usaha" delay={0.8} />
                <Sector rotation={270} color="bg-indigo-500" label="Struktur" delay={0.9} />
                <Sector rotation={315} color="bg-teal-500" label="Karakteristik" delay={1.0} />
            </div>

            {/* RIGHT SIDE: Exclusions (PPT Visual) */}
            <div>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <img src="/assets/logo-se2026.svg" className="w-64 h-64 grayscale" />
                    </div>

                    <h2 className="text-3xl font-serif text-white mb-6 relative z-10">
                        Cakupan & <span className="text-red-500">Pengecualian</span>
                    </h2>
                    
                    <p className="text-slate-400 mb-8 leading-relaxed relative z-10">
                        Seluruh lapangan usaha akan dicatat, <span className="text-white font-bold underline decoration-red-500">kecuali</span> yang masuk dalam klasifikasi KBLI berikut:
                    </p>

                    {/* Exclusion List (Matching PPT Box Style) */}
                    <div className="space-y-4 relative z-10">
                        <ExclusionItem 
                            code="A" 
                            title="Pertanian, Kehutanan, Perikanan" 
                            desc="Sudah dicatat dalam Sensus Pertanian 2023 (ST2023)"
                            color="bg-green-600"
                        />
                        <ExclusionItem 
                            code="O" 
                            title="Administrasi Pemerintahan" 
                            desc="Pertahanan dan Jaminan Sosial Wajib"
                            color="bg-blue-600"
                        />
                        <ExclusionItem 
                            code="T" 
                            title="Aktivitas Rumah Tangga" 
                            desc="Kegiatan yang menghasilkan barang/jasa untuk penggunaan sendiri"
                            color="bg-purple-600"
                        />
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
};

// Helper for Sunburst Sectors
const Sector = ({ rotation, color, label, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: rotation }}
        whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
        transition={{ delay, duration: 0.5 }}
        className={`absolute w-[360px] h-[360px] rounded-full clip-sector ${color} opacity-20 flex items-start justify-center pt-4`}
        style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)' }} // Rough pie slice shape approximation via CSS
    >
        <div className="transform -rotate-45 mt-4 ml-8 font-bold text-white text-xs uppercase tracking-wider w-20 text-center">
            {label}
        </div>
    </motion.div>
);

const ExclusionItem = ({ code, title, desc, color }: any) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center flex-shrink-0 text-white font-bold text-xl shadow-lg`}>
            {code}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg">{title}</h4>
            <p className="text-slate-400 text-sm">{desc}</p>
        </div>
    </div>
)

export default ScopeSection;