import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, Bell, Smartphone, ArrowRight, Sparkles, RefreshCw, Zap } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

interface LeadPreset {
  id: string;
  name: string;
  client: string;
  phone: string;
  service: string;
  detail: string;
  amount: string;
}

const PRESETS: LeadPreset[] = [
  {
    id: 'bistro',
    name: 'Ресторан / Бистро',
    client: 'Артём Мельников',
    phone: '+375 (29) 682-14-90',
    service: 'Бронь столика на террасе',
    detail: '2 персоны • Пятница 19:30 • Без глютена',
    amount: 'Депозит: 80 BYN'
  },
  {
    id: 'barber',
    name: 'Барбершоп',
    client: 'Владислав Белов',
    phone: '+375 (33) 441-20-11',
    service: 'Комплекс: Fade + моделирование бороды',
    detail: 'Мастер: Артём • Завтра 14:00',
    amount: 'Стоимость: 65 BYN'
  },
  {
    id: 'furniture',
    name: 'Мебель на заказ',
    client: 'Ольга Васильева',
    phone: '+375 (44) 710-88-34',
    service: 'Квиз: П-образная кухня с островом',
    detail: 'Фасады: Fenix NTM • Фурнитура: Blum • Минск',
    amount: 'Расчёт сметы: ~4 800 $'
  }
];

export const LeadFlowDemo: React.FC = () => {
  const [activePreset, setActivePreset] = useState<LeadPreset>(PRESETS[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationReceived, setNotificationReceived] = useState(true);
  const [lastSubmittedAt, setLastSubmittedAt] = useState('14:32:04');
  const shouldReduceMotion = useReducedMotion();

  const handleTestSubmit = () => {
    sounds.playClick();
    setIsSubmitting(true);
    setNotificationReceived(false);

    // Realistic network dispatch & Telegram notification delay (0.6s)
    setTimeout(() => {
      setIsSubmitting(false);
      setNotificationReceived(true);
      const now = new Date();
      setLastSubmittedAt(
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`
      );
      sounds.playSuccess();
    }, 600);
  };

  return (
    <section id="flow" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white">Интерактивная связка</span>
          <span className="text-studio-subtle">•</span>
          <span>Без потерянных заявок</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Как это работает: путь клиента от клика до вашего смартфона
        </h2>
        <p className="mt-4 text-studio-muted text-base sm:text-lg leading-relaxed">
          Вместо того чтобы вручную переписываться в Директе и терять до 40% лидов, сайт моментально передает заявку прямо в закрытый Telegram-чат вашей компании.
        </p>
      </div>

      {/* Preset Selector Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs text-studio-subtle font-mono mr-2">Выберите нишу для теста:</span>
        {PRESETS.map((p) => {
          const isSelected = activePreset.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                sounds.playToggle();
                setActivePreset(p);
                setNotificationReceived(true);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-white text-black font-semibold'
                  : 'bg-studio-surface border border-white/[0.08] text-studio-muted hover:text-white'
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {/* Interactive Two-Pane Demo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Mock Website Form on Customer's Phone/Browser */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-studio-surface border border-white/[0.08] shadow-card">
          <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
              <span className="text-xs font-mono text-studio-muted">Ваш сайт / Mini App</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Live форма
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-mono uppercase text-studio-subtle mb-1">
                Имя клиента
              </label>
              <div className="p-2.5 rounded-lg bg-[#0E0E10] border border-white/[0.06] text-sm text-white font-medium">
                {activePreset.client}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-studio-subtle mb-1">
                Телефон
              </label>
              <div className="p-2.5 rounded-lg bg-[#0E0E10] border border-white/[0.06] text-sm text-neutral-300 font-mono">
                {activePreset.phone}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-studio-subtle mb-1">
                Выбранная услуга / Параметры
              </label>
              <div className="p-2.5 rounded-lg bg-[#0E0E10] border border-white/[0.06] text-xs text-neutral-300">
                <p className="font-semibold text-white mb-0.5">{activePreset.service}</p>
                <p className="text-studio-muted text-[11px]">{activePreset.detail}</p>
              </div>
            </div>

            <button
              onClick={handleTestSubmit}
              disabled={isSubmitting}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs transition-colors shadow-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Отправка пакета данных...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Протестировать отправку заявки</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-studio-subtle">
              Нажмите кнопку, чтобы отправить эмуляцию в Telegram
            </p>
          </div>
        </div>

        {/* Center: Interactive Pulse Pipeline */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
          <div className="hidden lg:flex items-center gap-1 w-full justify-center">
            <span className="w-12 h-px bg-white/10" />
            <motion.div
              animate={isSubmitting ? { scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] } : {}}
              transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.5 }}
              className="w-8 h-8 rounded-full bg-studio-surface border border-white/[0.1] flex items-center justify-center"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
            </motion.div>
            <span className="w-12 h-px bg-white/10" />
          </div>
          <span className="text-[10px] font-mono text-studio-subtle mt-2 uppercase">
            {isSubmitting ? 'Передача: 0.4 сек' : 'Мгновенный пуш'}
          </span>
        </div>

        {/* Right: Realistic Telegram Bot Window */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#17212B] border border-white/[0.08] shadow-card text-white">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 font-bold text-xs">
                M
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">MoonWeb Bot • CRM</h4>
                <p className="text-[10px] text-sky-300/80 font-mono">бот студии</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
              <Bell className="w-3.5 h-3.5" />
              <span>{lastSubmittedAt}</span>
            </div>
          </div>

          {/* Telegram Bubble */}
          <div className="min-h-[220px] flex flex-col justify-end">
            <AnimatePresence mode="wait">
              {notificationReceived && (
                <motion.div
                  key={activePreset.id + lastSubmittedAt}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 rounded-xl bg-[#242F3D] border border-white/5 space-y-2 text-xs shadow-md"
                >
                  <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 border-b border-white/5 pb-1.5">
                    <span className="flex items-center gap-1 font-bold">
                      🔥 НОВАЯ ЗАЯВКА С САЙТА
                    </span>
                    <span className="text-neutral-400">{lastSubmittedAt}</span>
                  </div>

                  <div className="space-y-1 pt-1 text-neutral-200">
                    <p>
                      👤 <strong className="text-white">{activePreset.client}</strong>
                    </p>
                    <p>
                      📞 <span className="font-mono text-sky-300">{activePreset.phone}</span>
                    </p>
                    <p>
                      🎯 <strong>Услуга:</strong> {activePreset.service}
                    </p>
                    <p className="text-neutral-300 text-[11px]">
                      📝 <strong>Детали:</strong> {activePreset.detail}
                    </p>
                    <p className="font-mono text-emerald-300 text-[11px] pt-1">
                      💰 {activePreset.amount}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <a
                      href={`tel:${activePreset.phone}`}
                      className="flex-1 py-1.5 text-center rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-[11px] font-semibold transition-colors"
                    >
                      Позвонить клиенту
                    </a>
                    <a
                      href={`https://t.me/moonweb_labs`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-1.5 text-center rounded bg-white/10 hover:bg-white/15 text-white text-[11px] font-semibold transition-colors"
                    >
                      Открыть в CRM
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
