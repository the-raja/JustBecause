"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { BRAND } from "@/lib/constants";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Templates", href: "/templates" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Custom ✨", href: "/custom" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF4F7]/95 backdrop-blur-md shadow-xs border-b border-rose-200/80"
          : "bg-[#FFF4F7]/85 backdrop-blur-sm border-b border-rose-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-lg p-1"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden rounded-full ring-2 ring-rose-200 group-hover:ring-rose-300 transition-all">
              <Image
                src="/logo.png"
                alt="JUST BECAUSE logo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-pink-800 flex items-center gap-1.5">
                JUST BECAUSE
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500 inline-block animate-pulse-gently" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-rose-500 tracking-wider -mt-1 hidden xs:block">
                becoz you love him/her.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-sm ${
                    active
                      ? "text-rose-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-600"
                      : "text-neutral-700 hover:text-rose-600 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: DM TO ORDER */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold tracking-wide shadow-xs hover:shadow-md hover:shadow-rose-500/20 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM TO ORDER</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DM us on Instagram"
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-rose-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDFC] border-b border-rose-100 px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? "text-rose-600 bg-rose-50 font-bold"
                      : "text-neutral-800 hover:text-rose-600 hover:bg-rose-50/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-rose-600 text-white font-bold text-sm tracking-wide shadow-xs active:scale-98 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>DM TO ORDER</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
