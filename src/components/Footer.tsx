import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Send, Mail, Copy, Check, MessageSquare } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('vladgaluhin260@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contacts" className="w-full bg-[#08080B] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Main Contact Action Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#12121A] via-[#0E0E14] to-[#161224] border border-purple-500/30 p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-xs text-purple-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Открыты к новым проектам</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Готовы обсудить ваш проект? Напишите нам напрямую.
            </h3>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              Расскажите о вашей задаче: подберём подходящий формат, сориентируем по точным срокам и покажем живые примеры под вашу нишу.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://t.me/MoonWebLeadGenBot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
              >
                <Send className="w-4 h-4 text-purple-600" />
                <span>Написать в Telegram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>vladgaluhin260@gmail.com</span>
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={avatarImg}
                alt="MoonWeb Lab Avatar"
                className="w-9 h-9 rounded-xl object-cover border border-purple-500/30"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white">
                MoonWeb<span className="text-purple-400 ml-0.5">Lab</span>
              </span>
            </div>

            <p className="text-sm text-neutral-300 max-w-md leading-relaxed">
              Разрабатываем быстрые сайты, онлайн-меню, системы онлайн-записи и Telegram-решения для локального бизнеса.
            </p>
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
                  Форматы работы
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
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
                <span>Запуск за 3–7 дней</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Заявки туда, куда вам удобно</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Без ежемесячной абонентской платы</span>
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
