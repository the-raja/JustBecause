import Link from "next/link";
import Image from "next/image";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import FloatingHearts from "./FloatingHearts";
import InteractiveLoveLetter from "./InteractiveLoveLetter";
import { DoodleHeart, DoodleSparkle, DoodleStar, DoodleBow } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#FFDDE4] via-[#FFF0E8] to-[#FFFDFC]">
      {/* 
        Section 16: Romantic Ambient Gradient Background
        - Clearly visible blush-pink & warm-cream gradient base
        - Large soft ambient pink glow centered directly behind the headline
        - Slowly drifting gradient orbs creating atmospheric depth
      */}

      {/* Central Large Ambient Glow behind Headline */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] max-w-[100vw] h-[520px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/60 via-pink-200/40 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Slowly moving gradient orb 1: Top-Left */}
      <div
        className="pointer-events-none absolute -top-16 left-[8%] w-[480px] h-[480px] bg-gradient-to-tr from-pink-400/35 via-rose-300/40 to-transparent rounded-full blur-3xl animate-orb-1"
        aria-hidden="true"
      />

      {/* Slowly moving gradient orb 2: Right side (blush rose & warm champagne) */}
      <div
        className="pointer-events-none absolute top-1/6 -right-16 w-[560px] h-[560px] bg-gradient-to-br from-rose-300/40 via-pink-200/35 to-amber-200/40 rounded-full blur-3xl animate-orb-2"
        aria-hidden="true"
      />

      {/* Slowly moving gradient orb 3: Bottom-Left */}
      <div
        className="pointer-events-none absolute bottom-8 -left-20 w-[480px] h-[480px] bg-gradient-to-tr from-rose-300/35 via-pink-200/35 to-transparent rounded-full blur-3xl animate-orb-3"
        aria-hidden="true"
      />

      {/* Floating Hearts and Sparkles background layer */}
      <FloatingHearts count={10} />

      {/* Cute Doodle Decorations placed subtly */}
      <div className="pointer-events-none absolute top-12 left-8 hidden md:block text-rose-400 opacity-70 animate-float-slow">
        <DoodleBow className="w-10 h-10 text-rose-400" />
      </div>
      <div className="pointer-events-none absolute top-20 right-10 hidden md:block text-amber-400 opacity-80 animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6 text-amber-400" />
      </div>
      <div className="pointer-events-none absolute bottom-16 left-12 hidden lg:block text-rose-300 opacity-60">
        <DoodleHeart className="w-8 h-8 text-rose-400" />
      </div>
      <div className="pointer-events-none absolute bottom-20 right-16 hidden lg:block text-pink-300 opacity-70 animate-float-reverse">
        <DoodleStar className="w-5 h-5 text-pink-400" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Brand Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-2xs">
          <span>{BRAND.shortName}</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse-gently" />
        </div>

        {/* Main Headline */}
        <div className="text-xl sm:text-2xl font-bold text-rose-500 tracking-tight mb-2">
          {BRAND.tagline}
        </div>

        {/* Supporting Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-neutral-900 leading-[1.12]">
          Don&apos;t just send a &ldquo;Happy Birthday.&rdquo;
          <br className="hidden sm:inline" />
          <span className="block mt-2 bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 bg-clip-text text-transparent drop-shadow-xs">
            Send them a whole experience.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Discover interactive surprise websites for the people who make your life special.
        </p>

        {/* Optional Interactive Love Letter */}
        <div className="mt-2">
          <InteractiveLoveLetter />
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/templates"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg hover:shadow-rose-600/25 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>EXPLORE TEMPLATES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/custom"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-rose-50/70 border border-rose-200 text-neutral-800 hover:text-rose-600 font-bold text-sm sm:text-base tracking-wide shadow-2xs hover:shadow-sm active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
          >
            <span>MAKE IT CUSTOM</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

        {/* Small Supporting Text */}
        <p className="mt-6 text-xs sm:text-sm font-semibold text-neutral-500 flex items-center justify-center gap-1.5">
          <span>Little surprises. Big feelings. Starting at ₹49.</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 inline-block" />
        </p>

        {/* Floating Template Preview Cards flanking the Hero (desktop) */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Main Hero Showcase Card */}
          <div className="relative rounded-3xl p-3 sm:p-4 bg-white/85 backdrop-blur-xs border border-rose-200/90 shadow-xl shadow-rose-900/5 overflow-hidden">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/50 to-amber-50/40 flex items-center justify-center">
              <Image
                src="/templates/universe.webp"
                alt="Interactive Surprise Website Demo Showcase"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-100 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-neutral-800">
                  Interactive Live Surprise Experience
                </span>
                <span className="text-xs text-rose-600 font-semibold hidden sm:inline">
                  • Starting at ₹49
                </span>
              </div>
            </div>
          </div>

          {/* Left Floating Mini Card */}
          <div className="hidden lg:block absolute -left-12 top-16 w-52 rounded-2xl bg-white p-2.5 border border-rose-100 shadow-lg -rotate-6 animate-float-slow pointer-events-none">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-2">
              <Image
                src="/templates/puzzle.webp"
                alt="Love Puzzle Preview"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="px-1 text-left">
              <span className="text-[11px] font-bold text-neutral-800 block line-clamp-1">Love Puzzle</span>
              <span className="text-[10px] text-rose-600 font-semibold">Interactive Game</span>
            </div>
          </div>

          {/* Right Floating Mini Card */}
          <div className="hidden lg:block absolute -right-12 bottom-10 w-52 rounded-2xl bg-white p-2.5 border border-rose-100 shadow-lg rotate-6 animate-float-reverse pointer-events-none">
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-2">
              <Image
                src="/templates/birthday.webp"
                alt="Birthday Surprise Preview"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
            <div className="px-1 text-left">
              <span className="text-[11px] font-bold text-neutral-800 block line-clamp-1">Birthday Surprise</span>
              <span className="text-[10px] text-rose-600 font-semibold">Virtual Cake & Wishes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
