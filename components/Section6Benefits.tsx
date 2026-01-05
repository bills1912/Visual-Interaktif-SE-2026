import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Landmark, Building, Shield } from 'lucide-react';

const Section6Benefits: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  
  const x1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.35, 0.65], ["100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.6, 1], ["100%", "0%"]);
  const op1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const op2 = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const op3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const op4 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  return (
    <section ref={ref} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Panel 1: Title */}
        <motion.div style={{ x: x1, opacity: op1 }} className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <div className="text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">
              <span className="text-bpsOrange">MANFAAT DATA</span><br/>
              <span className="text-slate-800">SENSUS EKONOMI 2026</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Data untuk kemajuan bersama
            </p>
          </div>
        </motion.div>

        {/* Panel 2: Manfaat untuk Masyarakat */}
        <motion.div style={{ x: x2, opacity: op2 }} className="absolute inset-0 flex items-center z-20 bg-gradient-to-r from-bpsOrange to-orange-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-5 py-3 mb-6">
                  <Users className="w-8 h-8" />
                  <span className="font-bold text-xl">MANFAAT UNTUK</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-8">
                  Masyarakat
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Profil usaha terdata secara resmi dalam peta ekonomi nasional',
                    'Usaha rumah tangga lebih mudah menerima bantuan dana',
                    'Peluang kolaborasi antar usaha dalam ekosistem yang sehat'
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-orange-50">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="bg-white/20 backdrop-blur rounded-full w-64 h-64 flex items-center justify-center">
                  <Users className="w-32 h-32 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Panel 3: Manfaat untuk Pemerintah */}
        <motion.div style={{ x: x3, opacity: op3 }} className="absolute inset-0 flex items-center z-30 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="bg-white/20 backdrop-blur rounded-full w-64 h-64 flex items-center justify-center">
                  <Landmark className="w-32 h-32 text-white" />
                </div>
              </motion.div>
              
              <div className="text-white">
                <div className="inline-flex items-center gap-3 bg-white/20 rounded-2xl px-5 py-3 mb-6">
                  <Landmark className="w-8 h-8" />
                  <span className="font-bold text-xl">MANFAAT UNTUK</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-8">
                  Pemerintah
                </h3>
                
                <div className="space-y-4">
                  {[
                    'Pengambilan kebijakan ekosistem usaha lebih tepat sasaran',
                    'Akselerasi pembukaan lapangan pekerjaan baru',
                    'Penyaluran dana bantuan usaha semakin mudah dan tepat'
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 bg-white/10 backdrop-blur rounded-xl p-4"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-blue-50">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Panel 4: Keamanan Data - Tenang Saja */}
        <motion.div style={{ x: x4, opacity: op4 }} className="absolute inset-0 flex items-center z-40 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Character - Bung Itung santai */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center relative"
              >
                {/* Lightbulb */}
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 right-10 w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl">💡</span>
                </motion.div>
                
                <img 
                  src="./assets/Picture64.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[400px] object-contain drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Content */}
              <div>
                <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl">
                  {/* Questions */}
                  <div className="text-center mb-6">
                    <p className="text-slate-600 mb-2">
                      Khawatir terhadap <span className="font-bold text-red-500">kebocoran data</span>?
                    </p>
                    <p className="text-slate-600 mb-4">
                      Khawatir data digunakan untuk <span className="font-bold text-red-500">kepentingan pribadi</span>?
                    </p>
                    
                    {/* Answer */}
                    <motion.h3 
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="font-serif text-4xl md:text-5xl font-black text-bpsOrange"
                    >
                      TENANG SAJA!
                    </motion.h3>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-blue-50 rounded-2xl p-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Bung Itung dan tim pendata memastikan bahwa data yang dikumpulkan{' '}
                      <span className="font-bold text-green-600">aman, akurat</span>, dan pastinya pengumpulan data sesuai dengan{' '}
                      <span className="font-bold text-blue-600">SOP yang berlaku</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section6Benefits;