import React from 'react';
import { Star, ShieldCheck, Clock, Award, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { sounds } from '../audio/soundEngine';
import { TiltCard } from './TiltCard';

export const ReviewsQueueSection: React.FC = () => {
  const reviews = [
    {
      author: 'Александр Романов',
      role: 'Основатель, Botanica Bistro & Wine Bar',
      city: 'Минск',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      text: 'Искали студию, которая сделает не шаблонный сайт, а сайт с атмосферой нашего заведения. MoonWeb Lab сделали интерактивное меню, бронь столов и 3D-анимации. Гости в восторге, конверсия броней выросла в 2.4 раза за первый месяц!',
      project: 'Гастрономический лендинг + бронирование'
    },
    {
      author: 'Дмитрий Власов',
      role: 'Управляющий партнер, Blade & Timber Barbershop',
      city: 'Могилёв',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      text: 'Парни реализовали Telegram Mini App для онлайн-записи и магазин мужской косметики. Запись теперь работает сама 24/7 без администратора в Direct. Очень крутой звук кнопок и премиальный темный интерфейс.',
      project: 'Telegram Mini App + Онлайн-запись'
    },
    {
      author: 'Елена Соколова',
      role: 'Главный врач, Lumina Clinic Aesthetic Medicine',
      city: 'Минск',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
      text: 'В премиум-сегменте медицины важна каждая деталь и идеальная эстетика. MoonWeb Lab создали сайт с ювелирным дизайном, калькулятором процедур и карточками докторов. Сдали всё в срок за 7 дней.',
      project: 'Медицинский портал + калькулятор услуг'
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: 'Фиксированные сроки',
      desc: 'Закрепляем дату релиза в договоре. За каждый день задержки — компенсация 1% от стоимости.'
    },
    {
      icon: ShieldCheck,
      title: 'Гарантия возврата',
      desc: 'Если концепт дизайна вас не устроит — возвращаем 100% предоплаты без споров.'
    },
    {
      icon: Award,
      title: 'Исходный код навсегда ваш',
      desc: 'Полная передача репозитория GitHub, прав на домен и хостинг. Никаких ежемесячных привязок.'
    }
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
          Доверие & Результаты
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Отзывы клиентов &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
            железные гарантии
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          Каждый наш проект — это измеримый рост заявок, лояльности клиентов и экономия времени владельца.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {reviews.map((rev, idx) => (
          <TiltCard
            key={idx}
            className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/40 flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              {/* Rating stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <MessageSquareQuote className="w-6 h-6 text-slate-600 group-hover:text-emerald-400/50 transition-colors" />
              </div>

              {/* Review text */}
              <p className="text-sm text-slate-300 leading-relaxed italic">
                «{rev.text}»
              </p>

              {/* Project tag */}
              <div className="inline-block px-2.5 py-1 rounded bg-slate-800/80 border border-white/5 text-[11px] text-emerald-300 font-mono">
                {rev.project}
              </div>
            </div>

            {/* Author info */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
              />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {rev.author}
                </h4>
                <p className="text-xs text-slate-400 leading-tight">{rev.role}</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">{rev.city}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Guarantees Box */}
      <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-slate-900/90 to-[#070C18] border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sounds.playHover()}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
