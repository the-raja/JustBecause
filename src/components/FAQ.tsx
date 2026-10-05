"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND } from "@/lib/constants";

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
        "Choose a template, preview it, and message us on Instagram. We'll confirm the details, price, payment, and delivery timeline.",
    },
    {
      question: "What is included in the template price?",
      answer:
        "The selected template website and 24 hours of live access are included in its displayed price. Any additional personalization must be confirmed for that template.",
    },
    {
      question: "Can I keep my website live for longer?",
      answer:
        "Yes. Choose from the Weekly (₹99 for 7 days), Monthly (₹199 for 30 days), or Yearly (₹499 for 365 days) extension options, and confirm the hosting duration with us before payment.",
    },
    {
      question: "Can I customize the template?",
      answer:
        "Basic personalization may be available depending on the template. Major design changes or additional features may cost extra.",
    },
    {
      question: "Can you create a completely custom website?",
      answer:
        "Yes. Custom websites start at ₹199, with the final price based on your specific requirements and features.",
    },
    {
      question: "How early should I order?",
      answer:
        "We recommend ordering at least 7 days before your special date. Contact us first for urgent requests.",
    },
    {
      question: "How will I receive the website?",
      answer:
        "After your order is completed, we'll send your personal website link and QR code where applicable.",
    },
    {
      question: "What happens when the hosting period ends?",
      answer:
        "The website may go offline when the agreed hosting period ends unless an extension has been arranged.",
    },
    {
      question: "How do I contact you?",
      answer: `DM us on Instagram at ${BRAND.instagramHandle} or email ${BRAND.email}.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Everything you need to know about our surprise websites and ordering process.
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
                    ? "border-rose-300 bg-rose-50/30 shadow-xs"
                    : "border-neutral-200/80 bg-white hover:border-rose-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-rose-100/60 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
              Still have a question?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              We&apos;re happy to help with your custom surprise idea anytime.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 text-xs sm:text-sm font-semibold transition-all"
            >
              <Mail className="w-4 h-4 text-rose-500" />
              <span>Email Us</span>
            </a>
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-2xs transition-all"
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
