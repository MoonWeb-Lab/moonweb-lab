import React from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CasesSection } from './components/CasesSection';
import { ConversionFlowSection } from './components/ConversionFlowSection';
import { LaunchFormatsSection } from './components/LaunchFormatsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
        <div className="relative min-h-screen bg-[#0B0B0F] text-[#F4F4F6] selection:bg-purple-500/30 selection:text-white">
          {/* Pure CSS dot grid background (zero JS calculations, locked 60 FPS) */}
          <div className="fixed inset-0 bg-dot-grid pointer-events-none opacity-45 z-0" />

          {/* Main Content Layout */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            
            <main className="flex-1">
              <HeroSection />
              <MarqueeTicker />
              <CasesSection />
              <ConversionFlowSection />
              <LaunchFormatsSection />
            </main>

            <Footer />
          </div>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
};
