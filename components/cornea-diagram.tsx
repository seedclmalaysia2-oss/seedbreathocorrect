type Props = {
  className?: string;
  ariaLabel?: string;
};

export function CorneaDiagram({
  className,
  ariaLabel = "Cross-section of an eye showing the Breath-O Correct lens resting on the cornea during overnight wear",
}: Props) {
  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 640 800"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="cornea-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0c4a6e" />
          <stop offset="55%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        <radialGradient id="cornea-sclera" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </radialGradient>
        <linearGradient id="cornea-lens" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.85" />
        </linearGradient>
        <filter id="cornea-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g transform="translate(320 420)">
        <ellipse cx="0" cy="20" rx="240" ry="14" fill="#0f172a" opacity="0.08" filter="url(#cornea-shadow)" />

        <circle r="220" fill="url(#cornea-sclera)" />
        <circle r="220" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />

        <circle r="120" fill="url(#cornea-iris)" />
        <circle r="120" fill="none" stroke="#0f172a" strokeWidth="1" opacity="0.6" />

        <circle r="46" fill="#020617" />
        <circle cx="-14" cy="-16" r="14" fill="#ffffff" opacity="0.35" />
        <circle cx="22" cy="14" r="6" fill="#ffffff" opacity="0.18" />

        <path
          d="M -210 -40 Q 0 -200 210 -40"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          opacity="0.5"
          strokeDasharray="2 4"
        />

        <path
          d="M -200 -36 Q 0 -176 200 -36 L 200 -22 Q 0 -158 -200 -22 Z"
          fill="url(#cornea-lens)"
          stroke="#0284c7"
          strokeWidth="1.5"
        />
        <path
          d="M -200 -36 Q 0 -176 200 -36"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.7"
        />
      </g>

      <g stroke="#475569" strokeWidth="1" fill="none">
        <path d="M 95 240 L 215 280" />
        <path d="M 95 425 L 200 425" />
        <path d="M 95 620 L 235 540" />
      </g>

      <g fill="#0f172a" fontFamily="system-ui,-apple-system,Segoe UI,sans-serif">
        <g transform="translate(36 222)">
          <text fontSize="13" fontWeight="600" letterSpacing="0.04em">
            BREATH-O CORRECT
          </text>
          <text y="18" fontSize="11" fill="#64748b">
            Rigid gas permeable lens
          </text>
          <text y="34" fontSize="11" fill="#64748b">
            worn during sleep
          </text>
        </g>
        <g transform="translate(36 412)">
          <text fontSize="13" fontWeight="600" letterSpacing="0.04em">
            CORNEA
          </text>
          <text y="18" fontSize="11" fill="#64748b">
            Gently reshaped
          </text>
          <text y="34" fontSize="11" fill="#64748b">
            for daytime clarity
          </text>
        </g>
        <g transform="translate(36 612)">
          <text fontSize="13" fontWeight="600" letterSpacing="0.04em">
            PUPIL
          </text>
          <text y="18" fontSize="11" fill="#64748b">
            Light enters
          </text>
          <text y="34" fontSize="11" fill="#64748b">
            in correct focus
          </text>
        </g>
      </g>
    </svg>
  );
}
