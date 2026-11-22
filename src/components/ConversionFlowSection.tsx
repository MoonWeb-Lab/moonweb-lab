import React, { useState } from 'react';
import { m, useReducedMotion, type Variants } from 'framer-motion';
import { Smartphone, Clock, Send, RotateCcw, CheckCircle2, Bell } from 'lucide-react';

interface DemoMessage {
  id: number;
  type: 'action' | 'telegram' | 'status';
  time: string;
  badge: string;
  text: string;
  subtext?: string;
}

const DEMO_STEPS: DemoMessage[] = [
  {
    id: 1,
    type: 'action',
    time: '14:28',
    badge: '1. Действие клиента на сайте',
    text: 'Клиент выбрал услугу на сайте: Стрижка + оформление бороды, завтра в 15:00',
    subtext: 'Услуга и удобное время выбраны за 30 секунд без звонков',
  },
  {
    id: 2,
    type: 'telegram',
    time: '14:28',
    badge: '2. Мгновенно в Telegram',
    text: '🔔 Новая заявка за 1 секунду прилетела в Telegram!\nИмя: Алексей Смирнов\nТелефон: +375 (29) 555-12-34\nУслуга: Стрижка + борода (мастер: Дмитрий)\nВремя: Завтра, 15:00',
    subtext: 'Уведомление со всеми деталями приходит прямо на ваш смартфон',
  },
  {
    id: 3,
    type: 'status',
    time: '14:28',
    badge: '3. Запись подтверждена',
    text: 'Запись подтверждена без звонков и долгих переписок в мессенджерах',
    subtext: 'Клиент спокоен, а администратор экономит рабочее время',
  },
];

const MESSAGE_DELAYS = [0.05, 0.55, 1.05];

export const ConversionFlowSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((prev) => prev + 1);
  };

  const cardContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardItemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="how-it-works" className="pt-6 pb-6 sm:pt-7 sm:pb-7 lg:pt-8 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <m.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mb-5 sm:mb-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs text-neutral-300 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Понятная логика</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug mb-2">
          Как посетитель сайта становится вашим&nbsp;клиентом
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl text-pretty">
          Человек переходит со смартфона, сразу видит цены, выбирает услугу и отправляет контакты. Вы получаете готовую заявку в Telegram без лишних звонков и долгих переписок.
        </p>
      </m.div>

      {/* 3 Step Cards Grid */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardContainerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-5 sm:mb-6"
      >
        {/* Step 1 */}
        <m.div
          variants={cardItemVariants}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight">01</span>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Smartphone className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Переход с рекламы, карт или Instagram
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              Потенциальный клиент нажимает на ссылку в профиле или на Яндекс Картах. Страница открывается со смартфона моментально, без долгого ожидания.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-2">
            <div className="flex items-center justify-between text-neutral-400">
              <span>Источник: Яндекс Карты</span>
              <span className="text-emerald-400 font-medium">Загрузка ~1 сек</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-full rounded-full" />
            </div>
            <p className="text-[11px] text-neutral-400">
              Человек не закрывает страницу и сразу видит ваши услуги
            </p>
          </div>
        </m.div>

        {/* Step 2 */}
        <m.div
          variants={cardItemVariants}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">02</span>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Быстрый выбор за 30 секунд
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              Человек сразу видит понятные цены, фотографии, состав блюд или свободные окна мастеров. Ему не нужно звонить или ждать ответа администратора.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-xs space-y-2">
            <div className="flex items-center justify-between text-white font-medium">
              <span>Выбранная услуга</span>
              <span className="text-purple-300">45 BYN</span>
            </div>
            <div className="text-neutral-400 text-[11px]">
              Дата и время: Завтра, 14:00 (Мастер: Дмитрий)
            </div>
            <div className="pt-1 text-[11px] text-emerald-400 font-medium">
              ✓ Заказ подтвержден в один клик
            </div>
          </div>
        </m.div>

        {/* Step 3 */}
        <m.div
          variants={cardItemVariants}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl bg-[#121218] border border-white/10 hover:border-purple-500/30 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] p-5 sm:p-6 flex flex-col justify-between transition-colors duration-200"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">03</span>
              <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                <Send className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Заявки идут туда, куда вам удобно
            </h3>
            
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
              Никаких потерь контактов: настроим получение уведомлений в любой удобный для вас канал: личный Telegram, рабочий чат сотрудников, WhatsApp или CRM.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium">
              Telegram
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium">
              WhatsApp
            </span>
            <span className="px-2.5 py-1 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
              CRM
            </span>
          </div>
        </m.div>
      </m.div>

      {/* Message Demonstration Studio Box */}
      <m.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-[#121218] border border-white/10 p-5 sm:p-6 lg:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-1">
              <Bell className="w-4 h-4 text-purple-400" />
              <span>Наглядный пример связки «Сайт → Telegram»</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Как проходит заявка от клика до подтверждения
            </h3>
          </div>

          <m.button
            type="button"
            onClick={handleReplay}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            aria-label="Запустить анимацию заявки заново"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.08] hover:bg-white/15 active:bg-white/20 border border-white/15 text-xs font-semibold text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Повторить демо заявки</span>
          </m.button>
        </div>

        {/* Message Feed with 0.5s intervals */}
        <div key={replayKey} className="space-y-3 max-w-3xl mx-auto">
          {DEMO_STEPS.map((step, idx) => {
            const isTelegram = step.type === 'telegram';
            const isStatus = step.type === 'status';

            return (
              <m.div
                key={step.id}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : MESSAGE_DELAYS[idx],
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ willChange: 'transform, opacity' }}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-colors ${
                  isTelegram
                    ? 'bg-[#151C2C] border-blue-500/30 ml-2 sm:ml-6 shadow-lg shadow-blue-500/5'
                    : isStatus
                    ? 'bg-[#101F18] border-emerald-500/30'
                    : 'bg-[#161620] border-white/10 mr-2 sm:mr-6'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                      isTelegram
                        ? 'bg-blue-500/20 text-blue-300'
                        : isStatus
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}
                  >
                    {step.badge}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-400">
                    {step.time}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-medium text-white whitespace-pre-line leading-relaxed mb-1">
                  {step.text}
                </div>

                {step.subtext && (
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5 mt-2 pt-2 border-t border-white/[0.06]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{step.subtext}</span>
                  </div>
                )}
              </m.div>
            );
          })}
        </div>

        {/* Studio Box Bottom Reassurance (Clean closure) */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-center text-center">
          <p className="text-xs text-neutral-400">
            Клиент получает удобный выбор со смартфона, а вы получаете готовую заявку в Telegram без телефонных звонков.
          </p>
        </div>
      </m.div>
    </section>
  );
};
