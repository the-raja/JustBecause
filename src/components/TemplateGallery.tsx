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

interface PriceTierConfig {
  price: number;
  heading: string;
  isPremium?: boolean;
}

const PRICE_TIERS: PriceTierConfig[] = [
  {
    price: 49,
    heading: "Little Surprises, Big Feelings ❤️",
    isPremium: false,
  },
  {
    price: 69,
    heading: "A Little More Love 💗",
    isPremium: false,
  },
  {
    price: 99,
    heading: "Beautifully Extra Surprises ✨",
    isPremium: false,
  },
  {
    price: 149,
    heading: "The Premium Love Collection 💖",
    isPremium: true,
  },
];

export default function TemplateGallery({
  title = "Find Your Perfect Surprise ❤️",
  description = "Browse interactive digital gifts, try the live demos, and choose a little experience for someone special.",
  badge = "Interactive Template Gallery",
}: TemplateGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [expandedTiers, setExpandedTiers] = useState<Record<number, boolean>>({});

  // Reset expansion states when search query or selected category changes (React 19 pattern)
  const [prevFilters, setPrevFilters] = useState({ query: searchQuery, category: selectedCategory });
  if (prevFilters.query !== searchQuery || prevFilters.category !== selectedCategory) {
    setPrevFilters({ query: searchQuery, category: selectedCategory });
    setExpandedTiers({});
  }

  // Dynamically compute unique categories from template data
  const categories = useMemo(() => getCategories(templates), []);

  // Filter templates based on search query and category, then apply sorting
  const displayedTemplates = useMemo(() => {
    const filtered = filterTemplates(templates, searchQuery, selectedCategory);
    return sortTemplates(filtered, sortBy);
  }, [searchQuery, selectedCategory, sortBy]);

  // Ensure sorting and price sections behave consistently:
  // Ascending/relevance keeps exact order [49, 69, 99, 149], descending inverts tier order
  const activeTiers = useMemo(() => {
    if (sortBy === "price-desc") {
      return [...PRICE_TIERS].reverse();
    }
    return PRICE_TIERS;
  }, [sortBy]);

  // Group matching templates into their respective price tiers
  const tierSections = useMemo(() => {
    return activeTiers
      .map((tier) => {
        const tierTemplates = displayedTemplates.filter((t) => t.price === tier.price);
        return {
          ...tier,
          tierTemplates,
        };
      })
      .filter((tier) => tier.tierTemplates.length > 0); // Hide a price section when no templates match it
  }, [activeTiers, displayedTemplates]);

  const toggleTier = (price: number) => {
    setExpandedTiers((prev) => ({
      ...prev,
      [price]: !prev[price],
    }));
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setExpandedTiers({});
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

        {/* Price-Tier Grouped Sections or Empty State */}
        {tierSections.length > 0 ? (
          <div className="space-y-14 sm:space-y-18">
            {tierSections.map((tier) => {
              const isExpanded = Boolean(expandedTiers[tier.price]);
              const visibleTemplates = isExpanded
                ? tier.tierTemplates
                : tier.tierTemplates.slice(0, 6);
              const hasMore = tier.tierTemplates.length > 6;

              return (
                <section
                  key={tier.price}
                  id={`tier-${tier.price}`}
                  aria-label={tier.heading}
                  className="rounded-3xl bg-white/50 backdrop-blur-xs border border-white/70 p-5 sm:p-8 shadow-xs"
                >
                  {/* Tier Section Heading */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pb-4 mb-6 sm:mb-8 border-b border-rose-200/70">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-rose-600 text-white shadow-2xs tracking-wide">
                          ₹{tier.price}
                        </span>
                        {tier.isPremium && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider bg-rose-100 text-rose-700 border border-rose-200 shadow-2xs uppercase">
                            PREMIUM
                          </span>
                        )}
                        <span className="text-xs font-bold text-neutral-500 bg-white/80 px-2.5 py-0.5 rounded-full border border-rose-100 shadow-2xs">
                          {tier.tierTemplates.length}{" "}
                          {tier.tierTemplates.length === 1 ? "surprise" : "surprises"}
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                        {tier.heading}
                      </h2>
                    </div>

                    {hasMore && (
                      <span className="text-xs text-neutral-500 font-medium">
                        Showing {visibleTemplates.length} of {tier.tierTemplates.length}
                      </span>
                    )}
                  </div>

                  {/* Grid of Templates in this tier */}
                  <div
                    className={`grid gap-6 sm:gap-8 ${
                      visibleTemplates.length === 1
                        ? "grid-cols-1 max-w-md mx-auto sm:mx-0"
                        : visibleTemplates.length === 2
                        ? "grid-cols-1 sm:grid-cols-2 max-w-3xl"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {visibleTemplates.map((template) => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                  </div>

                  {/* Show More / Show Less Button */}
                  {hasMore && (
                    <div className="mt-8 sm:mt-10 text-center">
                      <button
                        type="button"
                        onClick={() => toggleTier(tier.price)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/95 hover:bg-white text-neutral-800 hover:text-rose-600 font-bold text-sm border border-rose-200/90 hover:border-rose-300 shadow-2xs hover:shadow-xs transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                      >
                        <span>{isExpanded ? "Show Less" : "Show More"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-rose-500" : "text-neutral-500"
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </section>
              );
            })}
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
