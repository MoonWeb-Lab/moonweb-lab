import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { LeadFlowDemo } from './components/LeadFlowDemo';
import { ProjectConfigurator } from './components/ProjectConfigurator';
import { ProcessSection } from './components/ProcessSection';
import { GuaranteesFaqSection } from './components/GuaranteesFaqSection';
import { Footer } from './components/Footer';
import { CursorSpotlight } from './components/CursorSpotlight';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0E0E10] text-[#F4F4F6] selection:bg-white/20 selection:text-white">
      {/* Interactive mouse spotlight glow */}
      <CursorSpotlight />

      {/* Subtle non-intrusive micro-grid background (Zero WebGL / 60 FPS) */}
      <div className="fixed inset-0 bg-studio-grid pointer-events-none opacity-50 z-0" />

      {/* Foreground Content with Generous Editorial Breathing Room */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <MarqueeTicker />
          <PortfolioShowcase />
          <LeadFlowDemo />
          <ProjectConfigurator />
          <ProcessSection />
          <GuaranteesFaqSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};
