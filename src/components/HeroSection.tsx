import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';
import { sounds } from '../audio/soundEngine';
import { TiltCard } from './TiltCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-violet-500/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs text-sky-300 shadow-neon-cyan">
          <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-semibold tracking-wide uppercase text-[11px]">Digital Production 2026</span>
          <span className="w-1 h-1 rounded-full bg-sky-400" />
          <span className="text-slate-300">Сайты • Mini Apps • CRM</span>
        </div>

        {/* Hero Headline with Gradient Text */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
          Создаём сайты и{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
            Telegram Mini Apps
          </span>
          , которые приносят продажи
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Превращаем ваш бизнес в дорогой, технологичный бренд. Чистый код, 3D-микроинтеракции, загрузка за 0.4 секунды и прямая связка с Telegram.
        </p>

        {/* CTA Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <a
            href="#configurator"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-neon-cyan transition-all transform hover:-translate-y-0.5"
          >
            <span>Рассчитать стоимость проекта</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#portfolio"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all"
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Смотреть живые кейсы</span>
          </a>
        </div>

        {/* Trust & Metric Pills */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
              <Zap className="w-3.5 h-3.5" />
              <span>0.3–0.5 сек</span>
            </div>
            <p className="text-[11px] text-slate-400">Скорость загрузки (PageSpeed 95+)</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>От 4 до 7 дней</span>
            </div>
            <p className="text-[11px] text-slate-400">Реальный запуск под ключ</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D & Web Audio</span>
            </div>
            <p className="text-[11px] text-slate-400">Тактильные микро-интеракции</p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 space-y-1">
            <div className="flex items-center gap-1.5 text-violet-400 text-xs font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% адаптив</span>
            </div>
            <p className="text-[11px] text-slate-400">Смартфоны, планшеты, десктоп</p>
          </div>
        </div>
      </div>
    </section>
  );
};
