import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { DoodleSparkle } from "./Doodles";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/50 to-[#FFFDFC] text-center relative overflow-hidden">
      <div className="pointer-events-none absolute top-10 left-1/4 text-rose-300 opacity-40">
        <DoodleSparkle className="w-6 h-6" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-1/4 text-pink-300 opacity-40">
        <DoodleSparkle className="w-5 h-5" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-6">
          <Heart className="w-6 h-6 fill-rose-500 animate-pulse-gently" />
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
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:shadow-rose-600/25 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>FIND YOUR SURPRISE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
