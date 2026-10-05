"use client";

import { useState } from "react";
import { Mail, Heart, Sparkles, X } from "lucide-react";

export default function InteractiveLoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block my-4">
      {/* Interactive Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Open secret love note"
        className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-rose-50/90 hover:bg-rose-100/90 border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
      >
        <span className="relative flex items-center justify-center">
          <Mail className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        </span>
        <span>Tap to open little love note</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
      </button>

      {/* Unfolded Love Note Card */}
      {isOpen && (
        <div className="mt-3 relative z-20 max-w-sm mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-rose-200/90 shadow-xl shadow-rose-900/10 animate-in fade-in zoom-in-95 duration-200 text-left">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-rose-500" />
              <span>A note for you</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close note"
              className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-sm font-bold text-neutral-800 leading-snug">
            &ldquo;Someone is going to feel very loved today. ❤️&rdquo;
          </p>
          <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
            Little surprises create big unforgettable memories. Pick a template and make their smile shine!
          </p>
        </div>
      )}
    </div>
  );
}
