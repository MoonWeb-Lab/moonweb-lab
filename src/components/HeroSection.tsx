import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Soft Ambient Radial Glow Behind Headline (Pure static CSS, zero GPU overhead) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] rounded-full pointer-events-none bg-purple-600/[0.12] blur-[110px] z-0" />

      <div className="relative z-10 max-w-4xl">
        
        {/* Status Badge */}
        <motion.div
          {...fadeIn}
          className="mb-5 inline-flex"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs text-neutral-300 shadow-sm">
            <img
              src={avatarImg}
              alt="Аватар MoonWeb Lab"
              width="16"
              height="16"
              loading="eager"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="font-medium text-white">Веб-студия MoonWeb Lab</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">Сайты, меню и запись для бизнеса</span>
          </div>
        </motion.div>

        {/* Headline: Natural, responsive, zero overflow-hidden clipping */}
        <motion.h1
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] mb-6"
        >
          Делаем быстрые сайты,{' '}
          <span className="text-neutral-400">онлайн-меню и запись для клиентов,</span>{' '}
          с интеграцией в Telegram.
        </motion.h1>

        {/* Subtitle: Natural wrapping, full text visible */}
        <motion.p
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed mb-8 max-w-2xl"
        >
          Создаем удобные веб-сервисы для кофеен, ресторанов, салонов красоты и медицинских центров. Клиенты находят цены и оформляют заказы со смартфонов за 30 секунд, а вы получаете готовые заявки прямо в Telegram.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
        >
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="#cases"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] active:scale-[0.98] transition-all shadow-lg shadow-white/5"
          >
            <span>Смотреть живые кейсы</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="https://t.me/moonweb_lab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141C] border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 active:bg-white/15 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] active:scale-[0.98] transition-all shadow-sm"
          >
            <Send className="w-4 h-4 text-purple-400" />
            <span>Обсудить проект в Telegram</span>
          </motion.a>
        </motion.div>

        {/* 3 Business Metrics */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
              ~1 сек
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Мгновенное открытие на смартфонах и слабом мобильном интернете
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1 text-emerald-400">
              В Telegram
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Заявки с именем и телефоном сразу приходят вам в мессенджер
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1 text-purple-300">
              От 3 до 7 дней
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Быстрый запуск от первого созвона до готового сайта без затягивания сроков
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
