import Link from "next/link";
import { Sparkles, ArrowRight, Palette, Camera, HeartHandshake, Code2 } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { DoodleHeart, DoodleSparkle } from "./Doodles";

export default function CustomTeaser() {
  const highlights = [
    { icon: Palette, text: "Bespoke Themes & Fonts" },
    { icon: Camera, text: "Your Photos & Polaroids" },
    { icon: HeartHandshake, text: "Love Quizzes & Milestones" },
    { icon: Code2, text: "Interactive Secrets & Music" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFF6F9] via-[#FFEBF2] to-[#FFF2F5] relative overflow-hidden">
      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] max-w-[100vw] h-[450px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/40 via-pink-200/25 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Decorative Doodles */}
      <div className="pointer-events-none absolute top-8 left-10 text-rose-300 opacity-60 hidden md:block animate-float-slow">
        <DoodleHeart className="w-10 h-10" />
      </div>
      <div className="pointer-events-none absolute bottom-10 right-10 text-amber-400 opacity-70 hidden md:block animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] border border-rose-200/80 p-8 sm:p-12 lg:p-14 shadow-xl shadow-rose-900/5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Bespoke Design Service</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Want Something Nobody Else Has? ✨
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Every person is different. Your surprise can be, too. Tell us your idea, and we&apos;ll create a personalized website with your preferred theme, names, photos, messages, and agreed features.
            </p>

            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 shadow-2xs">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs uppercase font-bold text-neutral-500">Starting at</span>
                <span className="text-2xl font-black text-rose-600">₹{BRAND.customStartingPrice}</span>
              </div>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <p className="text-xs sm:text-sm text-neutral-600">
                Final pricing depends on design complexity, personalization, requested features, and hosting duration.
              </p>
            </div>
          </div>

          {/* Compact Feature Chips */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.text}
                  className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-rose-100/90 shadow-2xs text-left"
                >
                  <div className="w-8 h-8 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-800 leading-tight">
                    {h.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Row */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              ⚡ Custom websites are personally designed and quoted manually after understanding your idea.
            </span>

            <Link
              href="/custom"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>MAKE IT CUSTOM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
