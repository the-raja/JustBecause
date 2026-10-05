"use client";

import { Search, X } from "lucide-react";

interface TemplateSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClear: () => void;
}

export default function TemplateSearch({
  searchQuery,
  onSearchChange,
  onClear,
}: TemplateSearchProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="pointer-events-none absolute left-4 text-neutral-400 flex items-center justify-center">
          <Search className="w-5 h-5 text-rose-400" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by occasion, person, or vibe..."
          aria-label="Search templates by occasion, person, or vibe"
          className="w-full pl-12 pr-11 py-3.5 sm:py-4 text-sm sm:text-base bg-white rounded-2xl border border-rose-200/90 text-neutral-800 placeholder-neutral-400 shadow-xs hover:border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 focus:outline-none transition-all"
        />

        {/* Clear Action Button */}
        {searchQuery && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear search input"
            className="absolute right-3.5 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
