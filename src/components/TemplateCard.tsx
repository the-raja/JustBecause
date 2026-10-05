"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Heart, Sparkles } from "lucide-react";
import { Template } from "@/data/templates";
import { BRAND } from "@/lib/constants";

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-white/90 backdrop-blur-xs rounded-3xl border border-rose-200/70 shadow-xs hover:shadow-xl hover:border-rose-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Card Visual / Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/60 to-rose-100/30">
        {!imageError ? (
          <Image
            src={template.image}
            alt={`${template.title} interactive website preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={() => setImageError(true)}
            priority={false}
          />
        ) : (
          /* Graceful Polished Fallback when screenshot is pending */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-rose-50/90 via-pink-50/60 to-amber-50/40">
            <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center text-rose-500 mb-3 border border-rose-100">
              <Sparkles className="w-6 h-6 animate-pulse-gently" />
            </div>
            <span className="text-base font-bold text-neutral-800 line-clamp-1">
              {template.title}
            </span>
            <span className="text-xs text-rose-600 font-semibold mt-1">
              Interactive Live Demo
            </span>
            <div className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-rose-200/60 text-[11px] font-medium text-neutral-600 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Click &quot;View Live&quot; to test</span>
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-neutral-800 text-[11px] font-bold tracking-wide shadow-2xs border border-rose-100/60">
            {template.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-rose-600/95 backdrop-blur-xs text-white text-[11px] font-bold tracking-wide shadow-2xs">
            {template.grade}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-rose-600 transition-colors line-clamp-1">
            {template.title}
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-2">
            {template.description}
          </p>
        </div>

        {/* Price & Action Area */}
        <div className="mt-5 pt-4 border-t border-rose-100/70">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-2xl font-black text-neutral-900 tracking-tight">
                ₹{template.price}
              </span>
              <span className="text-xs text-neutral-600 font-medium ml-1.5">
                (incl. 24h live access)
              </span>
            </div>
          </div>

          {/* Action Buttons: VIEW LIVE ↗ and GET THIS NOW ❤️ */}
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={template.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${template.title}`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-rose-200/80 bg-white hover:bg-rose-50/70 hover:border-rose-300 text-neutral-700 hover:text-rose-700 text-xs sm:text-sm font-semibold shadow-2xs active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>VIEW LIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${template.title} on Instagram`}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-md hover:shadow-rose-600/20 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <span>GET THIS NOW</span>
              <Heart className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
