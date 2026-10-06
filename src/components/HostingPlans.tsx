import { Clock, Check, Sparkles, Info } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND, HOSTING_EXTENSION_PLANS } from "@/lib/constants";

export default function HostingPlans() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Hosting & Duration Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Want to Keep the Surprise Longer? ❤️
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every template comes with <strong className="text-neutral-900 font-semibold">24 hours of live access</strong> included in its displayed price.
            <br className="hidden sm:inline" /> Want your special surprise to stay online longer? Choose an extension plan.
          </p>

          {/* Important Duration Clarification Callout */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 text-left">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Note on duration:</strong> The duration listed represents the total live hosting time for your website (it replaces the 24-hour default window upon selection).
            </span>
          </div>
        </div>

        {/* Extension Plans Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {HOSTING_EXTENSION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-rose-50/70 via-white to-rose-50/40 border-2 border-rose-500 shadow-xl shadow-rose-900/5 -translate-y-1"
                  : "bg-white border border-rose-100/90 shadow-xs hover:shadow-md hover:border-rose-200"
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
                  <p className="mt-1 text-xs text-rose-600 font-medium">
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
                    <span>Seamless mobile & desktop performance</span>
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

        {/* Template Grade Pricing Reference */}
        <div className="mt-16 sm:mt-20 max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-50/80 border border-rose-200/70 text-center shadow-xs">
          <h4 className="text-lg sm:text-xl font-bold text-neutral-900">
            Template Grade Pricing
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 mb-5">
            Base template price includes 24 hours of live access from the moment of delivery.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-extrabold text-sm tracking-wide shadow-xs">
            PRICING STARTS FROM JUST RS 49 Onwards
          </div>
        </div>
      </div>
    </section>
  );
}
