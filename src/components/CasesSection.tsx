import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Play, EyeOff, Loader2 } from 'lucide-react';
import djezvaImg from '../assets/case-djezva.png';
import bladeTimberImg from '../assets/case-blade-timber.png';
import luminaImg from '../assets/case-lumina.png';
import botanicaImg from '../assets/case-botanica.png';

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
    problemSolution: 'Гости путались в мелком PDF-меню с экрана телефона и не могли быстро сориентироваться в ценах. Сделали удобный сайт с блюдами, актуальными ценами и предзаказом на вынос без комиссий агрегаторам.',
    result: 'Гости открывают меню прямо из карт и Instagram, выбирают кофе и десерты за полминуты и забирают заказ без очереди.',
    url: 'https://moonweb-lab.github.io/djezva-grodno/',
    glowColor: 'from-amber-600/15 via-orange-600/5 to-transparent',
    badgeColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    mobileImage: djezvaImg,
    tags: ['Меню блюд', 'Корзина заказа', 'Интеграция с Telegram', 'Быстрая мобильная версия'],
  },
  {
    id: 'blade-timber',
    name: 'Blade & Timber — Барбершоп',
    category: 'Сфера услуг и бьюти',
    niche: 'Мужская парикмахерская с онлайн-записью',
    badge: 'Онлайн-запись 24/7',
    problemSolution: 'Администратор постоянно отвлекался на переписки в мессенджерах, чтобы согласовать свободное время и нужного мастера. Внедрили онлайн-запись: клиент сам видит свободные окна барберов и подтверждает визит.',
    result: 'Клиенты записываются сами круглосуточно. Администратор получает имя, телефон и услугу сразу в Telegram, не тратя время на созвоны.',
    url: 'https://moonweb-lab.github.io/blade-and-timber/',
    glowColor: 'from-orange-600/15 via-amber-700/5 to-transparent',
    badgeColor: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    mobileImage: bladeTimberImg,
    tags: ['Выбор мастера', 'Календарь слотов', 'Каталог косметики', 'Без телефонных звонков'],
  },
  {
    id: 'lumina',
    name: 'Lumina Clinic — Медицинский центр',
    category: 'Медицина и здоровье',
    niche: 'Клиника эстетической косметологии',
    badge: 'Сайт клиники + Консультации',
    problemSolution: 'Пациенты боялись скрытых доплат и хотели заранее понимать опыт врачей и противопоказания. Собрали честный прайс без мелкого шрифта, карточки докторов с опытом работы и быструю форму записи на консультацию.',
    result: 'Пациенты видят квалификацию врачей, точную стоимость услуг и спокойно записываются на приём за пару кликов со смартфона.',
    url: 'https://moonweb-lab.github.io/lumina-clinic/',
    glowColor: 'from-emerald-600/15 via-teal-600/5 to-transparent',
    badgeColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    mobileImage: luminaImg,
    tags: ['Карточки врачей', 'Прайс процедур', 'Запись на консультацию', 'Доверие пациентов'],
  },
  {
    id: 'botanica',
    name: 'Botanica Bistro — Ресторан & Бар',
    category: 'Премиум общепит',
    niche: 'Ресторан с бронированием столов',
    badge: 'Бронирование + Винная карта',
    problemSolution: 'В вечерние часы телефон был занят, и гости уходили в другие рестораны, не дозвонившись для брони столика. Настроили бронирование на нужную дату и время с удобным просмотром сезонного меню и барной карты.',
    result: 'Столы бронируют заранее прямо с телефона, а менеджер зала видит готовые данные гостей без телефонной суеты.',
    url: 'https://moonweb-lab.github.io/botanica-bistro/',
    glowColor: 'from-green-600/15 via-emerald-600/5 to-transparent',
    badgeColor: 'bg-green-500/15 text-green-300 border-green-500/30',
    mobileImage: botanicaImg,
    tags: ['Бронь столов', 'Барная карта', 'Галерея интерьера', 'Telegram-оповещения'],
  },
];

// Memoized Mobile Mockup Frame: Shows crisp actual screenshot by default.
// Mounts interactive iframe ONLY when active, maximum 1 iframe page-wide!
const CasePreviewFrame = memo<{
  caseItem: CaseStudy;
  isActiveIframe: boolean;
  onActivate: () => void;
}>(({ caseItem, isActiveIframe, onActivate }) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 280, height: 550 });
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
  }, []);

  // Standard mobile viewport width (390px)
  const targetViewportWidth = 390;
  const scale = dimensions.width > 0 ? dimensions.width / targetViewportWidth : 0.74;
  const iframeWidth = targetViewportWidth;
  const iframeHeight = scale > 0 ? dimensions.height / scale : 750;

  return (
    <div className="w-full flex items-center justify-center bg-[#0E0E14] rounded-2xl p-4 sm:p-6 border border-white/[0.06] relative select-none overflow-hidden">
      
      {/* Ambient Radial Color Accent matching niche */}
      <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.glowColor} rounded-2xl pointer-events-none z-0`} />

      {/* Realistic Mobile Mockup Frame (Symmetrically sized to avoid overflow) */}
      <div className="relative z-10 w-[270px] sm:w-[290px] h-[540px] sm:h-[580px] rounded-[38px] bg-[#121217] border-[5px] border-neutral-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.12)] flex flex-col overflow-hidden">
        
        {/* Dynamic Island / Speaker notch */}
        <div className="h-6 flex items-center justify-center shrink-0 bg-black relative select-none">
          <div className="w-20 h-3.5 bg-neutral-900 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-black border border-white/20" />
          </div>
        </div>

        {/* Viewport Content */}
        <div
          ref={viewportRef}
          className="relative flex-1 w-full h-full overflow-hidden bg-[#0A0A0E]"
        >
          {isActiveIframe ? (
            /* Active Interactive Iframe (Zero overlay button to keep interface 100% clean) */
            <>
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0D0D12] text-neutral-400 gap-2.5">
                  <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                  <span className="text-xs font-medium">Подключаем сайт...</span>
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
            </>
          ) : (
            /* Static Crisp Image Preview of Actual Mobile Site */
            <div className="relative w-full h-full group">
              <img
                src={caseItem.mobileImage}
                alt={`${caseItem.name} превью`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top select-none"
              />
              {/* Play live preview overlay with pure contrast button (no extra explanatory text) */}
              <div
                onClick={onActivate}
                className="absolute inset-0 bg-black/35 hover:bg-black/20 cursor-pointer flex items-center justify-center transition-colors group"
              >
                <div className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold shadow-2xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-black text-black" />
                  <span>Включить живой сайт</span>
                </div>
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

  // Maximum ONE active iframe across entire page
  const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

  return (
    <section id="cases" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header (Smooth slide-up entrance) */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-12"
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

      {/* Projects List (12 columns: 7 cols info + 5 cols centered phone mockup) */}
      <div className="space-y-10 sm:space-y-12">
        {CASES_DATA.map((item, index) => {
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
              className="rounded-3xl bg-[#121218] border border-white/10 hover:border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] overflow-hidden p-6 lg:p-8 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                
                {/* Left Column (7 cols): Context, Problem, Solution, aligned to bottom */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
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
                    <div className="flex flex-wrap gap-2 mb-6">
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

                  {/* Actions: Live Demo & External Link (Aligns cleanly to bottom of right column) */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto">
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

                {/* Right Column (5 cols): Centered Phone Mockup */}
                <div className="lg:col-span-5 flex items-center justify-center">
                  <CasePreviewFrame
                    caseItem={item}
                    isActiveIframe={isActiveIframe}
                    onActivate={() => setActiveIframeId(item.id)}
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