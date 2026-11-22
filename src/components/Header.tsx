import React, { useState } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];
const SPRING_TACTILE = { type: 'spring' as const, stiffness: 350, damping: 28 };

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { name: 'Кейсы', href: '#cases' },
    { name: 'Форматы работы', href: '#formats' },
    { name: 'Как это работает', href: '#how-it-works' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <m.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM }}
      className="sticky top-0 z-50 w-full h-[68px] bg-[#0B0B0F]/90 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo + Avatar */}
        <m.a
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={SPRING_TACTILE}
          className="flex items-center gap-3 shrink-0 rounded-xl focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] group"
          aria-label="MoonWeb Lab: главная страница"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-purple-500/30 shrink-0 shadow-[0_0_14px_rgba(168,85,247,0.25)] group-hover:border-purple-400/60 transition-colors">
            <img
              src={avatarImg}
              alt="Логотип MoonWeb Lab"
              width="36"
              height="36"
              fetchPriority="high"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
            MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
          </span>
        </m.a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
          {navLinks.map((item) => (
            <m.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={SPRING_TACTILE}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap rounded-md focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] py-1 px-2"
            >
              {item.name}
            </m.a>
          ))}
        </nav>

        {/* Right: Status Pill + CTA Button */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs shrink-0 select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-neutral-400">Статус:</span>
            <span className="font-semibold text-emerald-400">Берём проекты</span>
          </div>

          {/* CTA Button -> Direct to https://t.me/moonweb_lab */}
          <m.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_TACTILE}
            href="https://t.me/moonweb_lab"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Обсудить проект</span>
            <ArrowUpRight className="w-4 h-4" />
          </m.a>

          {/* Mobile Menu Button (< 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню навигации'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 rounded-xl bg-[#14141C] border border-white/10 text-neutral-300 hover:text-white active:bg-[#1E1E28] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] active:scale-95 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            className="lg:hidden absolute top-[68px] left-0 w-full bg-[#0E0E14] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            <nav className="flex flex-col gap-3" aria-label="Мобильная навигация">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-neutral-200 hover:text-white py-2 px-3 rounded-lg hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-colors"
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
                href="https://t.me/moonweb_lab"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none active:scale-[0.98] transition-all"
              >
                <span>Обсудить проект в Telegram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
};
