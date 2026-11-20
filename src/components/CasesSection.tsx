import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Smartphone, Monitor, ExternalLink, CheckCircle2, Play, EyeOff, Loader2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  niche: string;
  badge: string;
  problemSolution: string;
  result: string;
  url: string;
  glowColor: string;
  badgeColor: string;
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
    glowColor: 'from-amber-600/15 via-orange-600/5 to-transparent',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
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
    glowColor: 'from-orange-600/15 via-amber-700/5 to-transparent',
    badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
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
    glowColor: 'from-emerald-600/15 via-teal-600/5 to-transparent',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
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
    problemSolution: 'В пиковые часы гости не дозванивались для бронирования столика и уходили к конкурентам. Реализовали форму бронирования на нужную дату и время с удобным просморотом сезонного меню.',
    result: 'Посадка заполняется заранее через сайт, экономя время менеджера зала.',
    url: 'https://moonweb-lab.github.io/botanica-bistro/',
    glowColor: 'from-green-600/15 via-emerald-600/5 to-transparent',
    badgeColor: 'bg-green-500/15 text-green-300 border-green-500/30',
    desktopImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80',
    tags: ['Бронь столов', 'Барная карта', 'Галерея интерьера', 'Telegram-оповещения'],
  },
];

// Memoized Device Frame: Shows crisp static screenshot by default.
// Mounts interactive iframe ONLY when active, maximum 1 iframe page-wide!
const CasePreviewFrame = memo<{
  caseItem: CaseStudy;
  view: 'mobile' | 'desktop';
  isActiveIframe: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}>(({ caseItem, view, isActiveIframe, onActivate, onDeactivate }) => {
  const isMobile = view === 'mobile';
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 580 });
  const [iframeLoaded, setIframeLoaded] = useState(false);

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

  // Scaled dimensions for honest mobile (390px) and desktop (1280px) viewports
  const targetViewportWidth = isMobile ? 390 : 1280;
  const scale = dimensions.width > 0 ? dimensions.width / targetViewportWidth : (isMobile ? 0.76 : 0.45);
  const iframeWidth = targetViewportWidth;
  const iframeHeight = scale > 0 ? dimensions.height / scale : 800;

  return (
    <div className="w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] bg-[#0E0E14] rounded-2xl p-3 sm:p-6 border border-white/[0.06] relative select-none">
      
      {/* Ambient Radial Color Accent matching niche */}
      <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.glowColor} rounded-2xl pointer-events-none z-0`} />

      {/* Frame Container */}
      <div
        className={`relative z-10 transition-all duration-300 flex flex-col overflow-hidden shadow-2xl ${
          isMobile
            ? 'w-[290px] sm:w-[310px] h-[560px] sm:h-[600px] rounded-[36px] bg-[#121217] border-4 border-neutral-700/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
            : 'w-full max-w-[640px] aspect-[16/10] rounded-xl bg-[#141419] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
        }`}
      >
        {/* Frame Top Bar */}
        {!isMobile ? (
          <div className="h-8 bg-[#181820] border-b border-white/[0.08] flex items-center justify-between px-3.5 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-[11px] text-neutral-400 font-mono truncate max-w-[200px]">
                {caseItem.url.replace('https://', '')}
              </span>
            </div>
            {isActiveIframe && (
              <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                Живой сайт активен
              </span>
            )}
          </div>
        ) : (
          <div className="h-6 flex items-center justify-center shrink-0 relative bg-black/60">
            <div className="w-20 h-3.5 bg-black rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-900 border border-white/20" />
            </div>
          </div>
        )}

        {/* Viewport Content */}
        <div
          ref={viewportRef}
          className="relative flex-1 w-full h-full overflow-hidden bg-[#0A0A0E]"
        >
          {isActiveIframe ? (
            /* Active Interactive Iframe (Only one active across whole page) */
            <>
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0D0D12] text-neutral-400 gap-2.5">
                  <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                  <span className="text-xs font-medium">Подключаем сайт проекта...</span>
                </div>
              )}
              <iframe
                src={caseItem.url}
                title={`${caseItem.name} живое демо`}
                onLoad={() => setIframeLoaded(true)}
                style={{
                  width: `${iframeWidth}px`,
                  height: `${iframeHeight}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                }}
                className="absolute top-0 left-0 border-0"
              />
              <button
                onClick={onDeactivate}
                className="absolute bottom-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/90 border border-white/20 text-white text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-xl"
              >
                <EyeOff className="w-3.5 h-3.5 text-neutral-400" />
                <span>Вернуться к превью</span>
              </button>
            </>
          ) : (
            /* Static Crisp Image Preview by Default (Fast, 60 FPS, Zero CLS) */
            <div className="relative w-full h-full group">
              <img
                src={isMobile ? caseItem.mobileImage : caseItem.desktopImage}
                alt={`${caseItem.name} превью`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              {/* Play live preview overlay on hover */}
              <div
                onClick={onActivate}
                className="absolute inset-0 bg-black/40 hover:bg-black/25 cursor-pointer flex flex-col items-center justify-center p-4 transition-colors"
              >
                <div className="px-5 py-2.5 rounded-full bg-black/90 border border-white/20 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                  <span>Включить живой сайт</span>
                </div>
                <span className="text-[11px] text-neutral-300 mt-2 font-medium">
                  Кликните, чтобы листать меню и проверять кнопки
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

CasePreviewFrame.displayName = 'CasePreviewFrame';

export const CasesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Active view per case ID ('mobile' by default for all cases)
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({
    'djezva': 'mobile',
    'blade-timber': 'mobile',
    'lumina': 'mobile',
    'botanica': 'mobile',
  });

  // Maximum ONE active iframe across entire page
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

  const toggleView = (id: string, view: 'desktop' | 'mobile') => {
    setDeviceViews((prev) => ({ ...prev, [id]: view }));
  };

  return (
    <section id="cases" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header (Smooth slide-up entrance) */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14141C] border border-white/10 text-xs text-neutral-300 mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Реальные работы</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          Кейсы и живые демо-сайты
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Каждый проект решает конкретную проблему владельца: убирает рутину со звонками, показывает честные цены и помогает клиенту сделать заказ со смартфона за минуту.
        </p>
      </motion.div>

      {/* Projects List (12 columns: 5 cols info + 7 cols preview) */}
      <div className="space-y-16">
        {CASES_DATA.map((item, index) => {
          const currentView = deviceViews[item.id] || 'mobile';
          const isMobile = currentView === 'mobile';
          const isActiveIframe = activeIframeId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.7,
                delay: shouldReduceMotion ? 0 : (index % 2) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -3, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="rounded-3xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] overflow-hidden p-6 sm:p-8 lg:p-10 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column (5 cols): Context, Problem, Solution */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Meta & Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.badgeColor}`}>
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

                    {/* Problem and Solution Text */}
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

                  {/* Actions: Live Demo & External Link */}
                  <div className="flex flex-wrap items-center gap-3">
                    {!isActiveIframe ? (
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setActiveIframeId(item.id)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm transition-colors shadow-sm"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Включить живой сайт</span>
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setActiveIframeId(null)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white font-medium text-sm transition-colors"
                      >
                        <EyeOff className="w-4 h-4" />
                        <span>Выключить живой сайт</span>
                      </motion.button>
                    )}

                    <motion.a
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      <span>В новой вкладке</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Right Column (7 cols): Large, Clear Preview Frame */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  
                  {/* Device Switcher Controls with Smooth Gliding Indicator */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-[#14141C] border border-white/10 mb-4 self-end relative">
                    <button
                      onClick={() => toggleView(item.id, 'mobile')}
                      className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isMobile
                          ? 'text-black font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {isMobile && (
                        <motion.div
                          layoutId={`activeDeviceTab-${item.id}`}
                          className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Телефон</span>
                    </button>
                    <button
                      onClick={() => toggleView(item.id, 'desktop')}
                      className={`relative z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        !isMobile
                          ? 'text-black font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {!isMobile && (
                        <motion.div
                          layoutId={`activeDeviceTab-${item.id}`}
                          className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Компьютер</span>
                    </button>
                  </div>

                  {/* Frame */}
                  <CasePreviewFrame
                    caseItem={item}
                    view={currentView}
                    isActiveIframe={isActiveIframe}
                    onActivate={() => setActiveIframeId(item.id)}
                    onDeactivate={() => setActiveIframeId(null)}
                  />

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
