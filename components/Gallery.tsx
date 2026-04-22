const ITEMS = [
  {
    caption: '繊細なアートを纏う、静かな手',
    bg: '#d4c4b8',
    textFill: 'rgba(100,75,60,0.4)',
    label: '施術中の手元',
    sub: 'nail close-up shot',
    patternId: 'gp1',
    rotate: '45',
    stroke: 'rgba(255,255,255,0.15)',
  },
  {
    caption: '光と緑が満ちる、完全個室の空間',
    bg: '#adb8a5',
    textFill: 'rgba(50,70,50,0.4)',
    label: '清潔な個室空間',
    sub: 'private room interior',
    patternId: 'gp2',
    rotate: '-30',
    stroke: 'rgba(255,255,255,0.12)',
  },
  {
    caption: '植物が寄り添う、やわらかな待合室',
    bg: '#c9b8a3',
    textFill: 'rgba(90,70,50,0.4)',
    label: '植物のある待合',
    sub: 'lounge with botanicals',
    patternId: 'gp3',
    rotate: '15',
    stroke: 'rgba(255,255,255,0.13)',
  },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <div className="section-label reveal">
          <span className="en">Gallery</span>
          <span className="ja">世界観</span>
        </div>

        <div className="gallery-grid">
          {ITEMS.map((item, i) => (
            <div key={item.caption} className={`gallery-item reveal delay-${i + 1}`}>
              <div className="gallery-ph">
                <svg viewBox="0 0 400 530" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="530" fill={item.bg} />
                  <defs>
                    <pattern
                      id={item.patternId}
                      width="20" height="20"
                      patternUnits="userSpaceOnUse"
                      patternTransform={`rotate(${item.rotate})`}
                    >
                      <line x1="0" y1="0" x2="0" y2="20" stroke={item.stroke} strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="400" height="530" fill={`url(#${item.patternId})`} />
                  <text x="200" y="260" textAnchor="middle" fill={item.textFill} fontSize="13" fontFamily="monospace" letterSpacing="2">
                    {item.label}
                  </text>
                  <text x="200" y="280" textAnchor="middle" fill={item.textFill.replace('0.4', '0.3')} fontSize="11" fontFamily="monospace">
                    {item.sub}
                  </text>
                </svg>
              </div>
              <div className="gallery-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
