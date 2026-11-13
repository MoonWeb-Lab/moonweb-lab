import React, { useRef, useState, MouseEvent } from 'react';
import { sounds } from '../audio/soundEngine';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.25)',
  maxTilt = 8,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [spotlightPos, setSpotlightPos] = useState({ x: -100, y: -100, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setSpotlightPos({ x, y, opacity: 1 });
  };

  const handleMouseEnter = () => {
    sounds.playHover();
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setSpotlightPos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out'
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-sky-500/40 transition-colors ${className}`}
    >
      {/* Specular Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${glowColor}, transparent 70%)`
        }}
      />
      {children}
    </div>
  );
};
