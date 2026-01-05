import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Database, Smartphone, Globe, Clipboard, CheckCircle2, Server } from 'lucide-react';

const Section4Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Panel movements
  const x1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.35, 0.65], ["100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.6, 1], ["100%", "0%"]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Panel 1: Title */}
        <motion.div 
          style={{ x: x1, opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        >
          <div className="text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">
              <span className="text-slate-800">TAHAPAN</span><br/>
              <span className="text-bpsOrange">PENGUMPULAN DATA</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Dari prelist hingga data siap digunakan
            </p>
          </div>
        </motion.div>
        
        {/* Panel 2: Step 1 - Prelist */}
        <motion.div 
          style={{ x: x2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center z-20 bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="text-white">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
                  <span className="font-bold">TAHAP 01</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Prelist Usaha
                </h3>
                <p className="text-xl text-blue-100 mb-8">
                  Menyusun basis data usaha dari berbagai sumber terintegrasi
                </p>
                
                {/* Data Sources */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { logo: './assets/Picture8.png', name: 'OSS', org: 'Kem. Investasi' },
                    { logo: './assets/Picture9.png', name: 'SBR', org: 'BPS' },
                    { logo: './assets/Picture32.png', name: 'PL-KUMKM', org: 'Kem. Koperasi' }
                  ].map((source, i) => (
                    <motion.div 
                      key={source.name}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="bg-white rounded-2xl p-4 shadow-xl"
                    >
                      <img src={source.logo} alt={source.name} className="h-14 object-contain mb-2" />
                      <p className="text-xs text-slate-500 text-center">{source.org}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="bg-white/20 backdrop-blur rounded-3xl p-12">
                  <Database className="w-32 h-32 text-white" />
                  <p className="text-center text-white font-bold mt-4">Basis Data Terintegrasi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 3: Step 2 - Pendataan Lapangan */}
        <motion.div 
          style={{ x: x3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center z-30 bg-gradient-to-r from-bpsOrange to-orange-500"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center"
              >
                <img 
                  src="./assets/Picture67.png" 
                  alt="Bung Itung" 
                  className="h-[350px] md:h-[450px] object-contain drop-shadow-2xl"
                />
              </motion.div>
              
              <div className="text-white">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
                  <span className="font-bold">TAHAP 02</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Pendataan Lapangan
                </h3>
                <p className="text-xl text-orange-100 mb-8">
                  Bung Itung dan tim melakukan pendataan dengan 3 moda
                </p>
                
                {/* Moda */}
                <div className="space-y-3">
                  {[
                    { code: 'CAPI', icon: <Smartphone className="w-6 h-6" />, desc: 'Computer Assisted Personal Interviewing', sub: 'Aplikasi Mobile' },
                    { code: 'CAWI', icon: <Globe className="w-6 h-6" />, desc: 'Computer Assisted Web Interviewing', sub: 'Aplikasi Web' },
                    { code: 'PAPI', icon: <Clipboard className="w-6 h-6" />, desc: 'Paper Assisted Personal Interviewing', sub: 'Kuesioner Kertas' }
                  ].map((mode, i) => (
                    <motion.div 
                      key={mode.code}
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg"
                    >
                      <div className="w-14 h-14 bg-bpsOrange rounded-xl flex items-center justify-center text-white">
                        {mode.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">{mode.code}</h4>
                        <p className="text-xs text-slate-500">{mode.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 4: Step 3 - Pengolahan */}
        <motion.div 
          style={{ x: x4, opacity: opacity4 }}
          className="absolute inset-0 flex items-center z-40 bg-gradient-to-r from-purple-600 to-purple-700"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="text-white">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-4">
                  <span className="font-bold">TAHAP 03</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl font-black mb-6">
                  Pengolahan Data
                </h3>
                <p className="text-xl text-purple-200 mb-8">
                  Data diolah dengan metode akurat dan disimpan di server BPS
                </p>
                
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xl">⚠️</span>
                    </div>
                    <span className="font-bold text-lg">PENTING</span>
                  </div>
                  <p className="text-purple-100">
                    Data diolah sedemikian rupa menggunakan <span className="font-bold text-white">metode pengolahan data yang akurat</span>, menghasilkan <span className="font-bold text-yellow-300">data agregasi hasil Sensus Ekonomi 2026</span> yang dapat diakses oleh seluruh masyarakat Indonesia dan mancanegara.
                  </p>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Server visual */}
                  <div className="bg-white/20 backdrop-blur rounded-3xl p-8 flex items-center gap-8">
                    <div className="flex gap-2">
                      {[1,2,3].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          className="w-8 h-20 bg-purple-300 rounded-t-lg"
                        />
                      ))}
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-4xl">→</span>
                    </motion.div>
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  
                  <p className="text-center text-white font-bold mt-6">Server BPS → Data Agregasi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Section4Process;