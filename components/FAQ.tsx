'use client'

const FAQS = [
  {
    q: '初めてのご来店でも安心ですか？',
    a: 'もちろんです。初回はカウンセリングの時間を丁寧に取り、お肌の状態やご希望のデザイン・仕上がりイメージを詳しくお聞きします。ご不明な点はお気軽にご相談ください。',
  },
  {
    q: 'ネイルとまつ毛を同日に施術できますか？',
    a: 'はい、同日施術も承っております。お時間はおよそ3〜4時間ほどご用意いただく場合がございます。ご予約の際に「同日施術希望」とお伝えください。',
  },
  {
    q: '爪が薄い・短い場合でも施術できますか？',
    a: 'ご相談の上、お客様の爪の状態に合った施術をご提案いたします。補強剤を使用したり、爪に負担の少ない方法を選択することが可能です。お気軽にご相談ください。',
  },
  {
    q: 'キャンセル・変更はいつまで可能ですか？',
    a: 'ご予約の48時間前まで、LINEよりキャンセル・変更を承っております。それ以降のご連絡の場合は、キャンセルポリシーに基づきご案内させていただく場合がございます。',
  },
]

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-label reveal">
          <span className="en">FAQ</span>
          <span className="ja">よくあるご質問</span>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <details
              key={item.q}
              className={`faq-item reveal${i > 0 ? ` delay-${i}` : ''}`}
            >
              <summary className="faq-summary">
                {item.q}
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
