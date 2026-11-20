import React from 'react';
import { Smartphone, CheckCircle, Send, ArrowRight, Clock, MessageSquare } from 'lucide-react';

export const ConversionFlowSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-neutral-300 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Понятная логика</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
          Как сайт превращает посетителей в заявки
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
          Вместо долгих переписок в директе и потерянных звонков: простая цепочка из трёх шагов, которая работает круглосуточно.
        </p>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
        
        {/* Step 1 */}
        <div className="rounded-3xl bg-[#0F0F14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-3xl font-extrabold text-purple-400">01</span>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300">
                <Smartphone className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Переход с рекламы, карт или Instagram
            </h3>
            
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Потенциальный клиент нажимает на ссылку в профиле или на Яндекс Картах. Страница открывается со смартфона моментально, без подвисаний и долгой загрузки.
            </p>
          </div>

          {/* Micro Visual Card */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-2">
            <div className="flex items-center justify-between text-neutral-400">
              <span>Источник: Яндекс Карты</span>
              <span className="text-emerald-400 font-medium">Загрузка 0.8с</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-full rounded-full" />
            </div>
            <p className="text-[11px] text-neutral-400">
              Посетитель не закрывает вкладку и сразу видит ваш каталог
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-3xl bg-[#0F0F14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-3xl font-extrabold text-emerald-400">02</span>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Быстрый выбор за 30 секунд
            </h3>
            
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Человек сразу видит понятные цены, фотографии, состав блюд или свободные окна мастеров. Ему не нужно звонить или ждать ответа администратора.
            </p>
          </div>

          {/* Micro Visual Card */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs space-y-2">
            <div className="flex items-center justify-between text-white font-medium">
              <span>Выбранная услуга</span>
              <span className="text-purple-300">45 ₽</span>
            </div>
            <div className="text-neutral-400 text-[11px]">
              Дата и время: Завтра, 14:00 (Мастер: Дмитрий)
            </div>
            <div className="pt-1 text-[11px] text-emerald-400 font-medium">
              ✓ Заказ подтверждён в один клик
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-3xl bg-[#0F0F14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-3xl font-extrabold text-white">03</span>
              <div className="w-12 h-12 rounded-2xl bg-white/[0.08] border border-white/20 flex items-center justify-center text-white">
                <Send className="w-6 h-6 text-purple-400" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              Заявка сразу в ваш Telegram
            </h3>
            
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              Вам или вашему администратору моментально приходит структурированное сообщение: имя клиента, номер телефона, выбранные позиции и удобное время.
            </p>
          </div>

          {/* Micro Visual Card: Telegram Notification Bubble */}
          <div className="p-3.5 rounded-2xl bg-[#1E232F]/80 border border-blue-500/20 text-xs space-y-1.5 shadow-lg">
            <div className="flex items-center gap-1.5 text-blue-400 font-semibold text-[11px]">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Бот MoonWeb Lab</span>
            </div>
            <div className="text-neutral-200 text-xs font-mono">
              🔔 <strong>Новая запись с сайта!</strong><br />
              Имя: Алексей Смирнов<br />
              Телефон: +375 (29) 555-12-34<br />
              Услуга: Стрижка + уход
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
