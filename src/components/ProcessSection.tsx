import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight, Compass, Palette, Code2, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Анализ & Смысловой прототип',
      timeframe: '1–2 дня',
      icon: Compass,
      desc: 'Изучаем ваши сильные стороны, средний чек и сценарий клиента (CJM). Формируем оффер без воды и клише.',
      deliverables: ['Карта пользовательских сценариев', 'Смысловой прототип первого экрана', 'Тексты без абстракций']
    },
    {
      number: '02',
      title: 'UI/UX Дизайн & Микроанимации',
      timeframe: '2–3 дня',
      icon: Palette,
      desc: 'Создаём выверенный визуальный стиль: плотный темный матовый режим, чистая типографика и адаптив под мобильные.',
      deliverables: ['Дизайн-макет в 60 FPS', 'Микро-интеракции и тактильный отклик', 'Полный мобильный адаптив']
    },
    {
      number: '03',
      title: 'Разработка & Интеграции',
      timeframe: '2–4 дня',
      icon: Code2,
      desc: 'Пишем чистый код на React 18 / TypeScript. Подключаем Telegram Bot API, онлайн-оплату и звуковой движок Web Audio.',
      deliverables: ['Мгновенная загрузка за 0.4 сек', 'Telegram Bot с пуш-уведомлениями', 'Интеграция CRM / Эквайринга']
    },
    {
      number: '04',
      title: 'Тесты, Релиз & Передача прав',
      timeframe: '1–2 дня',
      icon: Rocket,
      desc: 'Финальный аудит PageSpeed 95+, привязка домена, SSL и полная передача репозитория GitHub в вашу собственность.',
      deliverables: ['100% передача исходного кода', 'Видеоинструкция для администратора', '14 дней гарантийной поддержки']
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white">Пайплайн работы</span>
          <span className="text-studio-subtle">•</span>
          <span>Без затягивания</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Как мы ведём проект: 4 понятных шага
        </h2>
        <p className="mt-3 text-studio-muted text-base leading-relaxed">
          Вы наблюдаете за каждым этапом на тестовом стенде. Никаких «мы пропали на месяц» — статус каждые 24 часа.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.08 * idx,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="p-6 rounded-2xl bg-studio-surface border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col justify-between shadow-card"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-studio-subtle">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#0E0E10] border border-white/[0.08] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5 text-neutral-300" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Срок: {step.timeframe}</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-studio-muted leading-relaxed">
                  {step.desc}
                </p>

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-studio-subtle">
                    Результат:
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-studio-subtle">
                <span>Шаг {idx + 1} из 4</span>
                <ArrowRight className="w-3.5 h-3.5 text-studio-muted" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
