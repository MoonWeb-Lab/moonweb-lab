import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Send, Menu, X } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

export const Header: React.FC = () => {
  const [muted, setMuted] = useState(sounds.isMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const isNowMuted = sounds.toggleMute();
    setMuted(isNowMuted);
  };

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Конфигуратор', href: '#configurator' },
    { name: 'Процесс', href: '#process' },
    { name: 'Отзывы', href: '#reviews' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-space-950/75 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={() => sounds.playHover()}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-0.5 shadow-neon-cyan transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#080E1C] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-sky-300 transition-colors">MoonWeb</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Lab</span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Digital Engineering & Mini Apps</p>
          </div>
        </a>

        {/* Live Slot Status Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">Свободно мест на ноябрь:</span>
          <span className="font-bold text-emerald-400">2 слота</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onMouseEnter={() => sounds.playHover()}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Synthesizer Controller Button */}
          <button
            onClick={toggleSound}
            title={muted ? 'Включить звук интерфейса' : 'Отключить звук'}
            className={`p-2.5 rounded-xl border text-xs font-mono flex items-center gap-1.5 transition-all ${
              !muted
                ? 'bg-sky-500/10 border-sky-500/40 text-sky-300 shadow-sm shadow-sky-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
          >
            {!muted ? (
              <>
                <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
                <span className="hidden sm:inline text-[11px] font-semibold">FX: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline text-[11px]">FX: OFF</span>
              </>
            )}
          </button>

          {/* Telegram CTA Button */}
          <a
            href="https://t.me/moonweb_labs"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold shadow-neon-cyan hover:shadow-neon-indigo transition-all transform hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Написать в TG</span>
          </a>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-space-950/95 border-b border-white/10 px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 pb-2 text-xs border-b border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-slate-300">Свободно мест на ноябрь:</span>
            <span className="font-bold text-emerald-400">2 слота</span>
          </div>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
                sounds.playClick();
              }}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-sky-400"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
