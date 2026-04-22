import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import BotanicalDivider from '@/components/BotanicalDivider'
import Concept from '@/components/Concept'
import MenuSection from '@/components/MenuSection'
import Gallery from '@/components/Gallery'
import Interstitial from '@/components/Interstitial'
import FAQ from '@/components/FAQ'
import Access from '@/components/Access'
import Footer from '@/components/Footer'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

export default function Page() {
  return (
    <>
      {/* Global scroll reveal watcher (client-only) */}
      <ScrollRevealProvider />

      {/* Navigation */}
      <Nav />

      {/* Hero */}
      <Hero />

      {/* Botanical Divider 1 */}
      <BotanicalDivider variant={1} />

      {/* Concept */}
      <Concept />

      {/* Interstitial quote 1 */}
      <Interstitial>「美しさとは、引き算の先にある。」</Interstitial>

      {/* Menu */}
      <MenuSection />

      {/* Botanical Divider 2 */}
      <BotanicalDivider variant={2} />

      {/* Gallery */}
      <Gallery />

      {/* Interstitial quote 2 */}
      <Interstitial>
        Feuille は「葉」—— 自然の静けさと、{'\u00A0'}
        <br />
        丁寧な時間を、あなたの日常へ。
      </Interstitial>

      {/* FAQ */}
      <FAQ />

      {/* Botanical Divider 3 */}
      <BotanicalDivider variant={3} />

      {/* Access */}
      <Access />

      {/* Footer */}
      <Footer />
    </>
  )
}
