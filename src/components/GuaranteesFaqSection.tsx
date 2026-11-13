import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Clock, Award, ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';
import { sounds } from '../audio/soundEngine';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Сколько стоит поддержка и обслуживание после запуска?',
    answer: 'Первые 14 дней после релиза — гарантийный период: любые мелкие правки, корректировки текстов или настройка входят в стоимость бесплатно. Далее проект работает автономно без ежемесячных платежей. Если потребуются новые фичи или доработки — оплата только по факту выполненных задач.'
  },
  {
    question: 'Нужно ли каждый месяц оплачивать дорогой сервер или хостинг?',
    answer: 'Нет! Статические сайты и Telegram Mini Apps мы разворачиваем на защищённой глобальной инфраструктуре (Cloudflare / GitHub Pages) с бесплатным пожизненным SSL-сертификатом. Вы платите только за доменное имя (~$10 в год).'
  },
  {
    question: 'Как именно заявки будут приходить ко мне и менеджерам?',
    answer: 'Моментально прямо в закрытую Telegram-группу вашей компании. В уведомлении сразу указаны имя клиента, номер телефона, город, выбранная услуга или состав сметы из квиза. Вы можете сразу нажать кнопку «Позвонить клиенту» или «Открыть в CRM».'
  },
  {
    question: 'Сможем ли мы самостоятельно менять цены, меню или фото?',
    answer: 'Да. Мы передаём проект с чистой архитектурой и записываем короткую пошаговую видеоинструкцию. При необходимости подключаем простую панель управления контентом без необходимости лезть в код.'
  },
  {
    question: 'Что требуется предоставить от нас для начала работы?',
    answer: 'Только базовую информацию: прайс-лист, контакты, ваши фото/логотип (если есть) и ссылки на соцсети. Всю маркетинговую структуру, написание сильных текстов, прототипирование, UI/UX дизайн и интеграции мы берём на себя.'
  }
];

export const GuaranteesFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (idx: number) => {
    sounds.playToggle();
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const guarantees = [
    {
      icon: Clock,
      title: 'Фиксированные сроки в договоре',
      desc: 'Точная дата релиза закрепляется юридически. За каждый день задержки предусмотрена компенсация 1% от суммы договора.'
    },
    {
      icon: ShieldCheck,
      title: '100% гарантия возврата предоплаты',
      desc: 'Если разработанный прототип и визуальная концепция вас не устроят — мы полностью возвращаем предоплату без лишних споров.'
    },
    {
      icon: Award,
      title: 'Полное владение исходным кодом',
      desc: 'Никаких скрытых ежемесячных подписок или арендных привязок. Репозиторий GitHub, права на домен и хостинг передаются вам навсегда.'
    }
  ];

  return (
    <section id="guarantees" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Guarantees Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white font-semibold">Надёжность & Прозрачность</span>
          <span className="text-studio-subtle">•</span>
          <span className="text-neutral-300">0 скрытых платежей</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Юридические гарантии для вашего бизнеса
        </h2>
        <p className="mt-4 text-neutral-300 text-base leading-relaxed">
          Мы строим долгосрочные партнёрские отношения. Никаких пустых обещаний и абстрактных формулировок — только зафиксированные обязательства.
        </p>
      </div>

      {/* Guarantees 3-Card Grid with Hover Animation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {guarantees.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              transition={{
                duration: 0.5,
                delay: shouldReduceMotion ? 0 : 0.08 * idx,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="p-8 rounded-2xl bg-studio-surface border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between shadow-card"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0E0E10] border border-white/[0.08] flex items-center justify-center text-white">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="pt-12 border-t border-white/[0.08]">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-300" />
            <span className="font-mono uppercase text-[11px] text-white font-semibold">FAQ</span>
            <span className="text-studio-subtle">•</span>
            <span className="text-neutral-300">Ответы на частые вопросы</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-editorial leading-tight">
            Всё, что важно знать перед стартом
          </h3>
        </div>

        {/* Animated FAQ Accordion */}
        <div className="max-w-3xl space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-studio-surface border border-white/[0.08] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-neutral-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/[0.04] pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
