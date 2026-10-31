import type { ReactNode } from 'react'
interface TextProps {
  children: ReactNode
}

function Text({ children }: TextProps) {
  return <span>{children}</span>
}

export default Text
