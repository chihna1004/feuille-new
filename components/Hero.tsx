'use client'
import { useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    bg: '#c9b5a8',
    patternId: 'h1p',
    rotate: '35',
    stroke: 'rgba(255,255,255,0.07)',
    strokeW: '1',
    overlay: 'rgba(60,40,30,0.25)',
    label: 'nail close-up',
  },
  {
    bg: '#9aad94',
    patternId: 'h2p',
    rotate: '-20',
    stroke: 'rgba(255,255,255,0.08)',
    strokeW: '1.5',
    overlay: 'rgba(30,50,35,0.30)',
    label: 'private room',
  },
  {
    bg: '#b8a899',
    patternId: 'h3p',
    rotate: '12',
    stroke: 'rgba(255,255,255,0.09)',
    strokeW: '0.8',
    overlay: 'rgba(50,35,25,0.28)',
    label: 'lash treatment',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(false)

  // Hero text entrance on load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 4200)
    return () => clearInterval(id)
  }, [])

  const delays = ['', 'delay-1', 'delay-2', 'delay-3']

  return (
    <section id="hero">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
          <svg
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1920" height="1080" fill={s.bg} />
            <defs>
              <pattern
                id={s.patternId}
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform={`rotate(${s.rotate})`}
              >
                <line
                  x1="0" y1="0" x2="0" y2="40"
                  stroke={s.stroke}
                  strokeWidth={s.strokeW}
                />
              </pattern>
            </defs>
            <rect width="1920" height="1080" fill={`url(#${s.patternId})`} />
            <text
              x="960" y="580"
              textAnchor="middle"
              fill="rgba(255,255,255,0.1)"
              fontSize="120"
              fontFamily="Georgia"
              letterSpacing="30"
            >
              {s.label}
            </text>
            <rect width="1920" height="1080" fill={s.overlay} />
          </svg>
        </div>
      ))}

      {/* Overlay text */}
      <div className="hero-overlay">
        {[
          <div key="en"  className={`hero-en  reveal${visible ? ' visible' : ''} ${delays[0]}`}>Feuille</div>,
          <div key="ja"  className={`hero-ja  reveal${visible ? ' visible' : ''} ${delays[1]}`}>フィーユ</div>,
          <div key="cat" className={`hero-catch reveal${visible ? ' visible' : ''} ${delays[2]}`}>素肌に、やさしい美しさを。</div>,
          <a   key="cta" href="#access"
               className={`hero-cta reveal${visible ? ' visible' : ''} ${delays[3]}`}>
            初回トライアルを予約する
          </a>,
        ]}
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
