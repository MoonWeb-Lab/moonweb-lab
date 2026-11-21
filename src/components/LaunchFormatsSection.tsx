import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Clock, ArrowUpRight, Star, Wrench } from 'lucide-react';

interface FormatCard {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  audience: string;
  timeline: string;
  description: string;
  features: string[];
}

const FORMATS: FormatCard[] = [
  {
    id: 'landing',
    name: 'Сайт-визитка или каталог услуг',
    audience: 'Мастера, подрядчики, автосервисы, юристы и небольшие локальные компании',
    timeline: 'От 3 до 5 дней',
    description: 'Компактный и быстрый сайт, где клиент сразу находит прайс, примеры работ и может позвонить или написать в один клик.',
    features: [
      'Понятная структура с описанием услуг и прозрачными ценами',
      'Удобное отображение на всех типах смартфонов',
      'Кнопки быстрой связи (звонок в один тап, Telegram, WhatsApp)',
      'Базовая настройка для поиска и карточка на Яндекс Картах',
    ],
  },
  {
    id: 'ordering-booking',
    name: 'Онлайн-меню или запись 24/7',
    badge: 'Самый частый выбор',
    isPopular: true,
    audience: 'Кофейни, рестораны, бары, барбершопы, салоны красоты и клиники',
    timeline: 'От 5 до 7 дней',
    description: 'Сайт принимает заказы на самовывоз или ведёт запись к специалистам без участия администратора и без комиссий агрегаторов.',
    features: [
      'Каталог блюд с фото и составом или календарь свободных окон мастеров',
      'Корзина заказа с расчётом суммы или бронирование времени',
      'Мгновенные уведомления со всеми деталями прямо в Telegram или WhatsApp',
      'Простое самостоятельное редактирование цен и позиций',
    ],
  },
  {
    id: 'custom',
    name: 'Индивидуальный проект с Telegram-ботом',
    audience: 'Компании со сложным ассортиментом, сетью заведений или нестандартной задачей',
    timeline: 'От 7 до 10 дней',
    description: 'Разработка под специфические процессы бизнеса: несколько филиалов, личный кабинет клиента или связка с Telegram-ботом.',
    features: [
      'Продуманный дизайн под вашу сферу и бренд',
      'Telegram Mini App для удобных повторных заказов постоянных гостей',
      'Интеграция с вашей таблицей заказов, CRM или базой данных',
      'Полная передача файлов и понятная инструкция по управлению',
    ],
  },
];

export const LaunchFormatsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="formats" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-8 sm:mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs text-neutral-300 mb-3.5">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Форматы работы</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-3">
          Форматы разработки под ваши задачи
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          От быстрого сайта-визитки и онлайн-меню до заказных сервисов и Telegram-ботов. Если у вас нестандартная задача: всё обсудим и сделаем в срок.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-10">
        {FORMATS.map((format) => (
          <div
            key={format.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 relative ${
              format.isPopular
                ? 'bg-[#14141F] border-2 border-purple-500/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_0_30px_rgba(168,85,247,0.1)]'
                : 'bg-[#121218] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-white/20'
            }`}
          >
            {/* Popular Badge */}
            {format.isPopular && (
              <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-purple-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{format.badge}</span>
              </div>
            )}

            <div>
              {/* Timeline Pill */}
              <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-3.5">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Срок запуска: </span>
                <strong className="text-white font-semibold">{format.timeline}</strong>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2.5 tracking-tight">
                {format.name}
              </h3>

              {/* For whom */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-300 mb-5">
                <span className="text-neutral-400 block mb-0.5">Для кого:</span>
                <span className="text-white font-medium">{format.audience}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                {format.description}
              </p>

              {/* Included items */}
              <div className="space-y-2.5 pt-3.5 border-t border-white/10 mb-6">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                  Что входит:
                </span>
                {format.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button -> Direct to https://t.me/moonweb_lab */}
            <div>
              <a
                href="https://t.me/moonweb_lab"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#121218] active:scale-[0.98] transition-all shadow-sm ${
                  format.isPopular
                    ? 'bg-white text-black hover:bg-neutral-200 active:bg-neutral-300'
                    : 'bg-white/[0.08] text-white hover:bg-white/15 active:bg-white/20 border border-white/10'
                }`}
              >
                <span>Выбрать этот формат</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Universal Flexibility Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-900/20 via-[#121218] to-blue-900/20 border border-purple-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300">
            <Wrench className="w-4 h-4" />
            <span>Любая нестандартная задача</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Нужно доработать текущий сайт или внедрить автоматизацию?
          </h4>
          <p className="text-sm text-neutral-300 max-w-2xl leading-relaxed">
            Берёмся за задачи любой сложности: ускорение страниц, редизайн, онлайн-оплата, базы данных, перенос на быстрый хостинг или Telegram Mini Apps.
          </p>
        </div>

        <a
          href="https://t.me/moonweb_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold text-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#121218] active:scale-[0.98] transition-all shadow-lg shadow-purple-600/20 flex items-center gap-2"
        >
          <span>Обсудить задачу</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
