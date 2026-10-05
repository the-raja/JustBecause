"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND } from "@/lib/constants";
import FloatingHearts from "./FloatingHearts";
import { DoodleHeart, DoodleSparkle } from "./Doodles";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does ordering work?",
      answer:
        "Browse our collection, preview the live demo, and message us on Instagram. We'll personally confirm your customization details, template price, preferred hosting duration, payment method, and delivery timeline.",
    },
    {
      question: "What is included in the template price?",
      answer:
        "The selected template website and 24 hours of live access are included in its displayed base price. Any requested personalization (such as names, messages, or photo replacements) will be confirmed with you for that specific template.",
    },
    {
      question: "Can I keep my website live for longer?",
      answer:
        "Yes! You can choose from our hosting extension plans: Weekly (₹99 for 7 days total), Monthly (₹199 for 30 days total), or Yearly (₹499 for 365 days total). The selected duration represents the total live hosting time and replaces the default 24-hour window.",
    },
    {
      question: "Can I customize an existing template?",
      answer:
        "Yes, basic personalization such as names, dates, custom love notes, and photo additions are usually available depending on the template structure. Substantial design changes or extra interactive features can be quoted individually.",
    },
    {
      question: "Can you create a completely custom website?",
      answer:
        "Absolutely. Custom websites start at ₹199. We can build entirely bespoke animations, couple quizzes, relationship milestones, polaroids, and special design themes. The final quote is confirmed manually based on your exact ideas.",
    },
    {
      question: "How early should I order?",
      answer:
        "We recommend ordering at least 7 days before your special occasion. If your event is in 3–6 days, message us to confirm slot availability. For urgent requests within 48 hours or same-day delivery, availability is strictly subject to manual studio confirmation.",
    },
    {
      question: "How will I receive my website?",
      answer:
        "Once your website is personalized and ready, we deliver a private, shareable web link directly via Instagram DM or email, along with high-resolution sharing instructions.",
    },
    {
      question: "Will I receive a QR code?",
      answer:
        "Yes! Alongside your personal website link, we provide a clean, scannable QR code graphic where applicable. You can print it on greeting cards, gift boxes, or letters for a magical physical-to-digital surprise.",
    },
    {
      question: "What happens when the hosting period ends?",
      answer:
        "The website will naturally go offline once your agreed hosting window (24 hours, Weekly, Monthly, or Yearly) concludes, unless you request an extension before the expiration date.",
    },
    {
      question: "How do payments work?",
      answer:
        "Payments are handled manually and securely after we agree on all details through Instagram DM. We provide standard digital payment methods (such as UPI) before beginning work on your website.",
    },
    {
      question: "How do I contact you?",
      answer: `You can reach out anytime by sending a direct message on Instagram to ${BRAND.instagramHandle} or by emailing us at ${BRAND.email}.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FFDDE4] via-[#FFF0E8] to-[#FFF6F8] min-h-screen relative overflow-hidden">
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

      {/* Doodles */}
      <div className="pointer-events-none absolute top-14 left-8 text-rose-300 opacity-60 hidden md:block animate-float-slow">
        <DoodleHeart className="w-10 h-10" />
      </div>
      <div className="pointer-events-none absolute top-24 right-10 text-amber-400 opacity-70 hidden md:block animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
            <span>Got Questions?</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions ❤️
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Everything you need to know about our surprise websites, hosting durations, and ordering process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-rose-300/90 bg-white/95 backdrop-blur-xs shadow-md shadow-rose-900/5"
                    : "border-rose-200/70 bg-white/85 backdrop-blur-xs hover:bg-white hover:border-rose-300 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-rose-100/70 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xs border border-rose-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="font-bold text-neutral-900 text-lg sm:text-xl">
              Still have a question?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-md">
              We&apos;re happy to help with your custom surprise idea anytime. Reach out and let&apos;s create something magical.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-rose-200/80 hover:bg-rose-50/70 text-neutral-700 hover:text-rose-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs"
            >
              <Mail className="w-4 h-4 text-rose-500" />
              <span>Email Us</span>
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
