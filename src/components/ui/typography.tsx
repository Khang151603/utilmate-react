interface TypographyProps {
  text: string
}

function Typography({ text }: TypographyProps ) {
  return (
    <div>{text}</div>
  )
}

export default Typography