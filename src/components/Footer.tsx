import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Send, Instagram } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const Footer: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const INSTAGRAM_URL =
    'https://www.instagram.com/moonweb_labs?dlrf=MTFzdWh1cWlhMHRmYQ%3D%3D&utm_source=qr';

  return (
    <footer id="contacts" className="w-full bg-[#08080B] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Main Contact Action Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-[#121218] border border-purple-500/30 p-8 sm:p-12 mb-12 sm:mb-16 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_40px_rgba(168,85,247,0.08)] relative overflow-hidden"
        >
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-purple-500/30 text-xs text-purple-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Открыты к новым проектам</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Готовы обсудить ваш проект? Напишите нам напрямую.
            </h3>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Расскажите о вашей задаче в Telegram или Instagram: подберём формат решения, сориентируем по срокам и стоимости.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                href="https://t.me/moonweb_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 active:bg-neutral-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#121218] active:scale-[0.98] transition-all shadow-lg shadow-white/5"
              >
                <Send className="w-4 h-4 text-purple-600" />
                <span>Написать в Telegram (@moonweb_lab)</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#181824] border border-white/10 hover:bg-[#20202E] active:bg-[#28283A] text-white font-medium text-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#121218] active:scale-[0.98] transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: @moonweb_labs</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={avatarImg}
                alt="Логотип MoonWeb Lab"
                width="36"
                height="36"
                loading="lazy"
                className="w-9 h-9 rounded-xl object-cover border border-purple-500/30"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              Разрабатываем быстрые сайты, онлайн-меню, системы онлайн-записи и Telegram-решения для локального бизнеса.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                href="https://t.me/moonweb_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14141C] border border-white/10 hover:border-white/20 active:bg-white/10 text-xs font-semibold text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080B] active:scale-[0.98] transition-all shadow-sm"
              >
                <Send className="w-3.5 h-3.5 text-purple-400" />
                <span>Telegram: @moonweb_lab</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14141C] border border-white/10 hover:border-white/20 active:bg-white/10 text-xs font-semibold text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080B] active:scale-[0.98] transition-all shadow-sm"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram: @moonweb_labs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Разделы сайта
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a href="#cases" className="hover:text-white rounded-md focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-colors">
                  Кейсы и живые демо
                </a>
              </li>
              <li>
                <a href="#formats" className="hover:text-white rounded-md focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-colors">
                  Форматы работы
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white rounded-md focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none transition-colors">
                  Как это работает
                </a>
              </li>
            </ul>
          </div>

          {/* Principles */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Принципы работы
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Запуск от 3 до 7 дней</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Заявки прямо в Telegram</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Без абонентской платы</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Быстрая загрузка на смартфонах</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 MoonWeb Lab. Разработка сайтов и онлайн-систем для бизнеса.
          </div>

          <motion.button
            type="button"
            aria-label="Вернуться к началу страницы"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14141C] border border-white/10 hover:border-white/20 active:bg-white/10 text-neutral-300 hover:text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080B] active:scale-95 transition-all text-xs cursor-pointer"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
