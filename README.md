# Feuille LP — Next.js 実装

ネイル＆まつ毛サロン「Feuille（フィーユ）」のランディングページ。  
デザインリファレンス（`Feuille_LP.html`）を Next.js App Router + Tailwind CSS で再実装。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:3000` でプレビューできます。

## ビルド

```bash
npm run build
npm start
```

## ファイル構成

```
app/
  globals.css      # デザイントークン + グローバルスタイル
  layout.tsx       # フォント読み込み（Cormorant Garamond + Jost）+ メタデータ
  page.tsx         # 全セクションの組み立て

components/
  Nav.tsx               # 固定ナビ・スクロール検知・ハンバーガーメニュー
  Hero.tsx              # スライドショー・テキスト入場アニメーション
  BotanicalDivider.tsx  # SVG ボタニカル装飾（3バリアント）
  Concept.tsx           # Our Story 3カラム
  MenuSection.tsx       # タブ切替メニュー（NAIL/LASH）
  Gallery.tsx           # 3カラムギャラリー
  Interstitial.tsx      # セクション間インタースティシャルテキスト
  FAQ.tsx               # <details> アコーディオン
  Access.tsx            # アクセス情報 + 地図プレースホルダー
  Footer.tsx            # フッター
  ScrollRevealProvider  # IntersectionObserver によるスクロールリビール

hooks/
  useReveal.ts          # （補助フック、現在は ScrollRevealProvider で一元管理）
```

## 本番実装時の差し替え

- **Hero スライド写真**: `components/Hero.tsx` の SVG プレースホルダーを `<Image>` コンポーネントに置換
- **Gallery 写真**: `components/Gallery.tsx` の SVG を `next/image` に置換
- **Google Maps**: `components/Access.tsx` の SVG マップを `<iframe>` 埋め込みに置換
- **LINE URL**: `components/Access.tsx` と `components/Footer.tsx` の `href="#"` を公式 URL に変更
- **デザイントークン**: `app/globals.css` の CSS 変数で一括管理

## 推奨スタック（本番）

- **Framework**: Next.js 14+ App Router
- **Styling**: Tailwind CSS + CSS カスタムプロパティ
- **Images**: `next/image`
- **Animation**: Framer Motion（スクロールリビールの高度な制御が必要な場合）
- **Icons**: Lucide React（SNS アイコン）
