import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #F97316 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Floating Clouds */}
      <motion.div 
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-0 w-64 h-32 bg-white/40 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ x: [0, -80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-0 w-80 h-40 bg-white/30 rounded-full blur-2xl"
      />
      
      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.img 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                src="./assets/Picture6.png" 
                alt="Logo SE2026" 
                className="h-28 md:h-36 object-contain mx-auto lg:mx-0 mb-6"
              />
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="font-serif text-5xl md:text-7xl font-black mb-4 leading-tight"
              >
                <span className="text-slate-800">SENSUS</span><br/>
                <span className="text-bpsOrange">EKONOMI</span><br/>
                <span className="text-slate-800">2026</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0"
              >
                <span className="font-bold text-bpsOrange">Mencatat Ekonomi Indonesia.</span><br/>
                Merekam denyut nadi ekonomi bangsa untuk masa depan yang lebih cerah.
              </motion.p>
            </motion.div>
            
            {/* Right - Character */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex justify-center"
            >
              {/* Speech Bubble */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="absolute top-0 right-4 md:right-10 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 max-w-[200px] z-20"
              >
                <p className="text-sm font-bold text-slate-700">
                  "Halo! Saya <span className="text-bpsOrange">Bung Itung</span>!"
                </p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-slate-100"></div>
              </motion.div>
              
              <motion.img 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="./assets/Picture67.png" 
                alt="Bung Itung" 
                className="h-[350px] md:h-[450px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-sm text-slate-500 mb-2">Scroll untuk mulai</span>
        <div className="w-12 h-12 rounded-full bg-bpsOrange text-white flex items-center justify-center shadow-lg">
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;