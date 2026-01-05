import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShoppingCart, Banknote } from 'lucide-react';

const DataDetails: React.FC = () => {
  return (
    <section className="bg-slate-950 py-32 border-t border-slate-900 relative overflow-hidden">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Rincian Data</h2>
                <p className="text-bpsOrange font-mono uppercase tracking-widest">Yang Akan Dikumpulkan</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* LEFT: Character/Phone Visual (PPT Style) */}
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="lg:w-1/3 flex justify-center"
                >
                    <div className="relative w-full max-w-sm">
                        {/* Glow behind character */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-bpsOrange/20 blur-[100px] rounded-full"></div>
                        
                        {/* 3D Character Placeholder (Using generic tech illustration) */}
                        <img 
                            src="/assets/mobile-survey.svg" 
                            alt="Responden" 
                            className="w-full h-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500" 
                        />
                        
                        {/* Speech Bubble */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -top-10 -right-10 bg-white text-bpsBlack p-4 rounded-xl rounded-bl-none shadow-xl max-w-[200px] z-20"
                        >
                            <p className="text-xs font-bold leading-tight">"Pastikan data usaha valid dan lengkap ya!"</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT: 3 Data Groups (PPT Style) */}
                <div className="lg:w-2/3 space-y-6">
                    
                    <DataCard 
                        icon={<ClipboardList className="w-8 h-8 text-white" />}
                        title="Detail Usaha"
                        items={["Nama & Alamat Usaha", "NIB & Status Badan Usaha", "Kegiatan Utama (KBLI)", "Jaringan Usaha"]}
                        color="bg-yellow-500"
                        delay={0.2}
                    />

                    <DataCard 
                        icon={<ShoppingCart className="w-8 h-8 text-white" />}
                        title="Karakteristik Usaha"
                        items={["Jumlah Tenaga Kerja", "Penggunaan Internet/Digital", "Sertifikasi Halal", "Mitra Usaha"]}
                        color="bg-bpsOrange"
                        delay={0.4}
                    />

                    <DataCard 
                        icon={<Banknote className="w-8 h-8 text-white" />}
                        title="Data Moneter"
                        items={["Pengeluaran Usaha", "Pendapatan/Omzet", "Nilai Aset & Modal", "Investasi"]}
                        color="bg-blue-500"
                        delay={0.6}
                    />

                </div>
            </div>
        </div>
    </section>
  )
}

const DataCard = ({ icon, title, items, color, delay }: any) => (
    <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
        className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
    >
        {/* Icon Section */}
        <div className={`w-full md:w-32 ${color} p-6 flex flex-col items-center justify-center text-center`}>
            {icon}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex-1">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm group-hover:text-slate-200 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full ${color}`}></div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
)

export default DataDetails;