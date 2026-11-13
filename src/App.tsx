import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LeadFlowDemo } from './components/LeadFlowDemo';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProjectConfigurator } from './components/ProjectConfigurator';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsQueueSection } from './components/ReviewsQueueSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#0E0E10] text-[#F4F4F6] selection:bg-white/20 selection:text-white">
      {/* Subtle non-intrusive micro-grid background (Zero WebGL / 60 FPS guarantee) */}
      <div className="fixed inset-0 bg-studio-grid pointer-events-none opacity-60 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 space-y-4">
          <HeroSection />
          <PortfolioShowcase />
          <LeadFlowDemo />
          <ProjectConfigurator />
          <ProcessSection />
          <ReviewsQueueSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};
