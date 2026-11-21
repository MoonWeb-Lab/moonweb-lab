import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TICKER_ITEMS = [
  'ОНЛАЙН-МЕНЮ ДЛЯ РЕСТОРАНОВ И КОФЕЕН',
  'ЗАЯВКИ И ЗАКАЗЫ СРАЗУ В TELEGRAM',
  'ОНЛАЙН-ЗАПИСЬ 24/7 ДЛЯ САЛОНОВ И КЛИНИК',
  'МГНОВЕННОЕ ОТКРЫТИЕ СО СМАРТФОНА',
  'ВЫБОР УСЛУГ И ЦЕНЫ БЕЗ ЗВОНКОВ',
  'ЗАПУСК ПРОЕКТА ОТ 3 ДО 7 ДНЕЙ',
  'ПРЯМАЯ СВЯЗЬ С ВЛАДЕЛЬЦЕМ БИЗНЕСА',
  'БЕЗ АБОНЕНТСКОЙ ПЛАТЫ',
];

export const MarqueeTicker: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#08080B] py-3 select-none relative group">
      <div className="flex w-max">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          }}
          className="flex items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs font-sans tracking-widest text-neutral-300 uppercase font-semibold">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
