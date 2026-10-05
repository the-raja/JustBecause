import { Sparkles, ArrowRight, Palette, Camera, HeartHandshake, Code2 } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function CustomWebsite() {
  const customFeatures = [
    {
      icon: Palette,
      title: "Unique Themes & Styles",
      desc: "Tailored color palettes, custom illustrations, and fonts that fit their aesthetic perfectly.",
    },
    {
      icon: Camera,
      title: "Your Photos & Memories",
      desc: "Interactive polaroid carousels, photo galleries, and secret message unlockables.",
    },
    {
      icon: HeartHandshake,
      title: "Custom Love Quizzes & Games",
      desc: "Personalized trivia about your relationship, shared inside jokes, and milestone timelines.",
    },
    {
      icon: Code2,
      title: "Custom Interactive Features",
      desc: "Bespoke countdown clocks, music players, floating animations, and custom domain options.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-rose-50/50 via-[#FFFDFC] to-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-rose-50/30 to-pink-50/40 rounded-3xl sm:rounded-[2.5rem] border border-rose-200/80 p-8 sm:p-12 lg:p-16 shadow-lg shadow-rose-900/5">
          <div className="max-w-3xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Bespoke Design Service</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Want Something Nobody Else Has? ✨
            </h2>

            {/* Copy */}
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Every person is different. Your surprise can be, too. Tell us your idea, and we&apos;ll create a personalized website with your preferred theme, names, photos, messages, and agreed features.
            </p>

            {/* Price banner */}
            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-2xl bg-white border border-rose-200/80 shadow-2xs">
              <div className="flex items-baseline gap-1">
                <span className="text-xs uppercase font-bold text-neutral-500">Starting at</span>
                <span className="text-2xl font-black text-rose-600">₹{BRAND.customStartingPrice}</span>
              </div>
              <span className="hidden sm:inline text-neutral-300">|</span>
              <p className="text-xs sm:text-sm text-neutral-500">
                Final price depends on design complexity, personalization, requested features, and hosting duration.
              </p>
            </div>
          </div>

          {/* Feature Highlights Grid */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {customFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="p-5 rounded-2xl bg-white/90 border border-rose-100/90 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-800">{feat.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-neutral-500">
              ⚡ Custom work is quoted manually via Instagram DM after understanding your requirements.
            </div>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg hover:shadow-rose-600/20 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>MAKE IT CUSTOM</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
