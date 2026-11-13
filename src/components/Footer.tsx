import React from 'react';
import { ArrowUp, ArrowUpRight, Send, Instagram } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#09090B] border-t border-white/[0.08] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                MoonWeb<span className="font-normal text-studio-muted ml-1 text-base tracking-normal">Lab</span>
              </span>
            </div>

            <p className="text-sm text-studio-muted max-w-md leading-relaxed">
              Бутиковая digital-студия. Проектируем и запускаем конверсионные веб-сайты, интерактивные Telegram Mini Apps и CRM-автоматизации для локального бизнеса.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://t.me/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-studio-surface border border-white/[0.08] hover:border-white/20 text-xs font-semibold text-white transition-all"
              >
                <Send className="w-3.5 h-3.5 text-neutral-300" />
                <span>Telegram: @moonweb_labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
              </a>

              <a
                href="https://instagram.com/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-studio-surface border border-white/[0.08] hover:border-white/20 text-xs font-semibold text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-neutral-300" />
                <span>@moonweb_labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-studio-muted">
              Навигация
            </h4>
            <ul className="space-y-2 text-xs text-studio-muted">
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Портфолио проектов
                </a>
              </li>
              <li>
                <a href="#flow" className="hover:text-white transition-colors">
                  Интерактивная связка (CRM)
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-white transition-colors">
                  Калькулятор сметы
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Этапы сотрудничества
                </a>
              </li>
              <li>
                <a href="#guarantees" className="hover:text-white transition-colors">
                  Отзывы и гарантии
                </a>
              </li>
            </ul>
          </div>

          {/* Technical Standards */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-studio-muted">
              Стандарты продакшна
            </h4>
            <ul className="space-y-2 text-xs text-studio-muted">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>60 FPS GPU-анимации</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Web Audio API звуковая отдача</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>PageSpeed & Lighthouse 98+</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>Telegram WebApp SDK 8.0+</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span>TypeScript & Чистый React</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-studio-subtle font-mono">
          <div>
            © 2026 MoonWeb Lab. Минск & Дистанционно. Все права защищены.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-studio-surface border border-white/[0.06] hover:border-white/20 text-studio-muted hover:text-white transition-all text-xs"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
