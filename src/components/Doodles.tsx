export function DoodleHeart({ className = "w-6 h-6 text-rose-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 33 C14 27, 4 19, 7 11 C9 5, 17 6, 20 12 C23 6, 31 5, 33 11 C36 19, 26 27, 20 33 Z" />
    </svg>
  );
}

export function DoodleSparkle({ className = "w-5 h-5 text-amber-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0 C12 6, 18 12, 24 12 C18 12, 12 18, 12 24 C12 18, 6 12, 0 12 C6 12, 12 6, 12 0 Z" />
    </svg>
  );
}

export function DoodleStar({ className = "w-4 h-4 text-pink-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2 L14.5 8.5 L21 10 L16 14.5 L17.5 21 L12 17.5 L6.5 21 L8 14.5 L3 10 L9.5 8.5 Z" />
    </svg>
  );
}

export function DoodleBow({ className = "w-8 h-8 text-rose-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Center knot */}
      <circle cx="24" cy="18" r="4.5" fill="currentColor" />
      {/* Left loop */}
      <path d="M20 18 C10 8, 4 12, 6 20 C8 26, 18 22, 20 18 Z" />
      {/* Right loop */}
      <path d="M28 18 C38 8, 44 12, 42 20 C40 26, 30 22, 28 18 Z" />
      {/* Ribbons */}
      <path d="M22 22 Q17 32, 13 34" />
      <path d="M26 22 Q31 32, 35 34" />
    </svg>
  );
}

export function DoodleFlower({ className = "w-6 h-6 text-pink-400" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="3.5" fill="#fbcfe8" />
      <circle cx="16" cy="9" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="23" cy="16" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="16" cy="23" r="4" fill="currentColor" fillOpacity="0.25" />
      <circle cx="9" cy="16" r="4" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}
