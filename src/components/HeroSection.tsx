import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Masked reveal variants for text lines (cubic-bezier(0.16, 1, 0.3, 1))
  const maskLineVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : '105%',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: (delay: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : delay,
      },
    }),
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="max-w-4xl">
        
        {/* Status Badge with Avatar Glow (stagger 0ms) */}
        <div className="overflow-hidden pb-1 mb-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={maskLineVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300"
          >
            <img
              src={avatarImg}
              alt="MoonWeb Lab"
              className="w-4 h-4 rounded-full object-cover"
            />
            <span className="font-medium text-white">Веб-студия MoonWeb Lab</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-400">Сайты, меню и запись для бизнеса</span>
          </motion.div>
        </div>

        {/* Masked Headline Lines (staggers: 80ms, 160ms, 240ms) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
          <div className="overflow-hidden pb-1 pt-0.5">
            <motion.div
              custom={0.08}
              initial="hidden"
              animate="visible"
              variants={maskLineVariants}
            >
              Делаем быстрые сайты,
            </motion.div>
          </div>
          
          <div className="overflow-hidden pb-1 pt-0.5">
            <motion.div
              custom={0.16}
              initial="hidden"
              animate="visible"
              variants={maskLineVariants}
              className="text-neutral-400"
            >
              которые приводят клиентов,
            </motion.div>
          </div>

          <div className="overflow-hidden pb-1 pt-0.5">
            <motion.div
              custom={0.24}
              initial="hidden"
              animate="visible"
              variants={maskLineVariants}
            >
              а не просто висят в сети.
            </motion.div>
          </div>
        </h1>

        {/* Subtitle with Masked Container (stagger 320ms) */}
        <div className="overflow-hidden pb-1 mb-10 max-w-2xl">
          <motion.p
            custom={0.32}
            initial="hidden"
            animate="visible"
            variants={maskLineVariants}
            className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed"
          >
            Создаём удобные сайты-визитки, онлайн-меню и системы записи для ресторанов, бьюти-сферы, автосервисов и локальных компаний. Клиенты за 30 секунд находят цены и услуги со смартфона, а вы получаете готовые заявки прямо в Telegram.
          </motion.p>
        </div>

        {/* CTA Buttons with Masked Container (stagger 400ms) */}
        <div className="overflow-hidden pb-2 mb-16">
          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={maskLineVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href="#cases"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
            >
              <span>Смотреть живые кейсы</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contacts"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-medium text-sm hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Send className="w-4 h-4 text-purple-400" />
              <span>Обсудить задачу</span>
            </a>
          </motion.div>
        </div>

        {/* 4 Tangible Business Metrics (Cascading pop-in stagger 500ms) */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.48,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
              ~1 сек
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Открытие сайта на любом смартфоне и мобильном интернете
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1 text-emerald-400">
              В Telegram
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Заявки с именем и телефоном сразу приходят вам в мессенджер
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
              3–7 дней
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Быстрый запуск под ключ без затягивания сроков
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1 text-purple-300">
              0 ₽ / мес
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Сайт принадлежит вам, без скрытых оплат и платных платформ
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
