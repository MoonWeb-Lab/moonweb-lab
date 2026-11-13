import React from 'react';
import { Compass, Palette, Code2, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { sounds } from '../audio/soundEngine';
import { TiltCard } from './TiltCard';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Анализ & Архитектура смыслов',
      timeframe: '1–2 дня',
      icon: Compass,
      color: 'from-sky-500 to-cyan-400',
      description:
        'Изучаем ваш продукт, сильные стороны и конкурентов. Формируем логику первого экрана и путь клиента (CJM) к целевому действию.',
      deliverables: [
        'Позиционирование оффера без воды',
        'Интерактивная карта сценариев (User Flow)',
        'Смысловой прототип с готовыми текстами'
      ]
    },
    {
      number: '02',
      title: 'High-End UI/UX & Анимации',
      timeframe: '2–4 дня',
      icon: Palette,
      color: 'from-indigo-500 to-purple-400',
      description:
        'Создаём премиальную эстетику: глубокий темный режим, неоновые акценты, 3D-карточки, кастомную типографику и физику скролла.',
      deliverables: [
        'Дизайн-система (токены, сетка, компоненты)',
        '3D микроинтеракции и эффекты курсора',
        'Адаптив под мобильные устройства и десктоп'
      ]
    },
    {
      number: '03',
      title: 'Разработка & Web Audio',
      timeframe: '3–5 дней',
      icon: Code2,
      color: 'from-cyan-400 to-emerald-400',
      description:
        'Пишем чистый, отказоустойчивый код на React 18 / TypeScript / Tailwind. Подключаем физику звука через Web Audio API и Telegram Mini App SDK.',
      deliverables: [
        'Мгновенный отклик 60 FPS на любых экранах',
        'Интерактивный синтезатор звуковых эффектов',
        'Интеграция с Telegram Bot API и CRM'
      ]
    },
    {
      number: '04',
      title: 'QA-тесты, Релиз & Обучение',
      timeframe: '1–2 дня',
      icon: Rocket,
      color: 'from-emerald-400 to-teal-300',
      description:
        'Финальный стресс-тест скорости загрузки (Lighthouse 95+), деплой на быстрый CDN / GitHub Pages и передача исходного кода клиенту.',
      deliverables: [
        'Бесплатный SSL-сертификат и подключение домена',
        'Видеоинструкция по управлению заявками',
        '14 дней гарантийной поддержки'
      ]
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold tracking-wider uppercase">
          Прозрачность на 100%
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Как мы создаём проект:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
            от идеи до первых продаж
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Никакой бюрократии и затянутых сроков. Вы в реальном времени наблюдаете за каждым этапом на тестовом стенде.
        </p>
      </div>

      {/* Grid of 4 steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <TiltCard
              key={step.number}
              className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-sky-500/40 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                {/* Header: step number & icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black font-mono tracking-tighter text-slate-700 group-hover:text-sky-400/40 transition-colors">
                    {step.number}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${step.color} p-0.5 shadow-md`}
                  >
                    <div className="w-full h-full bg-[#0B1222] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-sky-300 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>Срок: {step.timeframe}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables checklist */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    Что вы получаете:
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress marker */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Шаг {idx + 1} из 4</span>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};
