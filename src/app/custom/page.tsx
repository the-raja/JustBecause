import type { Metadata } from "next";
import { Sparkles, Palette, Camera, HeartHandshake, Code2, Music, Clock, FileCheck, CheckCircle2 } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND } from "@/lib/constants";
import { DoodleHeart, DoodleSparkle, DoodleStar } from "@/components/Doodles";
import FloatingHearts from "@/components/FloatingHearts";

export const metadata: Metadata = {
  title: "Bespoke Custom Websites — Made Just for Your Special Person",
  description:
    "Order a completely custom, personalized interactive surprise website tailored with your love story, photos, quizzes, and unique memories. Starting at ₹199.",
};

export default function CustomPage() {
  const customizationOptions = [
    {
      icon: Palette,
      title: "Custom Themes & Aesthetics",
      desc: "From dreamy pastel scrapbooks to starry night skies, designed around their favorite aesthetic and colors.",
    },
    {
      icon: Camera,
      title: "Interactive Memories & Polaroids",
      desc: "Flip books, draggable polaroid stacks, and interactive photo timelines showcasing your milestone moments.",
    },
    {
      icon: HeartHandshake,
      title: "Couple Trivia & Inside Jokes",
      desc: "Fun couple quizzes, 'How well do you know me?' mini-games, and romantic password unlockables.",
    },
    {
      icon: Clock,
      title: "Relationship Countdowns",
      desc: "Live tickers calculating days together, birthday countdown clocks, or anniversary milestone reveals.",
    },
    {
      icon: Music,
      title: "Sound & Music Integration",
      desc: "Incorporate meaningful background melodies or voice note audio players where appropriate.",
    },
    {
      icon: Code2,
      title: "Bespoke Interactive Delights",
      desc: "Floating balloons, virtual cake blowing, secret love letters, and tailored confetti animations.",
    },
  ];

  const preparationChecklist = [
    "Your special date or anniversary target",
    "Names, nicknames, and personal greetings",
    "A handful of your favorite photos or memories",
    "Special love quotes, personal letters, or inside jokes",
    "Preferred color palette, vibes, or visual references",
  ];

  return (
    <main className="py-14 sm:py-20 bg-gradient-to-b from-[#FFDDE4] via-[#FFF0E8] to-[#FFF6F8] min-h-screen relative overflow-hidden">
      {/* Central Large Ambient Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] max-w-[100vw] h-[520px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/50 via-pink-200/35 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Slowly moving gradient orbs */}
      <div
        className="pointer-events-none absolute -top-16 left-[5%] w-[480px] h-[480px] bg-gradient-to-tr from-pink-400/30 via-rose-300/35 to-transparent rounded-full blur-3xl animate-orb-1"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-16 w-[520px] h-[520px] bg-gradient-to-br from-rose-300/35 via-pink-200/30 to-amber-200/35 rounded-full blur-3xl animate-orb-2"
        aria-hidden="true"
      />

      {/* Floating Hearts */}
      <FloatingHearts count={8} />

      {/* Decorative background doodles */}
      <div className="pointer-events-none absolute top-12 left-10 text-rose-300 opacity-60 hidden md:block animate-float-slow">
        <DoodleHeart className="w-12 h-12" />
      </div>
      <div className="pointer-events-none absolute top-24 right-12 text-amber-400 opacity-70 hidden md:block animate-pulse-gently">
        <DoodleSparkle className="w-7 h-7" />
      </div>
      <div className="pointer-events-none absolute bottom-32 left-12 text-pink-300 opacity-60 hidden lg:block animate-float-reverse">
        <DoodleStar className="w-6 h-6" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-800 text-xs font-bold tracking-wide uppercase mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Bespoke Interactive Gifting</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.15]">
            Want Something Nobody Else Has? ✨
          </h1>

          <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every love story is unique. Your surprise website can be, too. Tell us your wildest idea, and we&apos;ll hand-craft an interactive experience made exclusively for your person.
          </p>

          {/* Pricing Highlight */}
          <div className="mt-8 inline-flex flex-col sm:flex-row sm:items-center gap-3 p-4 px-6 rounded-2xl bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-xs">
            <div className="flex items-baseline gap-2">
              <span className="text-xs uppercase font-bold text-neutral-500">Custom websites starting at</span>
              <span className="text-3xl font-black text-rose-600">₹{BRAND.customStartingPrice}</span>
            </div>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <p className="text-xs sm:text-sm text-neutral-600">
              Final quote confirmed manually depending on requested interactive features.
            </p>
          </div>

          {/* Instagram CTA */}
          <div className="mt-8">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>START YOUR CUSTOM SURPRISE →</span>
            </a>
          </div>
        </div>

        {/* Feature Possibilities Grid */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Endless Ways to Personalize ❤️
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600">
              Here are some ideas of what we can build into your custom website:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {customizationOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.title}
                  className="p-6 rounded-3xl bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-xs hover:shadow-lg hover:border-rose-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100/70 flex items-center justify-center text-rose-600 mb-4 border border-rose-200/70 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{opt.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-neutral-500 mt-5">
            *All features are subject to technical feasibility, timeline agreement, and final manual quotation.
          </p>
        </section>

        {/* Preparation Checklist */}
        <section className="mb-16 bg-white/90 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] border border-rose-200/80 p-8 sm:p-12 shadow-xl shadow-rose-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>Quick Checklist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                What to Prepare Before Messaging Us
              </h2>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Having these ready helps us understand your vision quickly and provide an accurate quote and turnaround timeline right away:
              </p>

              <ul className="mt-6 space-y-3">
                {preparationChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-rose-50/80 via-pink-50/60 to-rose-50/80 border border-rose-200/70 shadow-2xs text-center flex flex-col items-center justify-center">
              <span className="text-4xl mb-3">💌</span>
              <h3 className="text-lg font-bold text-neutral-900">
                Ready to bring your idea to life?
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm mb-6">
                Send us a direct message on Instagram. Tell us who it&apos;s for and what you have in mind!
              </p>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>DM US ON INSTAGRAM</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
