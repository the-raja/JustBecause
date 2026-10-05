import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { templates, getFeaturedTemplates } from "@/data/templates";
import TemplateCard from "./TemplateCard";

export default function FeaturedTemplates() {
  const featured = getFeaturedTemplates(templates);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Template Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Pick a Surprise Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Explore a few of our favorite interactive surprises. Open a live demo to experience the magic before choosing your own.
          </p>
        </div>

        {/* 3 Featured Template Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12">
          {featured.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-2"
          >
            <span>VIEW ALL TEMPLATES</span>
            <ArrowRight className="w-4 h-4 text-rose-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
