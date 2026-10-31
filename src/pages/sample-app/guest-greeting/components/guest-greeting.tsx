import Button from "../../../../components/ui/button"

interface GuestGreetingProps {
  text: string
  onLogin: () => void
}

function GuestGreeting({ text, onLogin }: GuestGreetingProps) {
  return (
    <div>
      <h1>{text}</h1>
      <Button type='button' onClick={onLogin}>
        Login
      </Button>
    </div>
  )
}

export default GuestGreeting