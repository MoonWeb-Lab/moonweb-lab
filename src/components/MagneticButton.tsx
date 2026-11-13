import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { sounds } from '../audio/soundEngine';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  pullFactor?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  pullFactor = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * pullFactor;
    const distanceY = (clientY - centerY) * pullFactor;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => sounds.playHover()}
      animate={shouldReduceMotion ? {} : { x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.1 }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={() => {
            sounds.playClick();
            if (onClick) onClick();
          }}
          className={className}
        >
          {children}
        </a>
      ) : (
        <button
          type="button"
          onClick={() => {
            sounds.playClick();
            if (onClick) onClick();
          }}
          className={className}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
};
