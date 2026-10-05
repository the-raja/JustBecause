"use client";

import { Heart, Sparkles } from "lucide-react";

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

export default function FloatingHearts({ count = 9, className = "" }: FloatingHeartsProps) {
  // Preset particle parameters for deterministic SSR and zero hydration mismatch
  const particles = [
    { top: "8%", left: "10%", size: 16, delay: "0s", duration: "8s", opacity: 0.35, rotate: "12deg", isSparkle: false },
    { top: "18%", left: "85%", size: 20, delay: "2s", duration: "10s", opacity: 0.4, rotate: "-15deg", isSparkle: false },
    { top: "45%", left: "6%", size: 14, delay: "1.5s", duration: "9s", opacity: 0.3, rotate: "8deg", isSparkle: true },
    { top: "58%", left: "92%", size: 18, delay: "3s", duration: "11s", opacity: 0.35, rotate: "20deg", isSparkle: false },
    { top: "75%", left: "15%", size: 22, delay: "0.5s", duration: "12s", opacity: 0.25, rotate: "-10deg", isSparkle: false },
    { top: "82%", left: "80%", size: 15, delay: "4s", duration: "8.5s", opacity: 0.3, rotate: "15deg", isSparkle: true },
    { top: "30%", left: "20%", size: 13, delay: "2.5s", duration: "9.5s", opacity: 0.2, rotate: "-8deg", isSparkle: false },
    { top: "68%", left: "48%", size: 16, delay: "1s", duration: "10.5s", opacity: 0.25, rotate: "5deg", isSparkle: true },
    { top: "12%", left: "60%", size: 18, delay: "3.5s", duration: "11.5s", opacity: 0.3, rotate: "-18deg", isSparkle: false },
  ].slice(0, count);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none -z-10 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p, idx) => (
        <div
          key={idx}
          className="absolute text-rose-400"
          style={{
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            transform: `rotate(${p.rotate})`,
            animation: `floatSlow ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        >
          {p.isSparkle ? (
            <Sparkles style={{ width: p.size, height: p.size }} className="text-amber-400" />
          ) : (
            <Heart style={{ width: p.size, height: p.size }} className="fill-rose-400 text-rose-400" />
          )}
        </div>
      ))}
    </div>
  );
}
