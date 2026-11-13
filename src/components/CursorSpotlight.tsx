import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

export const CursorSpotlight: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(-500, { stiffness: 120, damping: 22 });
  const springY = useSpring(-500, { stiffness: 120, damping: 22 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    // Detect if device has touch only
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldReduceMotion, isVisible, springX, springY]);

  if (shouldReduceMotion || !isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
      style={{
        left: springX,
        top: springY,
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.045) 0%, rgba(255, 255, 255, 0.01) 45%, transparent 70%)',
      }}
    />
  );
};
