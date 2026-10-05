import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "JUST BECAUSE ❤️ — Digital Surprises Made with Love",
    template: "%s | JUST BECAUSE ❤️",
  },
  description:
    "Discover personalized surprise websites for birthdays, love, anniversaries, friends, and family. Find a little way to make someone's day special. Little surprises. Big feelings. Starting at ₹49. ❤️",
  keywords: [
    "surprise website",
    "birthday surprise",
    "love website",
    "romantic surprise website",
    "digital gift",
    "anniversary surprise",
    "just because",
  ],
  authors: [{ name: "JUST BECAUSE" }],
  creator: "JUST BECAUSE",
  publisher: "JUST BECAUSE",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JUST BECAUSE",
    title: "JUST BECAUSE ❤️ — Digital Surprises Made with Love",
    description:
      "Discover personalized surprise websites for birthdays, love, anniversaries, friends, and family. Little surprises. Big feelings. Starting at ₹49. ❤️",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 800,
        alt: "JUST BECAUSE ❤️ — becoz you love him/her.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JUST BECAUSE ❤️ — Digital Surprises Made with Love",
    description:
      "Discover personalized surprise websites for birthdays, love, anniversaries, friends, and family. Little surprises. Big feelings. Starting at ₹49. ❤️",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-[#FFF6F8] text-[#1C1819] selection:bg-rose-200 selection:text-rose-900 antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
