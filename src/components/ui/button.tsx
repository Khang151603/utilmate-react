
interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined,
  text: string,
  children: React.ReactNode
}

function Button({ text, children, ...restProps }: ButtonProps) {
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