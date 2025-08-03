export default function FaviconCoin() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Основной корпус монеты */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="url(#faviconGradient)"
        stroke="#FFD700"
        strokeWidth="1"
      />

      {/* Внутренний круг */}
      <circle
        cx="16"
        cy="16"
        r="11"
        fill="url(#faviconInner)"
        stroke="#4FC3F7"
        strokeWidth="0.5"
        opacity="0.8"
      />

      {/* Символ F */}
      <g transform="translate(16, 16)">
        <path
          d="M -3 -6 L -3 6 M -3 -6 L 3 -6 M -3 -1 L 2 -1"
          stroke="#1976D2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* Декоративные точки */}
      <circle cx="16" cy="5" r="0.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="16" cy="27" r="0.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="5" cy="16" r="0.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="27" cy="16" r="0.5" fill="#FFFFFF" opacity="0.8" />

      {/* Блик */}
      <ellipse
        cx="13"
        cy="12"
        rx="3"
        ry="4"
        fill="url(#faviconHighlight)"
        opacity="0.4"
        transform="rotate(-30 13 12)"
      />

      {/* Градиенты */}
      <defs>
        <radialGradient id="faviconGradient" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#B3E5FC" />
          <stop offset="100%" stopColor="#4FC3F7" />
        </radialGradient>

        <radialGradient id="faviconInner" cx="0.4" cy="0.4">
          <stop offset="0%" stopColor="#FFFDE7" />
          <stop offset="60%" stopColor="#FFF176" />
          <stop offset="100%" stopColor="#FFD54F" />
        </radialGradient>

        <radialGradient id="faviconHighlight" cx="0.5" cy="0.2">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}