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
    <section id="configurator" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white font-semibold">Калькулятор сметы</span>
          <span className="text-studio-subtle">•</span>
          <span className="text-neutral-300">Прозрачный расчёт</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Соберите комплектацию проекта за 1 минуту
        </h2>
        <p className="mt-4 text-neutral-300 text-base leading-relaxed">
          Выберите формат решения, вашу нишу и необходимые модули. Калькулятор сформирует понятную смету и готовое ТЗ для запуска.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Options Chooser (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Format selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-neutral-400 font-semibold">
              Шаг 1. Формат решения
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {FORMATS.map((fmt) => {
                const isSelected = selectedFormat.id === fmt.id;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => {
                      sounds.playToggle();
                      setSelectedFormat(fmt);
                    }}
                    className={`relative p-5 rounded-xl text-left transition-all border ${
                      isSelected
                        ? 'bg-studio-surface border-white text-white shadow-card'
                        : 'bg-[#121215] border-white/[0.08] text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white leading-snug">{fmt.title}</span>
                      <span className="text-xs font-mono font-bold text-emerald-400 shrink-0 ml-2">
                        от ${fmt.basePrice}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{fmt.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Niche selection */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase text-neutral-400 font-semibold">
              Шаг 2. Сфера вашего бизнеса
            </label>
            <div className="flex flex-wrap gap-2.5">
              {NICHES.map((niche) => {
                const isSelected = selectedNiche === niche;
                return (
                  <button
                    key={niche}
                    onClick={() => {
                      sounds.playToggle();
                      setSelectedNiche(niche);
                    }}
                    className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-white text-black shadow-sm'
                        : 'bg-studio-surface border border-white/[0.08] text-neutral-300 hover:text-white hover:border-white/20'
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
            <label className="block text-xs font-mono uppercase text-neutral-400 font-semibold">
              Шаг 3. Дополнительные опции
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                      isChecked
                        ? 'bg-studio-surface border-white/50 text-white'
                        : 'bg-[#121215] border-white/[0.08] text-neutral-300 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-white text-black' : 'border border-white/25'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-semibold text-left text-neutral-200">{addon.name}</span>
                    </div>
                    <span className="font-mono text-neutral-400 text-xs font-medium ml-2">
                      +${addon.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Live Calculation & Brief Card (5 cols) */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-studio-surface border border-white/[0.08] shadow-card space-y-6">
          <div className="pb-5 border-b border-white/[0.08]">
            <span className="text-xs font-mono uppercase text-neutral-400 font-semibold">
              Расчётная смета
            </span>
            <div className="mt-3 flex items-baseline justify-between">
              <div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                  ~${totalPrice}
                </span>
                <span className="text-xs text-neutral-400 ml-2 font-medium">под ключ</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-md border border-emerald-500/20 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>~{totalDays} дней</span>
              </div>
            </div>
          </div>

          {/* Form summary with full visibility */}
          <div className="space-y-3 text-xs text-neutral-300">
            <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
              <span className="text-neutral-400">Формат:</span>
              <span className="text-white font-semibold">{selectedFormat.title}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
              <span className="text-neutral-400">Сфера бизнеса:</span>
              <span className="text-white font-semibold">{selectedNiche}</span>
            </div>
            <div className="flex justify-between items-start py-1.5 border-b border-white/[0.04]">
              <span className="text-neutral-400 shrink-0 mr-2">Опции:</span>
              <span className="text-white font-semibold text-right leading-relaxed">
                {selectedAddons.length > 0
                  ? selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name).join(', ')
                  : 'Без доп. опций'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={telegramShareUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sounds.playClick()}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Отправить ТЗ в Telegram @moonweb_labs</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#0E0E10] border border-white/[0.08] hover:border-white/20 text-neutral-300 hover:text-white text-xs font-semibold transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">ТЗ скопировано в буфер обмена!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Скопировать текст ТЗ</span>
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-center text-neutral-400 leading-relaxed pt-1">
            Смета включает полный адаптив под мобильные, настройку хостинга, SSL-сертификат и 14 дней гарантийной поддержки.
          </p>
        </div>
      </div>
    </section>
  );
};
