import React from 'react';
import { ArrowUp, ArrowUpRight, Send, Instagram, Mail } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacts" className="w-full bg-[#08080B] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={avatarImg}
                alt="MoonWeb Lab Avatar"
                className="w-8 h-8 rounded-lg object-cover border border-purple-500/30"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              Разрабатываем быстрые сайты, онлайн-меню и системы онлайн-записи для локального бизнеса. Помогаем вашим клиентам легко делать заказы со смартфона.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://t.me/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-purple-400" />
                <span>Telegram: @moonweb_labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href="https://instagram.com/moonweb_labs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 text-xs font-semibold text-white transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@moonweb_labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Разделы сайта
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Кейсы и живые демо
                </a>
              </li>
              <li>
                <a href="#formats" className="hover:text-white transition-colors">
                  Форматы запуска
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="https://t.me/moonweb_labs" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Обсудить задачу в Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* Practical Guarantees for Business */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Принципы работы
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Запуск от 3 до 7 дней без затягивания</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Заявки прямо в Telegram</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Без ежемесячной абонентской платы</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Быстрая загрузка на любом смартфоне</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 MoonWeb Lab. Разработка сайтов и онлайн-систем для бизнеса.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all text-xs"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
