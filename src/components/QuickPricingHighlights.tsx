import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, QrCode, Tag } from "lucide-react";

export default function QuickPricingHighlights() {
  const highlights = [
    {
      icon: Tag,
      title: "Affordable Surprises",
      desc: "Interactive website templates starting at just ₹49.",
    },
    {
      icon: Clock,
      title: "24h Live Access Included",
      desc: "Every base template price includes 24 hours of live hosting.",
    },
    {
      icon: ShieldCheck,
      title: "Flexible Extension Plans",
      desc: "Keep the surprise live for 7 days, 30 days, or a whole year.",
    },
    {
      icon: QrCode,
      title: "Link + QR Code",
      desc: "Delivered directly with your private link and ready-to-share QR code.",
    },
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-t border-b border-rose-100/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Transparent, Simple Gifting
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600">
            No hidden subscriptions or checkout surprises. Everything is clearly explained.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-rose-100 flex items-center justify-center text-rose-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs sm:text-sm font-bold tracking-wide border border-rose-200/80 transition-all active:scale-95"
          >
            <span>VIEW DETAILED PRICING & HOSTING PLANS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
