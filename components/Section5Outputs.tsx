import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PieChart, Globe, Store, Users, CreditCard, TrendingUp } from 'lucide-react';

const Section5Outputs: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  
  const x1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.5], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.4, 0.75], ["100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.65, 1], ["100%", "0%"]);
  const op1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <section ref={ref} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Panel 1: Title */}
        <motion.div style={{ x: x1, opacity: op1 }} className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-teal-50 via-white to-blue-50">
          <div className="text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">
              <span className="text-bpsOrange">INFORMASI</span><br/>
              <span className="text-slate-800">YANG DIHASILKAN</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Data strategis untuk pembangunan ekonomi Indonesia
            </p>
          </div>
        </motion.div>

        {/* Panel 2: Struktur Ekonomi */}
        <motion.div style={{ x: x2, opacity: op2 }} className="absolute inset-0 flex items-center z-20 bg-gradient-to-r from-bpsOrange to-orange-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-5 py-3 mb-6">
                  <PieChart className="w-8 h-8" />
                  <span className="font-bold text-xl">OUTPUT 1</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Struktur Ekonomi
                </h3>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-white rounded-2xl p-5 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6 text-bpsOrange" />
                      <h4 className="font-bold text-slate-800">Lapangan Kerja</h4>
                    </div>
                    <p className="text-sm text-slate-600">Data terkait jumlah lapangan kerja dan penyerapan tenaga kerja di berbagai sektor</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <PieChart className="w-6 h-6 text-bpsOrange" />
                      <h4 className="font-bold text-slate-800">Demografi Pengusaha</h4>
                    </div>
                    <p className="text-sm text-slate-600">Data terkait jumlah pengusaha berdasarkan informasi demografi</p>
                  </motion.div>
                </div>
              </div>
              
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="bg-white/20 backdrop-blur rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <PieChart className="w-32 h-32 md:w-40 md:h-40 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Panel 3: Ekonomi Digital */}
        <motion.div style={{ x: x3, opacity: op3 }} className="absolute inset-0 flex items-center z-30 bg-gradient-to-r from-teal-500 to-cyan-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur rounded-3xl p-8">
                    <Globe className="w-32 h-32 md:w-40 md:h-40 text-white" />
                  </div>
                  {/* Floating icons */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg"
                  >
                    <span className="text-2xl">💳</span>
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg"
                  >
                    <span className="text-2xl">📱</span>
                  </motion.div>
                </div>
              </motion.div>
              
              <div className="text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-5 py-3 mb-6">
                  <Globe className="w-8 h-8" />
                  <span className="font-bold text-xl">OUTPUT 2</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Ekonomi Digital & Lingkungan
                </h3>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-white rounded-2xl p-5 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="w-6 h-6 text-teal-500" />
                      <h4 className="font-bold text-slate-800">Digitalisasi Usaha</h4>
                    </div>
                    <p className="text-sm text-slate-600">Data usaha yang sudah melakukan digitalisasi, seperti pembayaran dengan QRIS</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-5 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-6 h-6 text-teal-500" />
                      <h4 className="font-bold text-slate-800">Aplikasi Digital</h4>
                    </div>
                    <p className="text-sm text-slate-600">Data usaha yang sudah menggunakan aplikasi digital dalam penjualan</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Panel 4: Karakteristik Usaha */}
        <motion.div style={{ x: x4, opacity: op4 }} className="absolute inset-0 flex items-center z-40 bg-gradient-to-r from-yellow-400 to-amber-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-5 py-3 mb-6">
                  <Store className="w-8 h-8" />
                  <span className="font-bold text-xl">OUTPUT 3</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Karakteristik Usaha
                </h3>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-yellow-500" />
                    <h4 className="font-bold text-slate-800">Skala Usaha</h4>
                  </div>
                  <p className="text-slate-600 mb-4">Data terkait skala usaha, apakah UMKM atau UMB (Usaha Menengah Besar)</p>
                  
                  <div className="flex gap-3">
                    <div className="flex-1 bg-yellow-50 rounded-xl p-4 text-center">
                      <span className="text-3xl mb-2 block">🏪</span>
                      <span className="font-bold text-slate-700">UMKM</span>
                    </div>
                    <div className="flex-1 bg-yellow-50 rounded-xl p-4 text-center">
                      <span className="text-3xl mb-2 block">🏢</span>
                      <span className="font-bold text-slate-700">UMB</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center"
              >
                <img 
                  src="./assets/Picture63.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[400px] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section5Outputs;