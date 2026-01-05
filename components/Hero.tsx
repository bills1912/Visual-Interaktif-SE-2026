import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Kompas VIP Style: Background stays fixed but scales down slowly (Zoom Out effect)
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]); 
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Text moves slower than scroll
  const rotateGlobe = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-bpsBlack flex items-center justify-center sticky top-0 -z-10">
      
      {/* Background Elements with Scale Effect */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-bpsBlack/20 to-bpsBlack z-10"></div>
        
        {/* Animated Globe Network */}
        <motion.div 
            style={{ rotate: rotateGlobe }}
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vh] h-[140vh] opacity-40"
        >
             <img src="/assets/globe-network.svg" alt="" className="w-full h-full object-contain invert" />
        </motion.div>

        {/* City Skyline */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] z-0 opacity-40 mix-blend-overlay">
             <img src="/assets/skyscrapers.svg" alt="" className="w-full h-full object-cover object-bottom grayscale" />
        </div>
      </motion.div>

      {/* Main Title Content with Parallax Y */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Custom bezier for "premium" feel
        >
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-8 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.2)]">
                    <img src="/assets/logo-se2026.svg" alt="Logo" className="w-12 h-12 object-contain" /> 
                </div>
                
                <span className="text-bpsOrange font-mono tracking-[0.4em] text-sm font-bold mb-6 uppercase">Visual Interaktif</span>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-2xl">
                  SENSUS<br/>
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">EKONOMI</span><br/>
                  2026
                </h1>
                
                <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-bpsOrange to-transparent mt-4 mb-10"></div>
                
                <p className="font-sans text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed font-light drop-shadow-md">
                  Merekam denyut nadi ekonomi bangsa. Langkah pencatatan kolektif untuk masa depan Indonesia yang lebih cerah.
                </p>
            </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-slate-400 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-bpsOrange to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;