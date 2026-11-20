import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Кейсы', href: '#cases' },
    { name: 'Форматы работы', href: '#formats' },
    { name: 'Как это работает', href: '#how-it-works' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[70px] bg-[#0B0B0F]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo + Avatar */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.25)] shrink-0 transition-transform group-hover:scale-105">
            <img
              src={avatarImg}
              alt="MoonWeb Lab Avatar"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
              MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation (max 4 items, single line, no wrap) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Status Pill + CTA Button */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-neutral-400">Статус:</span>
            <span className="font-semibold text-emerald-400">Берём проекты</span>
          </div>

          {/* CTA Button */}
          <a
            href="#contacts"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Обсудить проект</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button (< 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню навигации"
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Smooth slide-down without layout shift) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-base font-medium text-neutral-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-neutral-400 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Сейчас открыта запись на проекты</span>
            </div>

            <a
              href="#contacts"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
            >
              <span>Обсудить проект</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
