import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Interstitial({ children }: Props) {
  return (
    <div className="interstitial reveal">
      <p>{children}</p>
    </div>
  )
}
