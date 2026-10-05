import { Sparkles, HeartHandshake, QrCode } from "lucide-react";
import { DoodleHeart, DoodleSparkle } from "./Doodles";

export default function ProductExplainer() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Interactive Experiences",
      desc: "More than a regular greeting card. Play mini-games, flip love letters, and explore starry animations together.",
    },
    {
      icon: HeartHandshake,
      title: "Personal Touches",
      desc: "Customized with your names, special dates, cherished photos, memories, and heartfelt messages.",
    },
    {
      icon: QrCode,
      title: "A Link Worth Sharing",
      desc: "Send the surprise instantly via a private link, complete with a scannable gift QR code where applicable.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FFF3F6] via-[#FFEAF1] to-[#FFF2F6] border-t border-b border-rose-200/60 relative overflow-hidden">
      {/* Central soft ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-300/35 via-pink-200/25 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* Decorative doodle accents */}
      <div className="pointer-events-none absolute -top-4 right-12 text-rose-300 opacity-60 hidden sm:block animate-float-slow">
        <DoodleHeart className="w-12 h-12" />
      </div>
      <div className="pointer-events-none absolute bottom-4 left-10 text-amber-400 opacity-70 hidden sm:block animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            A little website. A whole lot of feelings. ❤️
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A digital surprise made just for someone special. Add personal memories, messages, and interactive moments, then share the link and make their day unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/85 backdrop-blur-xs hover:bg-white/95 border border-rose-200/70 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100/70 shadow-2xs border border-rose-200/70 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{b.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
