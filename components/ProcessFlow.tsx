import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Smartphone, Server } from 'lucide-react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-bpsBlack py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Tahapan Pengumpulan</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-bpsOrange to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Horizontal Flow Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-0 relative">
            
            <StageCard 
                step="01"
                title="Prelist Usaha"
                desc="Basis data daftar usaha yang berasal dari kolaborasi Big Data (OSS, SBR, PL-KUMKM)."
                icon={<Database className="w-12 h-12 text-white" />}
                illustration="/assets/database-blue.svg"
                color="from-blue-600 to-blue-800"
            />

            <Connector />

            <StageCard 
                step="02"
                title="Pendataan Lapangan"
                desc="Petugas melakukan wawancara menggunakan moda CAPI (Gadget), CAWI (Web), atau PAPI."
                icon={<Smartphone className="w-12 h-12 text-white" />}
                illustration="/assets/mobile-survey.svg"
                color="from-bpsOrange to-orange-700"
                active
            />

            <Connector />

            <StageCard 
                step="03"
                title="Pengolahan Data"
                desc="Data divalidasi dan diolah di server BPS untuk menghasilkan statistik agregat."
                icon={<Server className="w-12 h-12 text-white" />}
                illustration="/assets/laptop-analytics.svg"
                color="from-purple-600 to-purple-800"
            />
            
        </div>
      </div>
    </section>
  );
};

const StageCard = ({ step, title, desc, icon, illustration, color, active }: any) => (
    <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ margin: "-10%" }}
        className={`relative flex-1 bg-slate-900 border ${active ? 'border-bpsOrange' : 'border-slate-800'} rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-slate-800 transition-all duration-300 z-10`}
    >
        {active && <div className="absolute inset-0 bg-bpsOrange/5 rounded-3xl animate-pulse"></div>}
        
        {/* Top Icon Badge */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 transition-transform`}>
            {icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
        
        {/* Bottom Illustration area */}
        <div className="mt-auto w-full h-32 bg-black/20 rounded-xl flex items-center justify-center p-4 border border-white/5">
            <img src={illustration} alt={title} className="h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        <span className="absolute top-4 right-6 text-6xl font-serif font-bold text-white/5 select-none">{step}</span>
    </motion.div>
);

const Connector = () => (
    <div className="hidden lg:flex items-center justify-center w-16 relative z-0">
        <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="w-full h-2 bg-slate-800"
        ></motion.div>
        <div className="absolute bg-slate-900 p-2 rounded-full border border-slate-700">
            <ArrowRight className="w-4 h-4 text-slate-500" />
        </div>
    </div>
)

export default ProcessFlow;