import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Store, DollarSign, MapPin, Users, Wifi, Award, Leaf, CreditCard, Building2 } from 'lucide-react';

const Section3DataDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Panel movements
  const x1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.5], ["100%", "0%"]);
  const x3 = useTransform(scrollYProgress, [0.4, 0.75], ["100%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0.65, 1], ["100%", "0%"]);
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Panel 1: Title with Bung Itung */}
        <motion.div 
          style={{ x: x1, opacity: opacity1 }}
          className="absolute inset-0 flex items-center z-10 bg-gradient-to-br from-yellow-50 via-orange-50 to-white"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-6xl font-black mb-6">
                  <span className="text-bpsOrange">RINCIAN DATA</span><br/>
                  <span className="text-slate-800">YANG DIKUMPULKAN</span>
                </h2>
                <p className="text-xl text-slate-600">
                  Setiap usaha akan dicatat dengan detail lengkap dalam 3 kelompok data utama
                </p>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center relative"
              >
                {/* Speech bubble */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-4 right-0 md:right-10 bg-white rounded-2xl p-4 shadow-xl border z-20 max-w-[200px]"
                >
                  <p className="text-sm font-bold text-slate-700">
                    "Pastikan data usaha <span className="text-bpsOrange">valid dan lengkap!</span>"
                  </p>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 border-r border-b"></div>
                </motion.div>
                
                <img 
                  src="./assets/Picture62.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[400px] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 2: Detail Usaha */}
        <motion.div 
          style={{ x: x2, opacity: opacity2 }}
          className="absolute inset-0 flex items-center z-20 bg-gradient-to-r from-yellow-400 to-yellow-500"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-yellow-600 font-bold">KELOMPOK 1</span>
                    <h3 className="text-2xl font-black text-slate-800">Detail Usaha/Direktori</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Informasi dasar dari setiap usaha yang didata
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <MapPin className="w-5 h-5" />, text: 'Nama & Alamat Usaha' },
                    { icon: <FileText className="w-5 h-5" />, text: 'NIB & Status Usaha' },
                    { icon: <MapPin className="w-5 h-5" />, text: 'Jenis Kawasan' },
                    { icon: <Store className="w-5 h-5" />, text: 'Kegiatan Utama (KBLI)' },
                    { icon: <Building2 className="w-5 h-5" />, text: 'Jenis Perusahaan' },
                    { icon: <Store className="w-5 h-5" />, text: 'Produk & Jaringan Usaha' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-yellow-50 rounded-xl"
                    >
                      <span className="text-yellow-600">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center"
              >
                <img 
                  src="./assets/Picture63.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[350px] object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 3: Karakteristik Usaha */}
        <motion.div 
          style={{ x: x3, opacity: opacity3 }}
          className="absolute inset-0 flex items-center z-30 bg-gradient-to-r from-bpsOrange to-orange-500"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="flex justify-center order-2 lg:order-1"
              >
                <img 
                  src="./assets/Picture65.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[350px] object-contain drop-shadow-xl"
                />
              </motion.div>
              
              <div className="bg-white rounded-3xl p-8 shadow-2xl order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-bpsOrange rounded-2xl flex items-center justify-center shadow-lg">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-bpsOrange font-bold">KELOMPOK 2</span>
                    <h3 className="text-2xl font-black text-slate-800">Karakteristik Usaha</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Informasi profil usaha lebih mendalam
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Users className="w-5 h-5" />, text: 'Jumlah Tenaga Kerja' },
                    { icon: <FileText className="w-5 h-5" />, text: 'Tahun Mulai Beroperasi' },
                    { icon: <Wifi className="w-5 h-5" />, text: 'Penggunaan Internet' },
                    { icon: <Award className="w-5 h-5" />, text: 'Sertifikasi Halal' },
                    { icon: <Leaf className="w-5 h-5" />, text: 'Aktivitas Lingkungan' },
                    { icon: <Store className="w-5 h-5" />, text: 'Program MBG' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-orange-50 rounded-xl"
                    >
                      <span className="text-bpsOrange">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Panel 4: Data Moneter */}
        <motion.div 
          style={{ x: x4, opacity: opacity4 }}
          className="absolute inset-0 flex items-center z-40 bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-blue-600 font-bold">KELOMPOK 3</span>
                    <h3 className="text-2xl font-black text-slate-800">Data Moneter</h3>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6">
                  Informasi profil keuangan dari usaha
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <CreditCard className="w-5 h-5" />, text: 'Nilai Pengeluaran' },
                    { icon: <Building2 className="w-5 h-5" />, text: 'Nilai Total Aset' },
                    { icon: <DollarSign className="w-5 h-5" />, text: 'Nilai Produksi/Omzet' },
                    { icon: <Users className="w-5 h-5" />, text: 'Kepemilikan Modal' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 p-3 bg-blue-50 rounded-xl"
                    >
                      <span className="text-blue-600">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex justify-center"
              >
                <img 
                  src="./assets/Picture66.png" 
                  alt="Bung Itung" 
                  className="h-[300px] md:h-[400px] object-contain drop-shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Section3DataDetails;