import React from 'react';
import { motion } from 'framer-motion';
import { Users, Landmark, Building } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black to-slate-900 py-32 border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Manfaat Data</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Hasil Sensus Ekonomi 2026 memberikan dampak strategis bagi berbagai lapisan.
            </p>
        </div>

        {/* 3-Column Grid matching PPT Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
                title="Masyarakat"
                subtitle="Manfaat untuk"
                icon={<Users className="w-10 h-10 text-white" />}
                color="bg-orange-500"
                items={[
                    "Peluang lapangan kerja baru",
                    "Peta ekonomi yang inklusif",
                    "Akses program bantuan yang tepat sasaran"
                ]}
                image="/assets/diverse-workers.svg"
                delay={0}
            />
            <BenefitCard 
                title="Pemerintah"
                subtitle="Manfaat untuk"
                icon={<Landmark className="w-10 h-10 text-white" />}
                color="bg-slate-600"
                items={[
                    "Pengambilan kebijakan berbasis data",
                    "Perencanaan pembangunan nasional",
                    "Evaluasi program ekonomi"
                ]}
                image="/assets/government-policy.svg"
                delay={0.2}
            />
            <BenefitCard 
                title="Pelaku Usaha"
                subtitle="Manfaat untuk"
                icon={<Building className="w-10 h-10 text-white" />}
                color="bg-blue-600"
                items={[
                    "Analisis potensi pasar & kompetitor",
                    "Peluang kolaborasi antar usaha",
                    "Perencanaan investasi yang matang"
                ]}
                image="/assets/business-deal.svg"
                delay={0.4}
            />
        </div>

      </div>
    </section>
  );
};

const BenefitCard = ({ title, subtitle, icon, color, items, image, delay }: any) => (
    <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
        className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 transition-all shadow-xl"
    >
        {/* Header Bar */}
        <div className={`${color} p-4 flex items-center justify-center gap-3`}>
            {icon}
            <div className="text-left">
                <span className="text-[10px] uppercase text-white/80 tracking-widest block">{subtitle}</span>
                <span className="font-bold text-white text-lg leading-none">{title}</span>
            </div>
        </div>

        {/* Visual */}
        <div className="bg-black/40 h-48 p-8 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950"></div>
             <img src={image} className="h-full w-auto object-contain relative z-10 group-hover:scale-110 transition-transform duration-700" alt={title} />
        </div>

        {/* List Content */}
        <div className="p-8 flex-1">
            <ul className="space-y-4">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full ${color.replace('bg-', 'text-')} mt-1.5 flex-shrink-0 bg-current`}></div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </motion.div>
)

export default Benefits;