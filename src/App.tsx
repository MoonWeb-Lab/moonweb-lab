import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CasesSection } from './components/CasesSection';
import { ConversionFlowSection } from './components/ConversionFlowSection';
import { LaunchFormatsSection } from './components/LaunchFormatsSection';
import { Footer } from './components/Footer';
import { CursorSpotlight } from './components/CursorSpotlight';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-[#F4F4F6] selection:bg-purple-500/30 selection:text-white">
      {/* Interactive mouse spotlight glow (lightweight GPU only) */}
      <CursorSpotlight />

      {/* Foreground Content */}
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
  );
};
