
interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined,
  children: React.ReactNode,
  onClick?: () => void
}

function Button({ children, ...restProps }: ButtonProps) {
  console.log('restProps button: ', restProps)
  return (
    <button 
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button