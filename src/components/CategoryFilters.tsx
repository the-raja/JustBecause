"use client";

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
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isSelected}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 ${
              isSelected
                ? "bg-rose-600 text-white shadow-sm shadow-rose-600/20 active:scale-95"
                : "bg-white/90 backdrop-blur-xs text-neutral-700 border border-rose-200/80 hover:bg-rose-50/80 hover:border-rose-300 hover:text-rose-700 shadow-2xs"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
