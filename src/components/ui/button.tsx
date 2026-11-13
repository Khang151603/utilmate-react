
interface ButtonProps {
  text?: string,
  className?: string,
  type?: "submit" | "reset" | "button" | undefined,
  children: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean,
  name?: string,
  colors?: string[]
}

function Button({ text, children, className, disabled, name, colors, ...restProps }: ButtonProps) {
  console.log('restProps button: ', restProps)
  return (
    <button 
    className={className}
    disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button