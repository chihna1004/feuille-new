type Variant = 1 | 2 | 3

interface Props {
  variant?: Variant
}

export default function BotanicalDivider({ variant = 1 }: Props) {
  if (variant === 1) {
    return (
      <div className="botanical-divider reveal">
        <svg width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0"   y1="30" x2="78"  y2="30" stroke="#b8a899" strokeWidth="0.5" />
          <line x1="142" y1="30" x2="220" y2="30" stroke="#b8a899" strokeWidth="0.5" />
          <path d="M110 8 Q125 22 110 38 Q95 22 110 8Z" stroke="#8fa38a" strokeWidth="0.8" fill="none" />
          <line x1="110" y1="8" x2="110" y2="38" stroke="#8fa38a" strokeWidth="0.5" />
          <path d="M96 25 Q103 20 108 28"  stroke="#8fa38a" strokeWidth="0.6" fill="none" />
          <path d="M124 25 Q117 20 112 28" stroke="#8fa38a" strokeWidth="0.6" fill="none" />
          <circle cx="84"  cy="30" r="1.5" fill="#b8a899" />
          <circle cx="136" cy="30" r="1.5" fill="#b8a899" />
        </svg>
      </div>
    )
  }

  if (variant === 2) {
    return (
      <div className="botanical-divider reveal">
        <svg width="280" height="56" viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0"   y1="28" x2="100" y2="28" stroke="#b8a899" strokeWidth="0.5" />
          <line x1="180" y1="28" x2="280" y2="28" stroke="#b8a899" strokeWidth="0.5" />
          <path d="M115 40 Q140 28 165 40" stroke="#8fa38a" strokeWidth="0.7" fill="none" />
          <path d="M128 36 Q126 26 133 30" stroke="#8fa38a" strokeWidth="0.6" fill="none" />
          <path d="M140 32 Q138 22 145 26" stroke="#8fa38a" strokeWidth="0.6" fill="none" />
          <path d="M153 35 Q151 25 158 29" stroke="#8fa38a" strokeWidth="0.6" fill="none" />
          <circle cx="108" cy="28" r="1.5" fill="#b8a899" />
          <circle cx="172" cy="28" r="1.5" fill="#b8a899" />
        </svg>
      </div>
    )
  }

  // variant 3
  return (
    <div className="botanical-divider reveal">
      <svg width="240" height="52" viewBox="0 0 240 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0"   y1="26" x2="88"  y2="26" stroke="#b8a899" strokeWidth="0.5" />
        <line x1="152" y1="26" x2="240" y2="26" stroke="#b8a899" strokeWidth="0.5" />
        <circle cx="120" cy="26" r="5"  stroke="#8fa38a" strokeWidth="0.6" fill="none" />
        <line x1="120" y1="14" x2="120" y2="19" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="120" y1="33" x2="120" y2="38" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="108" y1="26" x2="113" y2="26" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="127" y1="26" x2="132" y2="26" stroke="#8fa38a" strokeWidth="0.5" />
        <path d="M112 18 Q116 22 120 18" stroke="#8fa38a" strokeWidth="0.5" fill="none" />
        <path d="M128 18 Q124 22 120 18" stroke="#8fa38a" strokeWidth="0.5" fill="none" />
        <circle cx="96"  cy="26" r="1.5" fill="#b8a899" />
        <circle cx="144" cy="26" r="1.5" fill="#b8a899" />
      </svg>
    </div>
  )
}
