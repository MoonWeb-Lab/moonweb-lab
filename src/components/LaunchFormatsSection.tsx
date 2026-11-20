import React from 'react';
import { Check, Clock, ArrowUpRight, Zap, Star } from 'lucide-react';

interface FormatCard {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  audience: string;
  timeline: string;
  description: string;
  features: string[];
  ctaUrl: string;
}

const FORMATS: FormatCard[] = [
  {
    id: 'landing',
    name: 'Сайт-визитка или каталог услуг',
    audience: 'Мастера, подрядчики, автосервисы, юристы и небольшие локальные компании',
    timeline: '3–5 дней',
    description: 'Компактный и быстрый сайт, где клиент сразу находит прайс, примеры работ и может позвонить или написать в один клик.',
    features: [
      'Понятная структура с описанием услуг и прозрачными ценами',
      'Идеальное отображение на всех типах смартфонов',
      'Кнопки быстрой связи (звонок в один тап, Telegram, WhatsApp)',
      'Базовая настройка для поиска и карточка на Яндекс Картах',
    ],
    ctaUrl: 'https://t.me/moonweb_labs?text=Здравствуйте!%20Хочу%20обсудить%20формат%20Сайт-визитка',
  },
  {
    id: 'ordering-booking',
    name: 'Онлайн-меню или запись 24/7',
    badge: 'Самый частый выбор',
    isPopular: true,
    audience: 'Кофейни, рестораны, бары, барбершопы, салоны красоты и клиники',
    timeline: '5–7 дней',
    description: 'Сайт принимает заказы на самовывоз или ведёт запись к специалистам без участия администратора и без комиссий агрегаторов.',
    features: [
      'Каталог блюд с фото и составом или календарь свободных окон мастеров',
      'Корзина заказа с расчётом суммы или бронирование времени',
      'Мгновенные уведомления со всеми деталями прямо в Telegram',
      'Простое самостоятельное редактирование цен и позиций',
    ],
    ctaUrl: 'https://t.me/moonweb_labs?text=Здравствуйте!%20Хочу%20обсудить%20формат%20Онлайн-меню%20или%20запись',
  },
  {
    id: 'custom',
    name: 'Индивидуальный проект под ключ',
    audience: 'Компании со сложным ассортиментом, сетью заведений или нестандартной задачей',
    timeline: 'от 7–10 дней',
    description: 'Разработка под специфические процессы бизнеса: несколько филиалов, личный кабинет клиента или связка с Telegram-ботом.',
    features: [
      'Уникальный дизайн под ваш фирменный стиль и брендинг',
      'Telegram Mini App для удобных повторных заказов постоянных гостей',
      'Интеграция с вашей таблицей заказов, CRM или базой данных',
      'Полная передача файлов и инструкция по управлению',
    ],
    ctaUrl: 'https://t.me/moonweb_labs?text=Здравствуйте!%20Хочу%20обсудить%20Индивидуальный%20проект',
  },
];

export const LaunchFormatsSection: React.FC = () => {
  return (
    <section id="formats" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Форматы работы</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          Понятные форматы под ваши задачи
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Фиксированные сроки, отсутствие скрытых платежей и чёткий список того, что входит в работу.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {FORMATS.map((format) => {
          return (
            <div
              key={format.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                format.isPopular
                  ? 'bg-[#12121A] border-2 border-purple-500/50 shadow-[0_0_40px_rgba(168,85,247,0.12)]'
                  : 'bg-[#0F0F14] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {format.isPopular && (
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{format.badge}</span>
                </div>
              )}

              <div>
                {/* Timeline Pill */}
                <div className="flex items-center gap-2 text-xs font-medium text-neutral-400 mb-4">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Срок запуска: </span>
                  <strong className="text-white font-semibold">{format.timeline}</strong>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {format.name}
                </h3>

                {/* For whom */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-300 mb-6">
                  <span className="text-neutral-400 block mb-0.5">Для кого:</span>
                  <span className="text-white font-medium">{format.audience}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {format.description}
                </p>

                {/* Included items */}
                <div className="space-y-3 pt-4 border-t border-white/10 mb-8">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2">
                    Что входит:
                  </span>
                  {format.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={format.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                    format.isPopular
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-white/[0.08] text-white hover:bg-white/15 border border-white/10'
                  }`}
                >
                  <span>Обсудить этот формат</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
