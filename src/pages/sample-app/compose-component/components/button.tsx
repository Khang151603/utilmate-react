import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
}

function Button({ children, className }: ButtonProps) {
  return (
    <button className={className} type='button'>
      {children}
    </button>
  )
}

export default Button
