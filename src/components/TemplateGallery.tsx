"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Heart, RefreshCw, Sparkles } from "lucide-react";
import {
  templates,
  getCategories,
  filterTemplates,
  sortTemplates,
  SortOption,
} from "@/data/templates";
import TemplateCard from "./TemplateCard";
import TemplateSearch from "./TemplateSearch";
import CategoryFilters from "./CategoryFilters";
import FloatingHearts from "./FloatingHearts";
import { DoodleHeart, DoodleSparkle } from "./Doodles";

interface TemplateGalleryProps {
  title?: string;
  description?: string;
  badge?: string;
}

export default function TemplateGallery({
  title = "Find Your Perfect Surprise ❤️",
  description = "Browse interactive digital gifts, try the live demos, and choose a little experience for someone special.",
  badge = "Interactive Template Gallery",
}: TemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");

  // Dynamically compute unique categories from template data
  const categories = useMemo(() => getCategories(templates), []);

  // Filter templates based on search query and category, then apply sorting
  const displayedTemplates = useMemo(() => {
    const filtered = filterTemplates(templates, searchQuery, selectedCategory);
    return sortTemplates(filtered, sortBy);
  }, [searchQuery, selectedCategory, sortBy]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const isFiltered = searchQuery.trim().length > 0 || selectedCategory !== "All";

  return (
    <section id="templates" className="py-14 sm:py-20 bg-gradient-to-b from-[#FFDDE4] via-[#FFF0E8] to-[#FFF6F8] min-h-screen relative overflow-hidden">
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

      {/* Cute Doodles */}
      <div className="pointer-events-none absolute top-16 left-8 text-rose-300 opacity-60 hidden md:block animate-float-slow">
        <DoodleHeart className="w-10 h-10" />
      </div>
      <div className="pointer-events-none absolute top-28 right-10 text-amber-400 opacity-70 hidden md:block animate-pulse-gently">
        <DoodleSparkle className="w-6 h-6" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Controls: Search & Category Chips */}
        <div className="space-y-5 mb-10 sm:mb-12">
          <TemplateSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />

          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Results Summary & Sort Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-7xl mx-auto px-2 text-xs sm:text-sm text-neutral-500">
            {/* Left: Results count & optional reset button */}
            <div className="flex items-center gap-3">
              <span className="font-medium">
                Showing{" "}
                <strong className="text-neutral-800 font-bold">
                  {displayedTemplates.length}
                </strong>{" "}
                {displayedTemplates.length === 1 ? "surprise template" : "surprise templates"}
                {isFiltered && (
                  <span className="text-neutral-500 ml-1">
                    (filtered from {templates.length})
                  </span>
                )}
              </span>

              {isFiltered && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-sm cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset filters</span>
                </button>
              )}
            </div>

            {/* Right: Sort by Dropdown */}
            <div className="flex items-center self-end sm:self-auto gap-2">
              <label
                htmlFor="template-sort"
                className="text-neutral-600 font-semibold text-xs sm:text-sm whitespace-nowrap"
              >
                Sort by:
              </label>
              <div className="relative inline-block">
                <select
                  id="template-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  aria-label="Sort surprise templates"
                  className="appearance-none bg-white/95 backdrop-blur-xs border border-rose-200/80 rounded-xl pl-3.5 pr-8 py-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:border-rose-300 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400/20 shadow-2xs cursor-pointer transition-all"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        {displayedTemplates.length > 0 ? (
          <div
            className={`grid gap-6 sm:gap-8 mx-auto ${
              displayedTemplates.length === 1
                ? "grid-cols-1 max-w-md"
                : displayedTemplates.length === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl"
            }`}
          >
            {displayedTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 sm:py-20 px-4 max-w-md mx-auto bg-white/85 backdrop-blur-xs rounded-3xl border border-dashed border-rose-300 shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-4 border border-rose-200/80 shadow-2xs">
              <Heart className="w-7 h-7 fill-rose-500 animate-pulse-gently" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-800">
              No surprises found just yet. 💌
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Try a different keyword or explore all our templates.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>CLEAR FILTERS</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
