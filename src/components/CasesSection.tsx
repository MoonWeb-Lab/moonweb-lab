import React, { useState } from 'react';
import { Smartphone, Monitor, ExternalLink, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  niche: string;
  badge: string;
  problemSolution: string;
  result: string;
  url: string;
  desktopImage: string;
  mobileImage: string;
  tags: string[];
}

const CASES_DATA: CaseStudy[] = [
  {
    id: 'djezva',
    name: '«Джезва» — Кофейня и Бистро',
    category: 'Общепит и доставка',
    niche: 'Кофейня-бистро с предзаказом и самовывозом',
    badge: 'Онлайн-меню + Самовывоз',
    problemSolution: 'Гости не могли быстро посмотреть меню с телефона и путались в ценах из PDF. Мы сделали быстрое меню с фотографиями, составом блюд и кнопкой моментального предзаказа без комиссии агрегаторов.',
    result: 'Гости выбирают десерты и кофе за 30 секунд прямо по ссылке из Яндекс Карт и Instagram.',
    url: 'https://moonweb-lab.github.io/djezva-grodno/',
    desktopImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
    tags: ['Меню блюд', 'Корзина заказа', 'Интеграция с Telegram', 'Быстрая мобильная версия'],
  },
  {
    id: 'blade-timber',
    name: 'Blade & Timber — Барбершоп',
    category: 'Сфера услуг и бьюти',
    niche: 'Мужская парикмахерская с онлайн-записью',
    badge: 'Онлайн-запись 24/7',
    problemSolution: 'Мастера и администратор тратили рабочее время на переписки в мессенджерах для согласования свободного времени. Внедрили систему выбора мастера, свободных окон и услуг с подтверждением записи.',
    result: 'Клиенты записываются круглосуточно сами, а администратор получает уведомление со всеми деталями.',
    url: 'https://moonweb-lab.github.io/blade-and-timber/',
    desktopImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&auto=format&fit=crop&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=80',
    tags: ['Выбор мастера', 'Календарь слотов', 'Каталог косметики', 'Без телефонных звонков'],
  },
  {
    id: 'lumina',
    name: 'Lumina Clinic — Медицинский центр',
    category: 'Медицина и здоровье',
    niche: 'Клиника эстетической косметологии',
    badge: 'Сайт клиники + Консультации',
    problemSolution: 'Пациентам важно заранее понимать квалификацию врачей, точную стоимость процедур и противопоказания. Сделали прозрачные прайсы, карточки специалистов с опытом работы и форму быстрой записи на первичный приём.',
    result: 'Понятный каталог процедур снял барьер первого визита и увеличил поток записей на консультации.',
    url: 'https://moonweb-lab.github.io/lumina-clinic/',
    desktopImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
    tags: ['Карточки врачей', 'Прайс процедур', 'Запись на консультацию', 'Доверие пациентов'],
  },
  {
    id: 'botanica',
    name: 'Botanica Bistro — Ресторан & Бар',
    category: 'Премиум общепит',
    niche: 'Ресторан с бронированием столов',
    badge: 'Бронирование + Винная карта',
    problemSolution: 'В пиковые часы гости не дозванивались для бронирования столика и уходили к конкурентам. Реализовали форму бронирования на нужную дату и время с удобным просмотром сезонного меню.',
    result: 'Посадка заполняется заранее через сайт, экономя время менеджера зала.',
    url: 'https://moonweb-lab.github.io/botanica-bistro/',
    desktopImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80',
    tags: ['Бронь столов', 'Барная карта', 'Галерея интерьера', 'Telegram-оповещения'],
  },
];

export const CasesSection: React.FC = () => {
  // Device view toggle per case ID
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({
    'djezva': 'desktop',
    'blade-timber': 'mobile',
    'lumina': 'desktop',
    'botanica': 'desktop',
  });

  const toggleView = (id: string, view: 'desktop' | 'mobile') => {
    setDeviceViews((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section id="cases" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Реальные работы</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          Кейсы и живые демо-сайты
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Каждый проект решает конкретную проблему владельца: убирает рутину со звонками, показывает честные цены и помогает клиенту сделать заказ со смартфона за минуту.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {CASES_DATA.map((item, index) => {
          const currentView = deviceViews[item.id] || 'desktop';
          const isMobile = currentView === 'mobile';

          return (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0F0F14] border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Context, Problem, Solution */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Meta & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                        {item.badge}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-neutral-400 mb-6">
                      {item.niche}
                    </p>

                    {/* Problem and Solution Text (Human, direct, 2-3 lines) */}
                    <div className="space-y-3 mb-6 text-sm text-neutral-300 leading-relaxed">
                      <p>
                        <strong className="text-white font-semibold">Задача: </strong>
                        {item.problemSolution}
                      </p>
                      <p className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-neutral-200">
                        <strong className="text-emerald-400 font-semibold">Результат: </strong>
                        {item.result}
                      </p>
                    </div>

                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Open Live Demo */}
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      <span>Открыть демо-сайт</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Interactive Mockup with Phone/Desktop Switcher */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  
                  {/* Device Switcher Controls */}
                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/40 border border-white/10 mb-4 self-end">
                    <button
                      onClick={() => toggleView(item.id, 'desktop')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        !isMobile
                          ? 'bg-white text-black font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Компьютер</span>
                    </button>
                    <button
                      onClick={() => toggleView(item.id, 'mobile')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isMobile
                          ? 'bg-white text-black font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Телефон</span>
                    </button>
                  </div>

                  {/* Mockup Frame Container (Strict aspect-ratio, zero CLS) */}
                  <div className="w-full flex items-center justify-center min-h-[320px] sm:min-h-[420px] bg-black/30 rounded-2xl p-4 sm:p-6 border border-white/[0.06]">
                    {!isMobile ? (
                      /* Desktop Browser Window Mockup */
                      <div className="w-full max-w-[620px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#141419]">
                        {/* Browser Topbar */}
                        <div className="h-7 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-3 gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                          <span className="ml-3 text-[10px] text-neutral-400 font-mono truncate max-w-[200px]">
                            {item.url.replace('https://', '')}
                          </span>
                        </div>
                        {/* Image Frame with Aspect Ratio */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                          <img
                            src={item.desktopImage}
                            alt={`${item.name} десктоп вид`}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Mobile Smartphone Mockup */
                      <div className="w-[240px] sm:w-[270px] aspect-[9/18] rounded-[2.2rem] p-2 bg-[#1C1C24] border-2 border-neutral-700 shadow-2xl flex flex-col">
                        {/* Phone Screen */}
                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-neutral-900 flex flex-col">
                          {/* Dynamic Island / Camera cutout */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-10" />
                          {/* Screen Image */}
                          <img
                            src={item.mobileImage}
                            alt={`${item.name} мобильный вид`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
