const INFO = [
  { dt: 'OPEN HOURS',       dd: '10:00 – 20:00（最終受付 18:30）' },
  { dt: 'CLOSED',           dd: '毎週火曜日・第3水曜日' },
  { dt: 'NEAREST STATION',  dd: '東京メトロ・代官山駅 徒歩3分\nJR渋谷駅 徒歩12分' },
  { dt: 'ADDRESS',          dd: '〒150-0033\n東京都渋谷区猿楽町 1-XX\nFeuille Building 2F' },
  { dt: 'RESERVATION',      dd: '完全予約制・LINEまたはお電話にて' },
]

function LineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="5" fill="white" fillOpacity="0.25" />
      <path
        d="M16.5 9.1C16.5 6.07 13.59 3.6 10 3.6S3.5 6.07 3.5 9.1c0 2.72 2.41 5 5.67 5.43.22.05.52.15.6.34.07.17.04.44.02.61l-.1.58c-.03.17-.14.67.59.36.73-.3 3.94-2.32 5.38-3.97.99-1.09 1.84-2.44 1.84-3.35z"
        fill="white"
      />
      <path
        d="M8.26 10.54H7.12V8.18a.39.39 0 00-.78 0v2.75c0 .22.17.39.39.39h1.53c.22 0 .39-.17.39-.39s-.17-.39-.39-.39zM9.03 7.79a.39.39 0 00-.39.39v2.75c0 .22.17.39.39.39s.39-.17.39-.39V8.18a.39.39 0 00-.39-.39zM12.51 7.79a.39.39 0 00-.39.39v1.63l-1.25-1.85a.39.39 0 00-.72.22v2.75c0 .22.17.39.39.39s.39-.17.39-.39V9.3l1.25 1.84c.07.11.2.18.33.18.04 0 .08 0 .11-.02.16-.05.28-.2.28-.37V8.18a.39.39 0 00-.39-.39z"
        fill="#06C755"
      />
    </svg>
  )
}

export default function Access() {
  return (
    <section id="access">
      <div className="container">
        <div className="section-label reveal">
          <span className="en">Access</span>
          <span className="ja">ご予約・アクセス</span>
        </div>

        <div className="access-inner">
          {/* Info column */}
          <div className="access-info reveal">
            {INFO.map((row) => (
              <dl key={row.dt} className="access-row">
                <dt>{row.dt}</dt>
                <dd style={{ whiteSpace: 'pre-line' }}>{row.dd}</dd>
              </dl>
            ))}
            <a href="#" className="line-btn">
              <LineIcon />
              LINEで予約する
            </a>
          </div>

          {/* Map placeholder */}
          <div className="access-map reveal delay-2">
            <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
              <rect width="480" height="360" fill="#ede8e2" />
              <line x1="0" y1="120" x2="480" y2="120" stroke="#d4cdc5" strokeWidth="1" />
              <line x1="0" y1="200" x2="480" y2="200" stroke="#d4cdc5" strokeWidth="1" />
              <line x1="0" y1="280" x2="480" y2="280" stroke="#d4cdc5" strokeWidth="1" />
              <line x1="120" y1="0" x2="120" y2="360" stroke="#d4cdc5" strokeWidth="1" />
              <line x1="240" y1="0" x2="240" y2="360" stroke="#d4cdc5" strokeWidth="1" />
              <line x1="360" y1="0" x2="360" y2="360" stroke="#d4cdc5" strokeWidth="1" />
              <rect x="0" y="155" width="480" height="10" fill="#f0ebe4" />
              <rect x="195" y="0"  width="10"  height="360" fill="#f0ebe4" />
              <rect x="0" y="235" width="480" height="8"  fill="#f0ebe4" />
              <rect x="155" y="115" width="40" height="20" rx="2" fill="#b8a899" opacity="0.6" />
              <text x="175" y="129" textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">代官山駅</text>
              <circle cx="240" cy="175" r="10" fill="#8fa38a" opacity="0.9" />
              <line x1="240" y1="175" x2="240" y2="192" stroke="#8fa38a" strokeWidth="2" />
              <circle cx="240" cy="174" r="3" fill="white" />
              <text x="256" y="172" fill="#5a7055" fontSize="9" fontFamily="sans-serif">Feuille</text>
              <text x="240" y="340" textAnchor="middle" fill="#a09080" fontSize="10" fontFamily="monospace" letterSpacing="2">MAP PLACEHOLDER</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
