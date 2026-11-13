import React from 'react';
import { Sparkles, Send, Instagram, ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#04070F] border-t border-white/10 relative overflow-hidden">
      {/* Background neon ambient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 p-0.5 shadow-neon-cyan">
                <div className="w-full h-full bg-[#080E1C] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white">MoonWeb</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Lab</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Инженерная digital-студия. Проектируем и запускаем премиальные конверсионные сайты, Telegram Mini Apps и CRM-автоматизации для локального бизнеса и брендов.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold transition-all hover:scale-105"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram: @moonweb_labs</span>
              </a>

              <a
                href="https://instagram.com/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@moonweb_labs</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Навигация</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#services" onMouseEnter={() => sounds.playHover()} className="hover:text-sky-300 transition-colors">
                  Услуги & Стек
                </a>
              </li>
              <li>
                <a href="#portfolio" onMouseEnter={() => sounds.playHover()} className="hover:text-sky-300 transition-colors">
                  Живые кейсы
                </a>
              </li>
              <li>
                <a href="#configurator" onMouseEnter={() => sounds.playHover()} className="hover:text-sky-300 transition-colors">
                  Конфигуратор сметы
                </a>
              </li>
              <li>
                <a href="#process" onMouseEnter={() => sounds.playHover()} className="hover:text-sky-300 transition-colors">
                  Этапы работы
                </a>
              </li>
              <li>
                <a href="#reviews" onMouseEnter={() => sounds.playHover()} className="hover:text-sky-300 transition-colors">
                  Отзывы & Гарантии
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Стандарты качества</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>60 FPS GPU-анимации</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>Web Audio API звуковая обратная связь</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>Telegram WebApp SDK 8.0+</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Lighthouse Score: 95–100</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span>Чистый React 18 & TypeScript</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span>© 2026 MoonWeb Lab. Создано с любовью к деталям и технологиям.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all text-xs"
            >
              <span>Наверх</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
