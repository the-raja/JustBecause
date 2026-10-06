"use client";

import { Sparkles } from "lucide-react";

interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
      {categories.map((category) => {
        const isSelected = selectedCategory.toLowerCase() === category.toLowerCase();
        const isPremium = category.toLowerCase() === "premium";

        let buttonClasses = "";
        if (isSelected) {
          buttonClasses = isPremium
            ? "bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white font-bold shadow-sm shadow-rose-600/30 ring-2 ring-rose-300 active:scale-95"
            : "bg-rose-600 text-white shadow-sm shadow-rose-600/20 active:scale-95";
        } else {
          buttonClasses = isPremium
            ? "bg-gradient-to-r from-rose-50/95 to-pink-50/90 text-rose-800 border border-rose-300/90 hover:bg-rose-100/80 hover:border-rose-400 hover:text-rose-900 font-bold shadow-2xs"
            : "bg-white/90 backdrop-blur-xs text-neutral-700 border border-rose-200/80 hover:bg-rose-50/80 hover:border-rose-300 hover:text-rose-700 shadow-2xs";
        }

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isSelected}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 inline-flex items-center gap-1.5 cursor-pointer ${buttonClasses}`}
          >
            {isPremium && (
              <Sparkles
                className={`w-3.5 h-3.5 ${
                  isSelected ? "text-rose-200 fill-rose-200" : "text-rose-500 fill-rose-400"
                }`}
              />
            )}
            <span>{category}</span>
          </button>
        );
      })}
    </div>
  );
}
