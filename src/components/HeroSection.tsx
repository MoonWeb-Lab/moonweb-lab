import React from 'react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

/* Premium Apple/Linear easing: smooth deceleration without hard stop */
const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* Spring physics for tactile button feedback */
const SPRING_TACTILE = { type: 'spring' as const, stiffness: 350, damping: 28 };

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const heroContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const heroItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: EASE_PREMIUM,
      },
    },
  };

  const metricsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.3,
      },
    },
  };

  const metricCardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 14,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: EASE_PREMIUM,
      },
    },
  };

  return (
    <section className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Soft Ambient Radial Glow Behind Headline (Pure static CSS, zero GPU overhead) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[360px] rounded-full pointer-events-none bg-purple-600/[0.12] blur-[110px] z-0" />

      <m.div
        variants={heroContainerVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        className="relative z-10 max-w-4xl"
      >
        
        {/* Status Badge */}
        <m.div
          variants={heroItemVariants}
          className="mb-4 inline-flex max-w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs text-neutral-300 shadow-sm max-w-full">
            <img
              src={avatarImg}
              alt="Аватар MoonWeb Lab"
              width="16"
              height="16"
              loading="eager"
              className="w-4 h-4 rounded-full object-cover shrink-0"
            />
            <span className="font-medium text-white shrink-0">MoonWeb Lab</span>
            <span className="text-neutral-500 shrink-0">•</span>
            <span className="text-neutral-400 truncate">Сайты и запись для бизнеса</span>
          </div>
        </m.div>

        {/* Headline */}
        <m.h1
          variants={heroItemVariants}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] mb-5 max-w-4xl"
        >
          Делаем быстрые сайты,{' '}
          <span className="text-neutral-400">онлайн-меню и&nbsp;запись для&nbsp;клиентов,</span>{' '}
          с&nbsp;интеграцией в&nbsp;Telegram.
        </m.h1>

        {/* Subtitle */}
        <m.p
          variants={heroItemVariants}
          className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed mb-7 max-w-2xl text-pretty"
        >
          Создаем удобные веб-сервисы для кофеен, ресторанов, салонов красоты и медицинских центров. Клиенты находят цены и оформляют заказы со смартфонов за 30 секунд, а вы получаете готовые заявки прямо в Telegram.
        </m.p>

        {/* CTA Buttons */}
        <m.div
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
        >
          <m.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_TACTILE}
            href="#cases"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] transition-colors shadow-lg shadow-white/5"
          >
            <span>Смотреть живые кейсы</span>
            <ArrowDown className="w-4 h-4" />
          </m.a>

          <m.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRING_TACTILE}
            href="https://t.me/moonweb_lab"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141C] border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 active:bg-white/15 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] transition-colors shadow-sm"
          >
            <Send className="w-4 h-4 text-purple-400" />
            <span>Обсудить проект в Telegram</span>
          </m.a>
        </m.div>

        {/* 3 Business Metrics */}
        <m.div
          variants={metricsContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 pt-5 border-t border-white/10"
        >
          <m.div
            variants={metricCardVariants}
            whileHover={{ y: -3 }}
            transition={SPRING_TACTILE}
            className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
              ~1 сек
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Мгновенное открытие на смартфонах и слабом мобильном интернете
            </p>
          </m.div>

          <m.div
            variants={metricCardVariants}
            whileHover={{ y: -3 }}
            transition={SPRING_TACTILE}
            className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight mb-1">
              В Telegram
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Заявки с именем и телефоном сразу приходят вам в мессенджер
            </p>
          </m.div>

          <m.div
            variants={metricCardVariants}
            whileHover={{ y: -3 }}
            transition={SPRING_TACTILE}
            className="p-4 sm:p-5 rounded-2xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-colors"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-300 tracking-tight mb-1">
              От 3 до 7 дней
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Быстрый запуск от первого созвона до готового сайта без затягивания сроков
            </p>
          </m.div>
        </m.div>

      </m.div>
    </section>
  );
};
