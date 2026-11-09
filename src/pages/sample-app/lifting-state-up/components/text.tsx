import type { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export default function Text({ children }: TextProps) {
  return <span>{children}</span>
}
