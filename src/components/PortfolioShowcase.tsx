import React, { useState } from 'react';
import { ExternalLink, Sparkles, Smartphone, Globe, Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { sounds } from '../audio/soundEngine';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'sites' | 'miniapps';
  categoryLabel: string;
  description: string;
  tags: string[];
  metrics: string;
  liveUrl: string;
  gradient: string;
}

const PROJECTS: PortfolioItem[] = [
  {
    id: 'leadgen',
    title: 'MoonWeb LeadGen • Telegram Mini App',
    category: 'miniapps',
    categoryLabel: 'Telegram Mini App & CRM',
    description: 'Интерактивная система лидогенерации бизнеса без сайтов по 22 городам Беларуси и России. Встроенная CRM, автогенератор коммерческих офферов и экспорт в Excel.',
    tags: ['Telegram Mini App', 'React 18', 'Tailwind', 'LeadGen', 'CRM'],
    metrics: '370+ лидов • 0.3s отклик',
    liveUrl: 'https://moonweb-lab.github.io/moonweb-leadgen/',
    gradient: 'from-sky-500/20 via-indigo-500/10 to-emerald-500/10'
  },
  {
    id: 'botanica',
    title: 'Botanica Bistro • Ресторан & Бистро',
    category: 'sites',
    categoryLabel: 'HoReCa & Гастрономия',
    description: 'Премиальный сайт заведения европейской кухни: интерактивное QR-меню со смартфона, система бронирования столиков и фильтрация блюд по аллергенам.',
    tags: ['Рестораны', 'QR-меню', 'Онлайн-бронь', 'Aesthetic UI'],
    metrics: 'PageSpeed 99 • Конверсия +34%',
    liveUrl: 'https://moonweb-lab.github.io/botanica-bistro/',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-amber-500/10'
  },
  {
    id: 'blade_timber',
    title: 'Blade & Timber • Барбершоп & Мужской клуб',
    category: 'sites',
    categoryLabel: 'Бьюти & Сфера услуг',
    description: 'Атмосферный тёмный сайт барбершопа: прозрачный прайс по категориям, портфолио мастеров и быстрая онлайн-запись в 2 клика без переписок в директе.',
    tags: ['Барбершоп', 'Тёмная тема', 'Онлайн-запись', '3D карточки'],
    metrics: 'Запись 24/7 • 0 потерянных лидов',
    liveUrl: 'https://moonweb-lab.github.io/blade-and-timber/',
    gradient: 'from-amber-600/20 via-orange-500/10 to-stone-700/20'
  },
  {
    id: 'lumina',
    title: 'Lumina Clinic • Клиника эстетической медицины',
    category: 'sites',
    categoryLabel: 'Медицина & Косметология',
    description: 'Строгий, вызывающий доверие сайт медицинской клиники: направления процедур, карточки врачей с подтвержденным стажем и форма предварительной консультации.',
    tags: ['Медицина', 'Стоматология', 'Запись на прием', 'Доверие'],
    metrics: 'Чистый UI • Стандарты Минздрава',
    liveUrl: 'https://moonweb-lab.github.io/lumina-clinic/',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/10'
  },
  {
    id: 'smazhenka',
    title: 'Смаженка Могилев • Стритфуд бренд',
    category: 'sites',
    categoryLabel: 'Локальный фуд-бренд',
    description: 'Яркий, сочный лендинг популярного регионального гастрономического бренда с предзаказом выпечки и интерактивной картой точек обслуживания.',
    tags: ['Стритфуд', 'Каталог', 'Карта локаций', 'Высокий трафик'],
    metrics: 'Запуск за 4 дня • 100% мобильный',
    liveUrl: 'https://moonweb-lab.github.io/smazhenka-mogilev/',
    gradient: 'from-rose-500/20 via-amber-500/10 to-red-500/10'
  },
  {
    id: 'tracker',
    title: 'Work Shift Tracker • TMA Сервис смен',
    category: 'miniapps',
    categoryLabel: 'Telegram Mini App Tool',
    description: 'Удобное приложение внутри Telegram для учета рабочих графиков, смен, подсчета почасовой оплаты и расчета месячного дохода сотрудников.',
    tags: ['Telegram Mini App', 'Календарь', 'Калькулятор дохода'],
    metrics: 'Работает в Telegram • Быстрый расчет',
    liveUrl: 'https://moonweb-lab.github.io/work-shift-tracker/',
    gradient: 'from-violet-500/20 via-indigo-500/10 to-sky-500/10'
  }
];

export const PortfolioShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sites' | 'miniapps'>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Портфолио MoonWeb Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Живые проекты в проде
          </h2>
          <p className="text-sm text-slate-400 max-w-lg">
            Каждый сайт оптимизирован под смартфоны, скомпилирован на современный стек и открывается моментально.
          </p>
        </div>

        {/* Category filter buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => {
              setFilter('all');
              sounds.playClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Все кейсы ({PROJECTS.length})
          </button>
          <button
            onClick={() => {
              setFilter('sites');
              sounds.playClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'sites'
                ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Сайты</span>
          </button>
          <button
            onClick={() => {
              setFilter('miniapps');
              sounds.playClick();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'miniapps'
                ? 'bg-sky-500 text-slate-950 shadow-sm shadow-sky-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Telegram Mini Apps</span>
          </button>
        </div>
      </div>

      {/* Projects Grid with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((item) => (
          <TiltCard
            key={item.id}
            glowColor="rgba(56, 189, 248, 0.3)"
            className="flex flex-col justify-between p-6 sm:p-7 group"
          >
            <div className="space-y-4">
              {/* Category & Metric Pill */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                  {item.categoryLabel}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                  {item.metrics}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Live Link Button */}
            <div className="pt-6 border-t border-white/5 mt-6">
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-sky-500 hover:text-slate-950 text-slate-200 text-xs font-bold border border-slate-700/70 transition-all group-hover:border-sky-500/40"
              >
                <span>Открыть живой сайт</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
