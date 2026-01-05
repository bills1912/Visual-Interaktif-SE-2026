import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import Section1Introduction from './components/Section1Introduction';
import Section2Scope from './components/Section2Scope';
import Section3DataDetails from './components/Section3DataDetails';
import Section4Process from './components/Section4Process';
import Section5Outputs from './components/Section5Outputs';
import Section6Benefits from './components/Section6Benefits';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-white text-slate-800 font-sans selection:bg-bpsOrange selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-bpsOrange origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        {/* Hero - Full screen intro */}
        <HeroSection />
        
        {/* Section 1: Mengenal Sensus Ekonomi - Horizontal Scroll */}
        <Section1Introduction />
        
        {/* Section 2: Kegiatan Ekonomi yang Didata */}
        <Section2Scope />
        
        {/* Section 3: Rincian Data */}
        <Section3DataDetails />
        
        {/* Section 4: Tahapan Pengumpulan Data */}
        <Section4Process />
        
        {/* Section 5: Informasi yang Dihasilkan */}
        <Section5Outputs />
        
        {/* Section 6: Manfaat Data */}
        <Section6Benefits />
      </main>

      <Footer />
    </div>
  );
};

export default App;