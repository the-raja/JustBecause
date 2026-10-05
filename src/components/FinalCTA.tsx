import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import FloatingHearts from "./FloatingHearts";
import { DoodleSparkle, DoodleHeart } from "./Doodles";

export default function FinalCTA() {
  return (
    <section className="py-18 sm:py-28 bg-gradient-to-b from-[#FFEAEF] via-[#FFDDE6] to-[#FFEBEF] text-center relative overflow-hidden">
      {/* Central soft ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] max-w-[100vw] h-[420px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/60 via-pink-200/40 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Floating Hearts layer */}
      <FloatingHearts count={8} />

      {/* Doodles */}
      <div className="pointer-events-none absolute top-12 left-1/4 text-rose-300 opacity-60 animate-float-slow">
        <DoodleHeart className="w-8 h-8" />
      </div>
      <div className="pointer-events-none absolute bottom-12 right-1/4 text-amber-400 opacity-70 animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-14 h-14 mx-auto rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-xs flex items-center justify-center text-rose-600 mb-6">
          <Heart className="w-7 h-7 fill-rose-500 animate-pulse-gently" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Someone you love deserves a little surprise. ❤️
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Make their ordinary day feel a little less ordinary.
        </p>

        <div className="mt-8">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-rose-600/30 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>FIND YOUR SURPRISE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
