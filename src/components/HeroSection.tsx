import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Zap, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { sounds } from '../audio/soundEngine';
import { MagneticButton } from './MagneticButton';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const lineVariants: Variants = {
    hidden: { y: '110%', opacity: 0 },
    visible: (custom: number) => ({
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: shouldReduceMotion ? 0 : 0.12 * custom,
      },
    }),
  };

  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-5xl">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2.5 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono uppercase tracking-wider text-[11px] text-studio-text">
            Boutique Digital Production
          </span>
          <span className="text-studio-subtle">•</span>
          <span>Минск & дистанционно</span>
        </motion.div>

        {/* Masked Headline Lines */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-editorial leading-[1.08] mb-8">
          <div className="overflow-hidden">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              Разрабатываем сайты
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
              className="text-neutral-400"
            >
              и Telegram Mini Apps,
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              которые приносят продажи.
            </motion.div>
          </div>
        </h1>

        {/* Sharp Business Copywriting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-studio-muted max-w-2xl leading-relaxed mb-10"
        >
          Превращаем случайных посетителей в реальных клиентов без потери заявок в Direct. Онлайн-запись 24/7, квиз-калькуляторы сметы и мгновенные уведомления в Telegram за 1 секунду.
        </motion.p>

        {/* Dual Actions with Magnetic Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
        >
          <MagneticButton
            href="#configurator"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>Рассчитать стоимость за 1 минуту</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#cases"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-studio-surface border border-white/[0.08] text-white font-medium text-sm hover:border-white/20 transition-all"
          >
            <span>Смотреть живые кейсы</span>
            <ArrowUpRight className="w-4 h-4 text-studio-muted" />
          </MagneticButton>
        </motion.div>

        {/* Tangible Business Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08]"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              0.4s
            </div>
            <p className="text-xs text-studio-muted">
              Открытие на мобильном (PageSpeed 98+)
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              0 потерь
            </div>
            <p className="text-xs text-studio-muted">
              Заявок из Instagram и карт без оператора
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              5–7 дней
            </div>
            <p className="text-xs text-studio-muted">
              Средний срок релиза с договором
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
              100%
            </div>
            <p className="text-xs text-studio-muted">
              Передача исходного кода на GitHub
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
