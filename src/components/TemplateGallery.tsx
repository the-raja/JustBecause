"use client";

import { useState, useMemo } from "react";
import { Heart, RefreshCw, Sparkles } from "lucide-react";
import { templates, getCategories, filterTemplates } from "@/data/templates";
import TemplateCard from "./TemplateCard";
import TemplateSearch from "./TemplateSearch";
import CategoryFilters from "./CategoryFilters";

export default function TemplateGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically compute unique categories from template data
  const categories = useMemo(() => getCategories(templates), []);

  // Filter templates based on search query and category
  const filteredTemplates = useMemo(() => {
    return filterTemplates(templates, searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const isFiltered = searchQuery.trim().length > 0 || selectedCategory !== "All";

  return (
    <section id="templates" className="py-16 sm:py-24 bg-white/70 border-t border-b border-rose-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Template Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Pick a Surprise Experience
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Browse our hand-crafted interactive websites. Click &ldquo;VIEW LIVE&rdquo; to test them in real-time.
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

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between max-w-6xl mx-auto px-2 text-xs sm:text-sm text-neutral-500">
            <span className="font-medium">
              Showing{" "}
              <strong className="text-neutral-800 font-bold">
                {filteredTemplates.length}
              </strong>{" "}
              {filteredTemplates.length === 1 ? "surprise template" : "surprise templates"}
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
                className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 rounded-sm"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Template Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 sm:py-20 px-4 max-w-md mx-auto bg-rose-50/50 rounded-3xl border border-dashed border-rose-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-4">
              <Heart className="w-7 h-7 fill-rose-500" />
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
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold shadow-xs transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
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
