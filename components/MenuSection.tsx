'use client'
import { useState } from 'react'

type Tab = 'nail' | 'lash'

interface MenuItem {
  cat: string
  name: string
  price: string
  priceSuffix: string
  time: string
  desc: string
}

const MENU: Record<Tab, MenuItem[]> = {
  nail: [
    {
      cat: 'Nail',
      name: 'ジェルネイル',
      price: '¥8,800',
      priceSuffix: '〜（税込）',
      time: '約 90 分',
      desc: '爪に優しいハードジェルで仕上げる、持ちのよいベースメニュー。カラーは100色以上からお選びいただけます。',
    },
    {
      cat: 'Nail',
      name: 'ネイルアート',
      price: '¥12,100',
      priceSuffix: '〜（税込）',
      time: '約 120 分',
      desc: '繊細なボタニカル柄やフレンチアートなど、スタイリストとご相談しながらオーダーメイドで仕上げます。',
    },
    {
      cat: 'Nail',
      name: 'ネイルケア',
      price: '¥5,500',
      priceSuffix: '（税込）',
      time: '約 60 分',
      desc: '甘皮処理・形成・保湿トリートメントを丁寧に。カラーをご希望でない方にもおすすめのコースです。',
    },
  ],
  lash: [
    {
      cat: 'Lash',
      name: 'ラッシュリフト',
      price: '¥9,900',
      priceSuffix: '（税込）',
      time: '約 80 分',
      desc: '自まつ毛をカールさせる、まつ毛パーマの最新技術。マスカラいらずで目元が華やかに。',
    },
    {
      cat: 'Lash',
      name: 'まつ毛エクステ',
      price: '¥11,000',
      priceSuffix: '〜（税込）',
      time: '約 90 分',
      desc: '本数・カール・太さをオーダーメイドで調整。自然な仕上がりからドラマティックまで対応します。',
    },
    {
      cat: 'Lash',
      name: '眉スタイリング',
      price: '¥6,600',
      priceSuffix: '（税込）',
      time: '約 50 分',
      desc: '顔立ちに合わせた眉毛のデザイン・整え・ワックス脱毛。毎日のメイクが格段に楽になります。',
    },
  ],
}

export default function MenuSection() {
  const [tab, setTab] = useState<Tab>('nail')

  return (
    <section id="menu">
      <div className="container">
        <div className="section-label reveal">
          <span className="en">Menu</span>
          <span className="ja">メニュー</span>
        </div>

        <div className="menu-tabs reveal">
          <button
            className={`tab-btn${tab === 'nail' ? ' active' : ''}`}
            onClick={() => setTab('nail')}
          >
            NAIL / ネイル
          </button>
          <button
            className={`tab-btn${tab === 'lash' ? ' active' : ''}`}
            onClick={() => setTab('lash')}
          >
            LASH / まつ毛
          </button>
        </div>

        <div className={`tab-panel active`}>
          <div className="menu-grid">
            {MENU[tab].map((item, i) => (
              <div key={item.name} className={`menu-card reveal${i > 0 ? ` delay-${i}` : ''}`}>
                <div className="menu-card-cat">{item.cat}</div>
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-line" />
                <div className="menu-card-price">
                  {item.price}
                  <small> {item.priceSuffix}</small>
                </div>
                <div className="menu-card-time">⏱ {item.time}</div>
                <p className="menu-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
