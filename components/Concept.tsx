const PILLARS = [
  {
    num: '01 — MATERIAL',
    title: '素材',
    desc: '肌と爪に寄り添う、厳選されたオーガニック素材。安心して身を委ねられる処方にこだわります。',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4 Q36 14 36 28 Q36 40 24 44 Q12 40 12 28 Q12 14 24 4Z" stroke="#8fa38a" strokeWidth="0.8" fill="none" />
        <path d="M24 4 L24 44" stroke="#8fa38a" strokeWidth="0.5" />
        <path d="M14 18 Q18 15 22 20" stroke="#8fa38a" strokeWidth="0.5" fill="none" />
        <path d="M34 18 Q30 15 26 20" stroke="#8fa38a" strokeWidth="0.5" fill="none" />
      </svg>
    ),
  },
  {
    num: '02 — TECHNIQUE',
    title: '技術',
    desc: '10年以上の経験を積んだ専属スタイリストが担当。トレンドと長持ちを両立する独自の施術法。',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#8fa38a" strokeWidth="0.8" fill="none" />
        <circle cx="24" cy="24" r="6"  stroke="#8fa38a" strokeWidth="0.6" fill="none" />
        <line x1="24" y1="8"  x2="24" y2="18" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="24" y1="30" x2="24" y2="40" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="8"  y1="24" x2="18" y2="24" stroke="#8fa38a" strokeWidth="0.5" />
        <line x1="30" y1="24" x2="40" y2="24" stroke="#8fa38a" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    num: '03 — SPACE',
    title: '空間',
    desc: '完全個室・完全予約制。植物と自然光に包まれた、静かな隠れ家でのひとときをご提供します。',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="28" rx="1" stroke="#8fa38a" strokeWidth="0.8" fill="none" />
        <line x1="8" y1="18" x2="40" y2="18" stroke="#8fa38a" strokeWidth="0.5" />
        <path d="M20 28 Q24 24 28 28" stroke="#8fa38a" strokeWidth="0.5" fill="none" />
        <line x1="24" y1="10" x2="24" y2="6"  stroke="#8fa38a" strokeWidth="0.6" />
        <line x1="20" y1="6"  x2="28" y2="6"  stroke="#8fa38a" strokeWidth="0.5" />
      </svg>
    ),
  },
]

export default function Concept() {
  return (
    <section id="concept">
      <div className="container">
        <div className="section-label reveal">
          <span className="en">Our Story</span>
          <span className="ja">わたしたちのこだわり</span>
        </div>

        <div className="concept-pillars">
          {PILLARS.map((p, i) => (
            <div key={p.num} className={`pillar reveal delay-${i + 1}`}>
              <div className="pillar-icon">{p.icon}</div>
              <span className="pillar-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
