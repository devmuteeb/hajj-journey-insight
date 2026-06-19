// Decorative SVG ornaments for an Islamic-style framing system

export function Arch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} aria-hidden>
      <path d="M10 250 V120 Q10 10 100 10 Q190 10 190 120 V250" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M22 250 V124 Q22 22 100 22 Q178 22 178 124 V250" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

export function Corner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden>
      <path d="M0 30 Q0 0 30 0 M0 18 Q0 6 12 6 M6 30 Q6 6 30 6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="30" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}

export function Star8({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="20" y="20" width="60" height="60" />
        <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="6" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Divider2() {
  return (
    <div className="flex items-center justify-center gap-3 my-6 text-gold">
      <span className="h-px w-12 bg-current opacity-60" />
      <Star8 size={18} />
      <span className="h-px w-32 bg-current opacity-60" />
      <Star8 size={14} className="opacity-70" />
      <span className="h-px w-12 bg-current opacity-60" />
    </div>
  );
}

export function OrnamentBand({ className = "" }: { className?: string }) {
  // a repeating arabesque band
  return (
    <svg viewBox="0 0 400 24" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <pattern id="arab" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 12 Q10 0 20 12 T40 12" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="12" r="1.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="400" height="24" fill="url(#arab)" />
    </svg>
  );
}
