import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ScopeSection from './components/ScopeSection';
import DataDetails from './components/DataDetails';
import ProcessFlow from './components/ProcessFlow';
import Benefits from './components/Benefits';
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
    <div className="bg-bpsBlack text-slate-200 font-sans selection:bg-bpsOrange selection:text-white">
      {/* Cinematic Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-bpsOrange origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Introduction />
        <ScopeSection />
        <ProcessFlow />
        <DataDetails />
        <Benefits />
      </main>

      <Footer />
    </div>
  );
};

export default App;