import type { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — How It Works, Pricing & Delivery",
  description:
    "Find answers about ordering digital surprise websites, 24-hour included access, hosting extension plans, personalization options, QR codes, and turnaround times.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQ />
    </main>
  );
}
