import React, { useState, useMemo } from 'react';
import { Send, Copy, Check, Sparkles, Calculator, Layers, Flame, Clock } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  days: string;
  desc: string;
}

const SERVICES: ServiceOption[] = [
  { id: 'landing', name: 'Промо-лендинг под ключ', basePrice: 320, days: '4–6 дней', desc: 'Высокая конверсия, анимации, адаптив' },
  { id: 'miniapp', name: 'Telegram Mini App (TMA)', basePrice: 480, days: '5–8 дней', desc: 'Встроенное приложение прямо в Telegram' },
  { id: 'corporate', name: 'Корпоративный сайт / Сервис', basePrice: 580, days: '7–12 дней', desc: 'Многостраничный каталог с базой данных' },
  { id: 'quiz', name: 'Квиз-калькулятор сметы', basePrice: 240, days: '3–5 дней', desc: 'Лидогенератор с расчетом цены за 1 мин' }
];

const NICHES = [
  { id: 'horeca', name: '☕ Общепит / Рестораны', hook: 'QR-меню и бронь столиков' },
  { id: 'beauty', name: '💅 Бьюти & Барбершопы', hook: 'Онлайн-запись и прайс' },
  { id: 'auto', name: '🚗 Авто & Детейлинг', hook: 'Калькулятор и слайдер До/После' },
  { id: 'furniture', name: '🔨 Мебель & Ремонт', hook: 'Квиз-расчет стоимости' },
  { id: 'tourism', name: '🌲 Усадьбы & Бани', hook: 'Календарь свободных дат' },
  { id: 'services', name: '✨ Локальные услуги & B2B', hook: 'Презентация и кейсы' }
];

const ADDONS = [
  { id: 'tg_bot', name: 'Интеграция с Telegram-ботом', price: 90, desc: 'Заявки падают сразу в рабочий чат' },
  { id: 'payments', name: 'Онлайн-оплата / Эквайринг', price: 80, desc: 'Прием платежей картами / ЕРИП' },
  { id: 'seo', name: 'SEO-оптимизация и мета-теги', price: 60, desc: 'Попадание в Яндекс и Google' },
  { id: 'express', name: 'Срочный запуск за 72 часа', price: 100, desc: 'Приоритет в очереди разработки' }
];

export const ProjectConfigurator: React.FC = () => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0].name);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['tg_bot']);
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  const toggleAddon = (id: string) => {
    sounds.playClick();
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const currentServiceObj = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  // Dynamic budget calculation
  const totalBudget = useMemo(() => {
    let sum = currentServiceObj.basePrice;
    for (const addonId of selectedAddons) {
      const a = ADDONS.find(x => x.id === addonId);
      if (a) sum += a.price;
    }
    return sum;
  }, [currentServiceObj, selectedAddons]);

  // Dynamic Telegram Brief text
  const generatedBrief = useMemo(() => {
    const addonsNames = selectedAddons
      .map(id => ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    return `👋 Привет, MoonWeb Lab! Хочу запустить проект:
📌 Формат: ${currentServiceObj.name}
🏢 Направление: ${selectedNiche}
${businessName.trim() ? `🏷 Компания: «${businessName.trim()}»\n` : ''}⚙️ Дополнительно: ${addonsNames || 'Без доп. опций'}
⏱ Срок: ${currentServiceObj.days}
💰 Ориентировочный бюджет: ~$${totalBudget}
${notes.trim() ? `💬 Пожелания: ${notes.trim()}\n` : ''}
Подскажите, когда сможем обсудить детали и запустить работу?`;
  }, [currentServiceObj, selectedNiche, businessName, selectedAddons, totalBudget, notes]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBrief).then(() => {
      setCopied(true);
      sounds.playSuccess();
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const tgDirectUrl = `https://t.me/moonweb_labs?text=${encodeURIComponent(generatedBrief)}`;

  return (
    <section id="configurator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          <span>Интерактивный конфигуратор</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Соберите проект за 1 минуту
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Выберите параметры, рассчитайте предварительную смету и сразу отправьте готовое ТЗ в диалог студии.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Selectors */}
        <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-2xl">
          {/* Step 1: Service Type */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <span>01.</span>
              <span>Что разрабатываем?</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map(s => {
                const isSelected = selectedService === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedService(s.id);
                      sounds.playClick();
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-sky-500/15 border-sky-500/80 shadow-neon-cyan text-white'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{s.name}</span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold">от ${s.basePrice}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{s.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Niche Selector */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <span>02.</span>
              <span>Ниша вашего бизнеса:</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {NICHES.map(n => {
                const isSelected = selectedNiche === n.name;
                return (
                  <button
                    key={n.id}
                    onClick={() => {
                      setSelectedNiche(n.name);
                      sounds.playClick();
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-500 to-violet-600 border-indigo-400 text-white shadow-md'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    <span>{n.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-on options */}
          <div className="space-y-3">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span>03.</span>
              <span>Дополнительные опции:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADDONS.map(a => {
                const isChecked = selectedAddons.includes(a.id);
                return (
                  <div
                    key={a.id}
                    onClick={() => toggleAddon(a.id)}
                    className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                        : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center border text-[10px] ${
                      isChecked ? 'bg-emerald-500 border-emerald-400 text-space-950 font-bold' : 'border-slate-700'
                    }`}>
                      {isChecked && '✓'}
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                        <span>{a.name}</span>
                        <span className="font-mono text-emerald-400 text-[11px]">+${a.price}</span>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-0.5">{a.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Название заведения / компании:</label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="например: Кофейня «Stories»"
                className="w-full px-3 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Пожелания / Ссылки на референсы:</label>
              <input
                type="text"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="например: Темная тема, онлайн-оплата"
                className="w-full px-3 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Live Summary & Direct Telegram Export */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0B1222] border border-sky-500/30 backdrop-blur-xl shadow-neon-cyan space-y-5">
            {/* Price & Timeline Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Предварительный расчет:</span>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400 font-mono">
                  ~${totalBudget}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Срок запуска:</span>
                <div className="flex items-center gap-1 text-sm font-bold text-sky-300">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>{currentServiceObj.days}</span>
                </div>
              </div>
            </div>

            {/* Live Generated Telegram Brief Box */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Сгенерированное ТЗ для студии:</span>
                <span className="text-[10px] font-mono text-sky-400">Готово к отправке</span>
              </div>
              <textarea
                readOnly
                value={generatedBrief}
                rows={8}
                className="w-full p-3 rounded-2xl bg-[#060A13] border border-slate-800 text-slate-300 text-xs font-sans leading-relaxed focus:outline-none resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              {/* Direct Telegram Open */}
              <a
                href={tgDirectUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-violet-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-neon-cyan transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Отправить ТЗ в Telegram @moonweb_labs</span>
              </a>

              {/* Copy Brief to Clipboard */}
              <button
                onClick={handleCopy}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border flex items-center justify-center gap-2 transition-all ${
                  copied
                    ? 'bg-emerald-600/20 border-emerald-500 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Текст скопирован в буфер!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Скопировать текст сообщения</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
