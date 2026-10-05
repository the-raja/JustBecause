import { Heart } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 bg-[#FFFDFC] border-t border-rose-100/80 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Minimal Required Copy */}
        <p className="text-xs sm:text-sm font-medium tracking-wide text-neutral-500 uppercase mb-2">
          Why you make this
        </p>

        <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center justify-center gap-2">
          <span>JUST BECAUSE</span>
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse-gently inline-block" />
        </h2>

        {/* Subtle Brand Signature */}
        <p className="mt-4 text-xs font-semibold text-rose-500/80">
          {BRAND.signature}
        </p>
      </div>
    </footer>
  );
}
