import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TICKER_ITEMS = [
  'TELEGRAM MINI APPS',
  'КОНВЕРСИОННЫЕ ЛЕНДИНГИ',
  'КВИЗ-КАЛЬКУЛЯТОРЫ СМЕТЫ',
  'ОНЛАЙН-ЗАПИСЬ 24/7',
  'УВЕДОМЛЕНИЯ В TELEGRAM ЗА 1 СЕК',
  'ЗАГРУЗКА ЗА 0.4 СЕК (PAGESPEED 98+)',
  'ЧИСТЫЙ КОД REACT 18 & TYPESCRIPT',
  '100% ПЕРЕДАЧА ИСХОДНИКОВ НА GITHUB',
];

export const MarqueeTicker: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.08] bg-[#0A0A0C] py-4 select-none relative">
      <div className="flex w-max">
        <motion.div
          animate={shouldReduceMotion ? {} : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 35,
            ease: 'linear',
          }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
