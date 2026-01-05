import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section1Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Horizontal movement for panels
  const x1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.5], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.4, 0.75], ["100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.65, 1], ["100%", "0%"]);
  
  // Opacity for text reveals
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  // Timeline logos
  const timelineLogos = [
    { year: 1986, logo: './assets/Picture7.png' },
    { year: 1996, logo: './assets/Picture12.png' },
    { year: 2006, logo: './assets/Picture11.png' },
    { year: 2016, logo: './assets/Picture10.png' },
    { year: 2026, logo: './assets/Picture6.png', active: true }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50"
      style={{ height: '400vh' }} // 4x viewport height for scroll length
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-bpsOrange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Panel 1: Title */}
        <motion.div 
          style={{ x: x1, opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="text-center px-6">
            <motion.h2 
              className="font-serif text-5xl md:text-7xl font-black mb-6"
            >
              <span className="text-slate-800">MENGENAL</span><br/>
              <span className="text-bpsOrange">SENSUS EKONOMI</span>
            </motion.h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Scroll untuk menjelajahi perjalanan Sensus Ekonomi Indonesia
            </p>
          </div>
        </motion.div>
        
        {/* Panel 2: UU dan Penjelasan */}
        <motion.div 
          style={{ x: x2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center z-20"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Text Content */}
              <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl border border-slate-200">
                <div className="text-6xl text-bpsOrange/20 font-serif leading-none mb-4">"</div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                  Sensus Ekonomi merupakan kegiatan yang telah <span className="text-bpsOrange font-bold">diamanatkan dalam UU No 16 Tahun 1997</span> Tentang Statistik.
                </p>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  Sensus dilakukan sekurang-kurangnya <span className="text-bpsOrange font-bold">10 tahun sekali</span> oleh Badan Pusat Statistik (BPS).
                </p>
                
                <div className="mt-8 p-4 bg-bpsOrange/10 rounded-xl border border-bpsOrange/30">
                  <p className="text-sm font-bold text-bpsOrange">
                    📋 Dilaksanakan di setiap tahun yang berakhiran angka 6
                  </p>
                </div>
              </div>
              
              {/* Right - 3 Types of Census */}
              <div className="space-y-4">
                {[
                  { logo: './assets/Picture34.png', name: 'Sensus Penduduk', year: '2020', digit: '0', color: 'bg-blue-500' },
                  { logo: './assets/Picture33.png', name: 'Sensus Pertanian', year: '2023', digit: '3', color: 'bg-green-500' },
                  { logo: './assets/Picture6.png', name: 'Sensus Ekonomi', year: '2026', digit: '6', color: 'bg-bpsOrange', highlight: true }
                ].map((census, i) => (
                  <motion.div 
                    key={census.name}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      census.highlight 
                        ? 'bg-bpsOrange/10 border-2 border-bpsOrange shadow-xl scale-105' 
                        : 'bg-white shadow-lg border border-slate-100'
                    }`}
                  >
                    <img src={census.logo} alt={census.name} className="h-16 w-24 object-contain" />
                    <div className="flex-1">
                      <h4 className={`font-bold ${census.highlight ? 'text-bpsOrange' : 'text-slate-700'}`}>
                        {census.name}
                      </h4>
                      <p className="text-sm text-slate-500">Tahun berakhiran {census.digit}</p>
                    </div>
                    <div className={`w-12 h-12 ${census.color} rounded-xl flex items-center justify-center text-white font-bold`}>
                      {census.year.slice(-2)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 3: Tujuan SE2026 */}
        <motion.div 
          style={{ x: x3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center z-30 bg-gradient-to-r from-bpsOrange to-orange-500"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Character */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center"
              >
                <img 
                  src="./assets/Picture66.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[400px] object-contain drop-shadow-2xl"
                />
              </motion.div>
              
              {/* Right - Tujuan */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="font-serif text-2xl md:text-3xl font-black text-bpsOrange mb-6">
                  TUJUAN SENSUS EKONOMI 2026
                </h3>
                
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                  <p className="text-slate-600 italic leading-relaxed">
                    "Menyediakan <span className="font-bold text-slate-800">data dasar seluruh kegiatan ekonomi</span> sebagai landasan dalam penyusunan kebijakan dan perencanaan pembangunan nasional"
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    '📊 Menyediakan informasi struktur ekonomi',
                    '🏪 Menyediakan informasi karakteristik usaha',
                    '🌐 Menyediakan informasi ekonomi digital dan lingkungan'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 4: Timeline */}
        <motion.div 
          style={{ x: x4, opacity: opacity4 }}
          className="absolute inset-0 flex items-center z-40 bg-gradient-to-br from-slate-900 to-slate-800"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl md:text-5xl font-black text-white mb-4">
                Sensus Ekonomi <span className="text-bpsOrange">ke-5</span>
              </h3>
              <p className="text-slate-400 text-lg">Perjalanan Sensus Ekonomi Indonesia sejak 1986</p>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-bpsOrange to-bpsOrange rounded-full -translate-y-1/2"></div>
              
              <div className="relative grid grid-cols-5 gap-2 md:gap-4">
                {timelineLogos.map((item, i) => (
                  <motion.div 
                    key={item.year}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    className="flex flex-col items-center"
                  >
                    <div className={`relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center bg-white shadow-xl overflow-hidden
                      ${item.active ? 'ring-4 ring-bpsOrange' : ''}`}
                      style={item.active ? { boxShadow: '0 0 40px rgba(249, 115, 22, 0.5)' } : {}}
                    >
                      <img src={item.logo} alt={`SE ${item.year}`} className="w-full h-full object-contain p-2" />
                    </div>
                    <span className={`mt-3 font-bold text-lg md:text-2xl ${item.active ? 'text-bpsOrange' : 'text-slate-400'}`}>
                      {item.year}
                    </span>
                    {item.active && (
                      <motion.span 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-xs text-bpsOrange font-bold mt-1"
                      >
                        COMING SOON
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Section1Introduction;