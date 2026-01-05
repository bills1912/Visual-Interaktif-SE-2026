import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

const Section2Scope: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Horizontal movement
  const x1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.2, 0.6], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

  // Sunburst colors
  const segmentColors = ['#EC4899', '#8B5CF6', '#EF4444', '#F97316', '#FBBF24', '#84CC16', '#22C55E', '#14B8A6'];

  // KBLI codes
  const kbliCodes = [
    { code: 'A', status: 'excluded' }, { code: 'B', status: 'checked' }, { code: 'C', status: 'checked' },
    { code: 'D', status: 'checked' }, { code: 'E', status: 'checked' }, { code: 'F', status: 'checked' },
    { code: 'G', status: 'checked' }, { code: 'H', status: 'checked' }, { code: 'I', status: 'checked' },
    { code: 'J', status: 'checked' }, { code: 'K', status: 'checked' }, { code: 'L', status: 'checked' },
    { code: 'M', status: 'checked' }, { code: 'N', status: 'checked' }, { code: 'O', status: 'excluded' },
    { code: 'P', status: 'partial' }, { code: 'Q', status: 'partial' }, { code: 'R', status: 'partial' },
    { code: 'S', status: 'partial' }, { code: 'T', status: 'excluded' }, { code: 'U', status: 'partial' }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white"
      style={{ height: '350vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Panel 1: Title */}
        <motion.div 
          style={{ x: x1, opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-orange-50 to-yellow-50"
        >
          <div className="text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">
              <span className="text-bpsOrange">KEGIATAN EKONOMI</span><br/>
              <span className="text-slate-800">YANG AKAN DIDATA</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Seluruh lapangan usaha kecuali A, O, T
            </p>
          </div>
        </motion.div>
        
        {/* Panel 2: Sunburst Diagram */}
        <motion.div 
          style={{ x: x2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center z-20 bg-gradient-to-r from-slate-50 to-white"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Sunburst */}
              <div className="flex-1 flex justify-center">
                <div className="relative" style={{ width: '400px', height: '400px' }}>
                  
                  {/* Labels */}
                  <motion.span 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                  >
                    Kewilayahan
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="absolute top-16 -left-4 bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                  >
                    Ekonomi biru
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-1/2 -left-8 -translate-y-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                  >
                    Ekonomi hijau
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-24 -left-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
                  >
                    Ekonomi Digital & Lingkungan
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md"
                  >
                    Ekonomi digital
                  </motion.span>
                  
                  {/* SVG Sunburst */}
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {segmentColors.map((color, i) => {
                      const startAngle = (i * 45) - 90;
                      const endAngle = startAngle + 44;
                      const innerR = 75;
                      const outerR = 150;
                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;
                      
                      const x1 = 200 + innerR * Math.cos(startRad);
                      const y1 = 200 + innerR * Math.sin(startRad);
                      const x2 = 200 + outerR * Math.cos(startRad);
                      const y2 = 200 + outerR * Math.sin(startRad);
                      const x3 = 200 + outerR * Math.cos(endRad);
                      const y3 = 200 + outerR * Math.sin(endRad);
                      const x4 = 200 + innerR * Math.cos(endRad);
                      const y4 = 200 + innerR * Math.sin(endRad);
                      
                      return (
                        <motion.path
                          key={i}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          d={`M ${x1} ${y1} L ${x2} ${y2} A ${outerR} ${outerR} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1}`}
                          fill={color}
                          stroke="white"
                          strokeWidth="2"
                        />
                      );
                    })}
                    <circle cx="200" cy="200" r="75" fill="white" />
                    <circle cx="200" cy="200" r="65" fill="url(#orangeGrad)" />
                    <text x="200" y="190" textAnchor="middle" fill="white" style={{ fontSize: '18px', fontWeight: 'bold' }}>SE2026</text>
                    <text x="200" y="210" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>Seluruh kegiatan</text>
                    <text x="200" y="222" textAnchor="middle" fill="white" style={{ fontSize: '8px' }}>kecuali A, O, T</text>
                    <defs>
                      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FB923C" />
                        <stop offset="100%" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Description */}
              <div className="flex-1 max-w-lg">
                <h3 className="font-serif text-2xl font-bold text-bpsOrange mb-4">
                  8 Kelompok Data Utama
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  {['Kewilayahan', 'Struktur Ekonomi', 'Lapangan Usaha', 'Skala Usaha', 'Karakteristik Usaha', 'Permodalan & Investasi', 'Kinerja & Daya Saing', 'Kendala & Prospek'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segmentColors[i] }}></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 3: KBLI Grid */}
        <motion.div 
          style={{ x: x3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center z-30 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
                <span className="text-bpsOrange">Kategori KBLI</span> yang Dicakup
              </h3>
              
              {/* KBLI Grid */}
              <div className="grid grid-cols-7 gap-3 mb-8 justify-items-center">
                {kbliCodes.map((item, i) => (
                  <motion.div
                    key={item.code}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.02 * i }}
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg cursor-pointer transition-transform hover:scale-110
                      ${item.status === 'excluded' 
                        ? 'bg-red-500 text-white' 
                        : item.status === 'partial' 
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-slate-800' 
                          : 'bg-gradient-to-br from-yellow-400 to-orange-400 text-white'}`}
                  >
                    {item.code}
                    {item.status === 'checked' && <CheckCircle2 className="w-4 h-4 absolute -top-1 -right-1 text-green-500 bg-white rounded-full" />}
                    {item.status === 'excluded' && <XCircle className="w-4 h-4 absolute -top-1 -right-1 text-red-600 bg-white rounded-full" />}
                    {item.status === 'partial' && <AlertCircle className="w-4 h-4 absolute -top-1 -right-1 text-yellow-600 bg-white rounded-full" />}
                  </motion.div>
                ))}
              </div>
              
              {/* Legend */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center"><XCircle className="w-5 h-5 text-white" /></div>
                  <div className="text-sm"><strong className="text-red-600">A, O, T</strong><br/><span className="text-slate-500">Tidak dicakup</span></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <div className="text-sm"><strong className="text-green-600">Centang</strong><br/><span className="text-slate-500">Didata lengkap</span></div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center"><AlertCircle className="w-5 h-5 text-slate-800" /></div>
                  <div className="text-sm"><strong className="text-yellow-600">Sebagian</strong><br/><span className="text-slate-500">Rincian tertentu</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Section2Scope;