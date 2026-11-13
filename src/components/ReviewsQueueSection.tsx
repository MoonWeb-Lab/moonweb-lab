import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

export const ReviewsQueueSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviews = [
    {
      author: 'Александр Романов',
      role: 'Основатель, Botanica Bistro & Wine Bar',
      city: 'Минск',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      text: 'Искали студию, которая сделает не шаблонную страницу с водянистыми текстами, а эстетичный сайт с атмосферой заведения. Сделали интерактивное меню и бронь столов. За первый месяц бронирования через сайт выросли на 34%.',
      project: 'Botanica Bistro • Сайт + QR-меню'
    },
    {
      author: 'Дмитрий Власов',
      role: 'Управляющий, Blade & Timber Barbershop',
      city: 'Могилёв',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      text: 'Внедрили Telegram Mini App для онлайн-записи к мастерам. Теперь клиенты выбирают время прямо в Telegram, а администратор не тратит часы на переписку в Директе. Отдельный респект за быстрый отклик интерфейса.',
      project: 'Blade & Timber • Telegram Mini App'
    },
    {
      author: 'Елена Соколова',
      role: 'Главный врач, Lumina Clinic',
      city: 'Минск',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
      text: 'В эстетической медицине сайт должен вызывать безупречное доверие с первых секунд. Команда MoonWeb Lab разработала чистый скандинавский интерфейс с каталогом врачей и калькулятором процедур. Сдали точно в срок.',
      project: 'Lumina Clinic • Медицинский портал'
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: 'Фиксированные сроки в договоре',
      desc: 'Точная дата сдачи прописывается юридически. За каждый день задержки предусмотрена компенсация 1% от суммы договора.'
    },
    {
      icon: ShieldCheck,
      title: '100% гарантия возврата',
      desc: 'Если разработанный прототип и дизайн-концепция вас не устроят — мы возвращаем предоплату без споров.'
    },
    {
      icon: Award,
      title: 'Полное владение исходным кодом',
      desc: 'Никаких скрытых ежемесячных подписок. Репозиторий GitHub, код и доступы к хостингу передаются вам навсегда.'
    }
  ];

  return (
    <section id="guarantees" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-studio-surface border border-white/[0.08] text-xs text-studio-muted mb-4">
          <span className="font-mono uppercase text-[11px] text-white">Репутация & Гарантии</span>
          <span className="text-studio-subtle">•</span>
          <span>Без рисков</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-editorial leading-tight">
          Отзывы заказчиков и юридические гарантии
        </h2>
        <p className="mt-3 text-studio-muted text-base leading-relaxed">
          Мы строим долгосрочные партнерские отношения. Никаких пустых обещаний — только зафиксированные обязательства.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {reviews.map((rev, idx) => (
          <motion.div
            key={idx}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.08 * idx,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="p-6 rounded-2xl bg-studio-surface border border-white/[0.08] hover:border-white/20 transition-colors flex flex-col justify-between shadow-card"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-studio-subtle uppercase">
                  Подтверждённый отзыв
                </span>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed italic">
                «{rev.text}»
              </p>

              <div className="inline-block px-2.5 py-1 rounded bg-[#0E0E10] border border-white/[0.05] text-[11px] font-mono text-studio-muted">
                {rev.project}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-10 h-10 rounded-full object-cover border border-white/10"
              />
              <div>
                <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                <p className="text-[11px] text-studio-muted">{rev.role}</p>
                <p className="text-[10px] font-mono text-studio-subtle">{rev.city}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Guarantees Box */}
      <div className="p-8 sm:p-10 rounded-2xl bg-studio-surface border border-white/[0.08] shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E0E10] border border-white/[0.08] flex items-center justify-center text-white">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
                <p className="text-xs text-studio-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
