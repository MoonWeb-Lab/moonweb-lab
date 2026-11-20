import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

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
    <motion.header
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full h-[68px] bg-[#0B0B0F]/90 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-6">
        
        {/* Left: Brand Logo + Avatar */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 shrink-0 focus:outline-none group"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-purple-500/30 shrink-0 shadow-[0_0_14px_rgba(168,85,247,0.25)] group-hover:border-purple-400/60 transition-colors">
            <img
              src={avatarImg}
              alt="MoonWeb Lab Avatar"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
            MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
          </span>
        </motion.a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Right: Status Pill + CTA Button */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-neutral-400">Статус:</span>
            <span className="font-semibold text-emerald-400">Берём проекты</span>
          </div>

          {/* CTA Button -> Direct to https://t.me/moonweb_lab */}
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="https://t.me/moonweb_lab"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Обсудить проект</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          {/* Mobile Menu Button (< 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню навигации"
            className="lg:hidden p-2 rounded-xl bg-[#14141C] border border-white/10 text-neutral-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-[68px] left-0 w-full bg-[#0E0E14] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
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
                href="https://t.me/moonweb_lab"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
              >
                <span>Обсудить проект в Telegram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
