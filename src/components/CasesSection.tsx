import React, { useState, useRef, useEffect } from 'react';
import { Smartphone, Monitor, ExternalLink, CheckCircle2, Eye, EyeOff, Loader2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  niche: string;
  badge: string;
  problemSolution: string;
  result: string;
  url: string;
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
    tags: ['Бронь столов', 'Барная карта', 'Галерея интерьера', 'Telegram-оповещения'],
  },
];

// Subcomponent: Live Interactive Iframe Device Preview
const LiveCasePreview: React.FC<{
  url: string;
  name: string;
  view: 'mobile' | 'desktop';
}> = ({ url, name, view }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [shouldMount, setShouldMount] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 580 });

  const isMobile = view === 'mobile';

  // 1. Lazy load with IntersectionObserver (triggerOnce, 200px rootMargin)
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 2. Measure actual inner container width and height with ResizeObserver
  useEffect(() => {
    if (!viewportRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    });
    observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [view]);

  // 3. Compute scale and iframe viewport dimensions
  // Mobile mode renders an authentic 390px mobile viewport scaled into container
  // Desktop mode renders an authentic 1280px desktop viewport scaled into container
  const targetViewportWidth = isMobile ? 390 : 1280;
  const scale = dimensions.width > 0 ? dimensions.width / targetViewportWidth : (isMobile ? 0.76 : 0.45);
  const iframeWidth = targetViewportWidth;
  const iframeHeight = scale > 0 ? dimensions.height / scale : 800;

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setIsInteracting(false)}
      className="w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] bg-black/40 rounded-3xl p-3 sm:p-6 border border-white/[0.06] relative select-none"
    >
      {/* Dynamic Frame: Changes styling smoothly between Mobile and Desktop WITHOUT recreating the iframe */}
      <div
        className={`transition-all duration-300 relative flex flex-col overflow-hidden shadow-2xl ${
          isMobile
            ? 'w-[290px] sm:w-[310px] h-[580px] sm:h-[620px] rounded-[36px] bg-[#121217] border-4 border-neutral-700/80'
            : 'w-full max-w-[640px] aspect-[16/10] rounded-2xl bg-[#141419] border border-white/15'
        }`}
      >
        {/* Top Header: Browser Topbar (Desktop) or Speaker/Dynamic Island (Mobile) */}
        {!isMobile ? (
          <div className="h-8 bg-white/[0.05] border-b border-white/[0.08] flex items-center px-3.5 gap-2 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-[11px] text-neutral-400 hover:text-white font-mono truncate max-w-[240px] flex items-center gap-1"
            >
              <span>{url.replace('https://', '')}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        ) : (
          <div className="h-6 flex items-center justify-center shrink-0 relative bg-black/50">
            {/* Dynamic Island / Speaker cutout */}
            <div className="w-20 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900 border border-white/20" />
            </div>
          </div>
        )}

        {/* Inner Viewport Area */}
        <div
          ref={viewportRef}
          className="relative flex-1 w-full h-full overflow-hidden bg-[#0A0A0E]"
        >
          {/* Skeleton Shimmer while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0D0D12] text-neutral-400 gap-3">
              <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
              <span className="text-xs font-medium">Загружаем живой сайт...</span>
            </div>
          )}

          {/* Real Interactive Iframe (Scaled via GPU transform) */}
          {shouldMount && (
            <iframe
              src={url}
              title={`${name} живое демо`}
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
              style={{
                width: `${iframeWidth}px`,
                height: `${iframeHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
                pointerEvents: isInteracting ? 'auto' : 'none',
              }}
              className={`absolute top-0 left-0 border-0 transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Scroll Interception Shield (Prevents page scroll trapping) */}
          {!isInteracting ? (
            <div
              onClick={() => setIsInteracting(true)}
              className="absolute inset-0 z-20 cursor-pointer flex flex-col items-center justify-end p-4 bg-transparent hover:bg-black/20 transition-colors group"
            >
              <div className="px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                <Eye className="w-3.5 h-3.5 text-purple-400" />
                <span>Нажмите, чтобы полистать сайт</span>
              </div>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsInteracting(false);
              }}
              className="absolute bottom-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-xl"
            >
              <EyeOff className="w-3.5 h-3.5 text-neutral-400" />
              <span>Завершить просмотр</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const CasesSection: React.FC = () => {
  // All cases have 'mobile' active by default as requested!
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({
    'djezva': 'mobile',
    'blade-timber': 'mobile',
    'lumina': 'mobile',
    'botanica': 'mobile',
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
          <span>Живые проекты</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          Кейсы и живые демо-сайты
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Внутри каждого экрана работает настоящий интерактивный сайт. Вы можете полистать меню, выбрать услугу со смартфона или переключиться на вид для компьютера.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {CASES_DATA.map((item) => {
          const currentView = deviceViews[item.id] || 'mobile';
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

                  {/* Actions: Open Live Demo in New Tab */}
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      <span>Открыть сайт в новой вкладке</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Live Interactive Device Preview */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  
                  {/* Device Switcher Controls */}
                  <div className="flex items-center gap-2 p-1.5 rounded-xl bg-black/50 border border-white/10 mb-4 self-end">
                    <button
                      onClick={() => toggleView(item.id, 'mobile')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isMobile
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Телефон</span>
                    </button>
                    <button
                      onClick={() => toggleView(item.id, 'desktop')}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        !isMobile
                          ? 'bg-white text-black font-semibold shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Компьютер</span>
                    </button>
                  </div>

                  {/* Real Interactive Iframe Mockup Container */}
                  <LiveCasePreview
                    url={item.url}
                    name={item.name}
                    view={currentView}
                  />

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
