import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Copy, Send, Sparkles, Clock, Calculator, ArrowUpRight } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

interface FormatOption {
  id: string;
  title: string;
  basePrice: number;
  days: number;
  desc: string;
}

const FORMATS: FormatOption[] = [
  {
    id: 'landing',
    title: 'Конверсионный лендинг',
    basePrice: 320,
    days: 4,
    desc: 'Одностраничный сайт с акцентом на онлайн-заявки и мобильную конверсию.'
  },
  {
    id: 'miniapp',
    title: 'Telegram Mini App (TMA)',
    basePrice: 480,
    days: 6,
    desc: 'Приложение внутри Telegram: онлайн-запись, каталог и корзина прямо в мессенджере.'
  },
  {
    id: 'corporate',
    title: 'Многостраничный сайт / Сервис',
    basePrice: 580,
    days: 8,
    desc: 'Сайт компании с каталогом, страницами услуг, блогом и интеграцией CRM.'
  },
  {
    id: 'quiz',
    title: 'Квиз-калькулятор сметы',
    basePrice: 240,
    days: 3,
    desc: 'Пошаговый опросник для расчета стоимости (мебель, авто, ремонт).'
  }
];

const NICHES = [
  'Общепит & Доставка',
  'Бьюти & Барбершопы',
  'Авто & Детейлинг',
  'Мебель & Ремонт',
  'Усадьбы & Отдых',
  'B2B & Услуги'
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

const ADDONS: AddonOption[] = [
  { id: 'tg_bot', name: 'Telegram-бот уведомлений', price: 90, days: 1 },
  { id: 'payment', name: 'Онлайн-оплата / Эквайринг', price: 80, days: 1 },
  { id: 'seo', name: 'SEO-структура + Schema.org', price: 60, days: 1 },
  { id: 'urgent', name: 'Срочный релиз за 72 часа', price: 100, days: -2 }
];

export const ProjectConfigurator: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<FormatOption>(FORMATS[1]);
  const [selectedNiche, setSelectedNiche] = useState<string>(NICHES[1]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['tg_bot']);
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleAddon = (id: string) => {
    sounds.playToggle();
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const found = ADDONS.find((a) => a.id === id);
    return sum + (found ? found.price : 0);
  }, 0);

  const addonsDays = selectedAddons.reduce((sum, id) => {
    const found = ADDONS.find((a) => a.id === id);
    return sum + (found ? found.days : 0);
  }, 0);

  const totalPrice = selectedFormat.basePrice + addonsTotal;
  const totalDays = Math.max(3, selectedFormat.days + addonsDays);

  const briefText = `👋 Здравствуйте, MoonWeb Lab! Хочу заказать проект:

• Формат: ${selectedFormat.title}
• Ниша: ${selectedNiche}
• Дополнительно: ${selectedAddons.length > 0 ? selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).join(', ') : 'Без доп. опций'}
• Примерный бюджет: ~$${totalPrice}
• Ориентировочный срок: ~${totalDays} дней

Хочу обсудить детали и зафиксировать слот.`;

  const handleCopy = () => {
    sounds.playClick();
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const telegramShareUrl = `https://t.me/moonweb_labs?text=${encodeURIComponent(briefText)}`;

  return (
    <section id="configurator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white">Калькулятор проекта</span>
          <span className="text-studio-subtle">•</span>
          <span>Прозрачные цены</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Соберите комплектацию проекта за 1 минуту
        </h2>
        <p className="mt-3 text-studio-muted text-base leading-relaxed">
          Выберите формат, вашу сферу и нужные модули. Калькулятор сформирует понятную смету и готовое ТЗ для запуска.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Options Chooser (8 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Format selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-studio-muted">
              Шаг 1. Формат решения
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FORMATS.map((fmt) => {
                const isSelected = selectedFormat.id === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => {
                      sounds.playToggle();
                      setSelectedFormat(fmt);
                    }}
                    className={`relative p-4 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-studio-surface border-white text-white shadow-card'
                        : 'bg-[#121215] border-white/[0.06] text-studio-muted hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-bold text-white">{fmt.title}</span>
                      <span className="text-xs font-mono font-semibold text-emerald-400">
                        от ${fmt.basePrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-studio-muted leading-relaxed">{fmt.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Niche selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-studio-muted">
              Шаг 2. Сфера вашего бизнеса
            </label>
            <div className="flex flex-wrap gap-2">
              {NICHES.map((niche) => {
                const isSelected = selectedNiche === niche;
                return (
                  <button
                    key={niche}
                    onClick={() => {
                      sounds.playToggle();
                      setSelectedNiche(niche);
                    }}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-white text-black font-semibold'
                        : 'bg-studio-surface border border-white/[0.08] text-studio-muted hover:text-white'
                    }`}
                  >
                    {niche}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-on modules */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-studio-muted">
              Шаг 3. Дополнительные опции
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-xs transition-all ${
                      isChecked
                        ? 'bg-studio-surface border-white/40 text-white'
                        : 'bg-[#121215] border-white/[0.06] text-studio-muted hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-white text-black' : 'border border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-medium text-left">{addon.name}</span>
                    </div>
                    <span className="font-mono text-studio-subtle text-[11px]">
                      +${addon.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Live Calculation & Brief Card (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-studio-surface border border-white/[0.08] shadow-card space-y-6">
          <div className="pb-4 border-b border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase text-studio-subtle">
              Расчётная смета
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <div>
                <span className="text-4xl font-extrabold text-white font-mono tracking-tight">
                  ~${totalPrice}
                </span>
                <span className="text-xs text-studio-muted ml-2">под ключ</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                <Clock className="w-3.5 h-3.5" />
                <span>~{totalDays} дней</span>
              </div>
            </div>
          </div>

          {/* Form summary */}
          <div className="space-y-2 text-xs text-studio-muted">
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>Формат:</span>
              <span className="text-white font-medium">{selectedFormat.title}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>Сфера бизнеса:</span>
              <span className="text-white font-medium">{selectedNiche}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>Дополнительные опции:</span>
              <span className="text-white font-medium text-right max-w-[180px] truncate">
                {selectedAddons.length > 0
                  ? selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).join(', ')
                  : 'Без доп. опций'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <a
              href={telegramShareUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playClick()}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Отправить ТЗ в Telegram @moonweb_labs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#0E0E10] border border-white/[0.08] hover:border-white/20 text-studio-muted hover:text-white text-xs font-medium transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">ТЗ скопировано в буфер!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Скопировать текст ТЗ</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-studio-subtle leading-relaxed">
            Цена включает адаптив, настройку хостинга, SSL-сертификат и 14 дней гарантийной поддержки.
          </p>
        </div>
      </div>
    </section>
  );
};
