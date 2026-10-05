import { Heart, Sparkles, ArrowDown, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background ambient decorative glows */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-rose-100/60 via-pink-50/40 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 bg-rose-100/40 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -left-20 w-72 h-72 bg-amber-50/50 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Cute Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/70 text-rose-700 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse-gently" />
          <span>{BRAND.tagline}</span>
        </div>

        {/* Brand Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 leading-[1.12]">
          Don&apos;t just send a &ldquo;Happy Birthday.&rdquo;
          <br className="hidden sm:inline" />
          <span className="block mt-2 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 bg-clip-text text-transparent">
            Send them a whole experience.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Discover interactive surprise websites for the people who make your life special.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="#templates"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg hover:shadow-rose-600/25 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>EXPLORE TEMPLATES</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-rose-50/70 border border-rose-200 text-neutral-800 hover:text-rose-600 font-bold text-sm sm:text-base tracking-wide shadow-2xs hover:shadow-sm active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>MAKE IT CUSTOM</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
            <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
          </a>
        </div>

        {/* Small Supporting Tagline */}
        <p className="mt-6 text-xs sm:text-sm font-semibold text-neutral-500 flex items-center justify-center gap-1.5">
          <span>Little surprises. Big feelings. Starting at ₹49.</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline-block" />
        </p>

        {/* Quick Highlights Row */}
        <div className="mt-12 pt-8 border-t border-rose-100/70 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3 rounded-2xl bg-white/60 border border-rose-100/50">
            <span className="text-xl sm:text-2xl font-extrabold text-rose-600">₹49</span>
            <p className="text-xs text-neutral-600 mt-0.5 font-medium">Starting Price</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-rose-100/50">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-800">24 Hours</span>
            <p className="text-xs text-neutral-600 mt-0.5 font-medium">Live Access Included</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-rose-100/50">
            <span className="text-xl sm:text-2xl font-extrabold text-neutral-800">Direct Link</span>
            <p className="text-xs text-neutral-600 mt-0.5 font-medium">+ QR Code Sent</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-rose-100/50">
            <span className="text-xl sm:text-2xl font-extrabold text-rose-600">100%</span>
            <p className="text-xs text-neutral-600 mt-0.5 font-medium">Handcrafted with Love</p>
          </div>
        </div>
      </div>
    </section>
  );
}
