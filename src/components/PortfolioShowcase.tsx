import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, TrendingUp, Sparkles, Smartphone, Globe } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

interface CaseStudy {
  id: string;
  title: string;
  category: 'websites' | 'miniapps';
  niche: string;
  outcome: string;
  tag: string;
  url: string;
  isExternal: boolean;
  image: string;
  description: string;
  stack: string[];
}

const CASES: CaseStudy[] = [
  {
    id: 'botanica',
    title: 'Botanica Bistro & Wine Bar',
    category: 'websites',
    niche: 'Ресторанный бизнес • Минск',
    outcome: '+34% броней столов в первый месяц',
    tag: 'Сайт + QR-Меню',
    url: 'https://moonweb-lab.github.io/botanica-bistro/',
    isExternal: true,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80',
    description: 'Интерактивное меню с фильтрацией по аллергенам, бронирование столов без звонков и стильная эстетика живых растений.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Web Audio']
  },
  {
    id: 'blade',
    title: 'Blade & Timber Barbershop',
    category: 'miniapps',
    niche: 'Мужской салон • Могилёв',
    outcome: '0 звонков для записи: клиенты выбирают слот сами',
    tag: 'Telegram Mini App',
    url: 'https://moonweb-lab.github.io/blade-and-timber/',
    isExternal: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&auto=format&fit=crop&q=80',
    description: 'Telegram Mini App для записи на стрижку 24/7. Выбор мастера, слота и каталог премиальной мужской косметики.',
    stack: ['Telegram SDK', 'React 18', 'Web Audio']
  },
  {
    id: 'lumina',
    title: 'Lumina Clinic Aesthetic Medicine',
    category: 'websites',
    niche: 'Эстетическая медицина • Минск',
    outcome: 'Рост доверия и предварительной записи на 42%',
    tag: 'Медицинский портал',
    url: 'https://moonweb-lab.github.io/lumina-clinic/',
    isExternal: true,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
    description: 'Швейцарская эстетика чистоты: карточки врачей с подтвержденным стажем, калькулятор процедур и онлайн-консультация.',
    stack: ['Next.js / React', 'Tailwind', 'Калькулятор сметы']
  },
  {
    id: 'furniture',
    title: 'Студия Лофт-Мебели & Кухонь',
    category: 'websites',
    niche: 'Производство мебели • Минск & РФ',
    outcome: 'Отсекает нецелевые заявки и выдает готовую смету',
    tag: 'Квиз-калькулятор',
    url: '#configurator',
    isExternal: false,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900&auto=format&fit=crop&q=80',
    description: 'Интерактивный 5-шаговый квиз: выбор формы кухни, фасадов и фурнитуры с моментальной передачей комплектации в Telegram замерщику.',
    stack: ['Квиз-движок', 'React', 'Telegram API']
  },
  {
    id: 'leadgen',
    title: 'MoonWeb LeadGen CRM',
    category: 'miniapps',
    niche: 'B2B Автоматизация продаж',
    outcome: '374 целевые организации без сайтов под ключ',
    tag: 'Telegram CRM App',
    url: 'https://moonweb-lab.github.io/moonweb-leadgen/',
    isExternal: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
    description: 'Автономный инструмент с картами, оффер-генератором и Excel-экспортом для холодных коммерческих предложений.',
    stack: ['Telegram Mini App', 'SQLite', 'XLSX Service']
  }
];

export const PortfolioShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'websites' | 'miniapps'>('all');
  const shouldReduceMotion = useReducedMotion();

  const filtered = activeTab === 'all'
    ? CASES
    : CASES.filter((c) => c.category === activeTab);

  return (
    <section id="cases" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
            <span className="font-mono uppercase text-[11px] text-white">Портфолио проектов</span>
            <span className="text-studio-subtle">•</span>
            <span>Живой продакшн</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
            Кейсы, решающие реальные задачи бизнеса
          </h2>
          <p className="mt-3 text-studio-muted text-base leading-relaxed">
            Каждый сайт и Mini App спроектирован под целевое действие: снять нагрузку с менеджера, поднять чек или принести заявки без участия персонала.
          </p>
        </div>

        {/* Tab Filters with layoutId */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-studio-surface border border-white/[0.08] self-start md:self-auto">
          {[
            { id: 'all', label: 'Все проекты' },
            { id: 'websites', label: 'Сайты & Лендинги' },
            { id: 'miniapps', label: 'Telegram Mini Apps' }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playToggle();
                  setActiveTab(tab.id as any);
                }}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isSelected ? 'text-black font-semibold' : 'text-studio-muted hover:text-white'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white rounded-md z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Staggered Grid of Bento Cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.07 * idx,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group rounded-2xl bg-studio-surface border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col justify-between overflow-hidden shadow-card"
            >
              <div>
                {/* Media Container with Image Zoom on Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/[0.06]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle top tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                      {item.tag}
                    </span>
                  </div>

                  {/* Hover Floating Action Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                    <a
                      href={item.url}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noreferrer' : undefined}
                      onClick={() => sounds.playClick()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs shadow-lg hover:bg-neutral-200 transition-all transform translate-y-2 group-hover:translate-y-0"
                    >
                      <span>Открыть живое демо</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-studio-subtle">
                    <span>{item.niche}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-studio-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Outcome Highlight */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0E0E10] border border-white/[0.05] text-xs font-medium text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.outcome}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stack Chips */}
              <div className="px-5 py-3 border-t border-white/[0.05] bg-[#121215] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.stack.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono text-studio-subtle bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.05]"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <a
                  href={item.url}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noreferrer' : undefined}
                  onClick={() => sounds.playClick()}
                  className="text-xs text-white hover:text-neutral-300 font-medium inline-flex items-center gap-1 shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4 text-studio-muted group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
