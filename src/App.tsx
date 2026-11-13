import React from 'react';
import { CanvasBackground } from './components/CanvasBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ProjectConfigurator } from './components/ProjectConfigurator';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsQueueSection } from './components/ReviewsQueueSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#060A13] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Interactive 2D Canvas cosmic particle background with mouse physics */}
      <CanvasBackground />

      {/* Cyber grid background texture */}
      <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-40 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 space-y-12 sm:space-y-20">
          <HeroSection />
          <PortfolioShowcase />
          <ProjectConfigurator />
          <ProcessSection />
          <ReviewsQueueSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};
