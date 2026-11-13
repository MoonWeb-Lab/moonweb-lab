import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sounds } from '../audio/soundEngine';
import { MagneticButton } from './MagneticButton';

export const Header: React.FC = () => {
  const [muted, setMuted] = useState(sounds.isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const isNowMuted = sounds.toggleMute();
    setMuted(isNowMuted);
  };

  const navLinks = [
    { name: 'Кейсы', href: '#cases' },
    { name: 'Как это работает', href: '#flow' },
    { name: 'Калькулятор сметы', href: '#configurator' },
    { name: 'Этапы', href: '#process' },
    { name: 'Гарантии', href: '#guarantees' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E0E10]/90 backdrop-blur-md border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => sounds.playHover()}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            MoonWeb<span className="font-normal text-studio-muted ml-1 text-sm tracking-normal">Lab</span>
          </span>
        </a>

        {/* Live Slot Status Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-studio-surface border border-white/[0.08] text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-studio-muted">Свободно мест:</span>
          <span className="font-semibold text-white">2 проекта на ноябрь</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => sounds.playHover()}
              className="text-xs uppercase tracking-wider font-medium text-studio-muted hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Sound FX + Magnetic CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleSound}
            onMouseEnter={() => sounds.playHover()}
            title={muted ? 'Включить тактильный звук' : 'Выключить звук'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-surface border border-white/[0.08] hover:border-white/20 text-studio-muted hover:text-white transition-all text-xs font-mono"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 text-studio-subtle" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{muted ? 'FX: OFF' : 'FX: ON'}</span>
          </button>

          <MagneticButton
            href="https://t.me/moonweb_labs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-all shadow-sm"
          >
            <span>Обсудить проект</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-studio-surface border border-white/[0.08] text-studio-muted"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-studio-surface border border-white/[0.08] text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/[0.08] bg-[#0E0E10] px-4 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-studio-muted hover:text-white py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href="https://t.me/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-white text-black font-semibold text-sm"
              >
                <span>Написать в Telegram @moonweb_labs</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
