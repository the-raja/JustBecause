import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Clock, Check, Sparkles, Info, ArrowRight, ShieldCheck, AlertCircle, Calendar } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND, HOSTING_EXTENSION_PLANS, ORDER_TIMING_POLICY } from "@/lib/constants";
import { DoodleSparkle, DoodleHeart } from "@/components/Doodles";
import FloatingHearts from "@/components/FloatingHearts";

export const metadata: Metadata = {
  title: "Pricing & Hosting Plans — Simple & Transparent",
  description:
    "Explore interactive surprises, 24-hour included live access, hosting extension plans (Weekly, Monthly, Yearly), and bespoke custom website pricing. No hidden fees.",
};

export default function PricingPage() {
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
        <DoodleHeart className="w-10 h-10" />
      </div>
      <div className="pointer-events-none absolute top-20 right-14 text-amber-400 opacity-70 hidden md:block animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Clock className="w-3.5 h-3.5" />
            <span>Transparent Pricing & Plans</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Choose Your Surprise ❤️
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every template&apos;s displayed base price includes <strong className="text-neutral-900 font-semibold">24 hours of live hosting</strong>.
            Optional extension plans keep your surprise active as long as you wish.
          </p>
        </div>

        {/* Section A: Template Grade Pricing */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-xs hover:shadow-md transition-shadow">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Template Grade Pricing
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 mb-6 leading-relaxed">
              Base template price includes 24 hours of live access from the moment of delivery.
            </p>
            <div className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-extrabold text-base sm:text-lg tracking-wide shadow-md shadow-rose-500/20">
              <Sparkles className="w-5 h-5 text-rose-100" />
              <span>PRICING STARTS FROM JUST RS 49 Onwards</span>
            </div>
            <div className="mt-5">
              <Link
                href="/templates"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 transition-colors"
              >
                <span>Browse all templates in gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section B: Hosting Extensions */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Hosting Extensions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Want to Keep the Surprise Longer? ❤️
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Every template includes 24 hours of live access in its displayed price. Choose a longer hosting plan when placing your order on Instagram.
            </p>

            {/* Total Duration Clarification */}
            <div className="mt-5 inline-flex items-center gap-2 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 text-left max-w-2xl mx-auto shadow-2xs">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Duration note:</strong> The duration listed represents the <em>total live hosting time</em> for your surprise website (it replaces the default 24-hour window rather than stacking on top of it).
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {HOSTING_EXTENSION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-white/95 via-rose-50/60 to-white/95 backdrop-blur-xs border-2 border-rose-500 shadow-xl shadow-rose-900/10 -translate-y-1"
                    : "bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-xs hover:shadow-lg hover:border-rose-300 hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose-600 text-white text-xs font-bold tracking-wide uppercase shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-neutral-900">{plan.name}</h3>
                    <span className="px-3 py-1 rounded-full bg-rose-100/70 text-rose-700 text-xs font-semibold">
                      {plan.duration}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-neutral-900">₹{plan.price}</span>
                      <span className="text-xs text-neutral-500 font-medium">/ total duration</span>
                    </div>
                    <p className="mt-1 text-xs text-rose-600 font-semibold">
                      {plan.duration} of uninterrupted live access
                    </p>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 border-t border-rose-100/80 pt-4">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Personalized live link active 24/7</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Scannable gift QR code provided</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Seamless phone and desktop access</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all active:scale-95 ${
                      plan.popular
                        ? "bg-rose-600 hover:bg-rose-700 text-white shadow-xs"
                        : "bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/60"
                    }`}
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Choose {plan.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section C: Custom Websites */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] border border-rose-200/80 p-8 sm:p-12 shadow-xl shadow-rose-900/5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Bespoke Digital Surprises</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Made Just for Them ✨
              </h2>

              <p className="mt-3 text-base text-neutral-600 leading-relaxed">
                Have an idea nobody else has? Tell us what you&apos;re imagining, and we&apos;ll create a website designed just for your special person.
              </p>

              <div className="mt-5 inline-flex items-baseline gap-2 p-3 px-5 rounded-2xl bg-white border border-rose-200/80 shadow-2xs">
                <span className="text-xs uppercase font-bold text-neutral-500">Starting at</span>
                <span className="text-3xl font-black text-rose-600">₹{BRAND.customStartingPrice}</span>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                The final quote depends on design complexity, requested interactive features, personalization volume, and hosting duration.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all"
                >
                  <span>REQUEST A CUSTOM QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/custom"
                  className="text-xs sm:text-sm font-semibold text-rose-600 hover:text-rose-700 underline underline-offset-4"
                >
                  Learn more about custom websites →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section D: Pricing Clarifications & Ordering Timeline Policy */}
        <section className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xs rounded-3xl border border-rose-200/80 p-6 sm:p-10 mb-12 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-rose-600 shrink-0" />
            <h3 className="text-xl font-bold text-neutral-900">
              Pricing Clarifications & Order Policies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-700 mb-8">
            <div className="p-4 rounded-2xl bg-white/95 border border-rose-200/70 shadow-2xs">
              <strong className="block font-bold text-neutral-900 mb-1">
                24 Hours Included by Default
              </strong>
              <span>
                Every template purchase comes with 24 hours of live hosting included in the base grade price.
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-rose-200/70 shadow-2xs">
              <strong className="block font-bold text-neutral-900 mb-1">
                Extension Plans are Separate
              </strong>
              <span>
                Longer hosting plans (Weekly, Monthly, Yearly) replace the default window and are selected during DM confirmation.
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-rose-200/70 shadow-2xs">
              <strong className="block font-bold text-neutral-900 mb-1">
                Customization & Feature Quotes
              </strong>
              <span>
                Minor text tweaks may be included; advanced design modifications or custom features are quoted manually before payment.
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 border border-rose-200/70 shadow-2xs">
              <strong className="block font-bold text-neutral-900 mb-1">
                Manual Confirmation Before Payment
              </strong>
              <span>
                No payment or binding order is processed on this website. All orders, timelines, and payments are confirmed personally on Instagram.
              </span>
            </div>
          </div>

          {/* Delivery Policy Breakdown */}
          <div className="pt-6 border-t border-neutral-200">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-amber-600" />
              <h4 className="font-bold text-neutral-900 text-sm sm:text-base">
                Recommended Ordering Timeline ({ORDER_TIMING_POLICY.noticeText})
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs mb-6">
              {ORDER_TIMING_POLICY.windows.map((w) => (
                <div key={w.window} className="p-3 rounded-xl bg-white/95 border border-rose-200/70 shadow-2xs">
                  <span className="font-bold text-rose-600 block mb-0.5">{w.badge}</span>
                  <strong className="text-neutral-900 block">{w.window}</strong>
                  <span className="text-neutral-500 text-[11px] leading-snug block mt-1">
                    {w.description}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-neutral-600 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Estimated planning turnaround: Premade templates usually take 1–3 days, customized templates 3–5 days, and fully custom websites 5–7+ days. These are planning estimates, not guaranteed rush deadlines.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
