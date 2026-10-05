import { Heart, Search, MessageCircle, Gift, Calendar, AlertCircle, Clock } from "lucide-react";
import { ORDER_TIMING_POLICY } from "@/lib/constants";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Pick Your Surprise",
      description:
        "Browse the collection, find a template you love, and preview its actual live demo on your phone or desktop.",
      icon: Search,
    },
    {
      number: "02",
      title: "DM Us ❤️",
      description:
        "Message us on Instagram with the template name, your special date, preferred hosting duration, and personalization details.",
      icon: MessageCircle,
    },
    {
      number: "03",
      title: "Get Your Link",
      description:
        "After the details, payment, and delivery timeline are confirmed, receive your personal website link and QR code where applicable.",
      icon: Gift,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-rose-50/30 border-t border-rose-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            From discovering a template to sending an unforgettable moment.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-3xl p-6 sm:p-8 border border-rose-100/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-rose-500 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Emotional Closing Banner */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-lg sm:text-xl font-extrabold text-rose-600 bg-white/90 px-6 py-3 rounded-full border border-rose-200/80 shadow-2xs">
            <span>You send it. They smile.</span>
            <Heart className="w-5 h-5 fill-rose-500 animate-pulse-gently" />
          </p>
        </div>

        {/* Order and Delivery Policy Section */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto bg-white rounded-3xl border border-rose-200/80 p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                Recommended Order Timing & Policy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                {ORDER_TIMING_POLICY.noticeText}
              </p>
            </div>
          </div>

          {/* Ordering Windows Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {ORDER_TIMING_POLICY.windows.map((win) => (
              <div
                key={win.window}
                className="p-4 rounded-2xl bg-neutral-50/70 border border-neutral-200/70 text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                    {win.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-800">{win.window}</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {win.description}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery Estimates Table / List */}
          <div className="pt-6 border-t border-neutral-100">
            <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-neutral-500" />
              <span>Estimated Delivery Timelines (Planning Estimates, Not Guarantees)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {ORDER_TIMING_POLICY.deliveryEstimates.map((est) => (
                <div
                  key={est.type}
                  className="p-3.5 rounded-xl bg-rose-50/40 border border-rose-100"
                >
                  <strong className="block text-neutral-800 font-bold mb-0.5">
                    {est.type}
                  </strong>
                  <span className="text-rose-600 font-extrabold text-sm block mb-1">
                    {est.time}
                  </span>
                  <span className="text-neutral-500 leading-snug">{est.note}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-neutral-500 bg-amber-50/50 p-3 rounded-xl border border-amber-200/50">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                We confirm all delivery dates manually with you on Instagram before starting work. If we cannot meet a requested deadline, we communicate that clearly upfront before accepting the order.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
