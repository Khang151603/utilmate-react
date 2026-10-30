interface GuestGreetingProps {
  text: string
  onLogin: () => void
}

function GuestGreeting({ text, onLogin }: GuestGreetingProps) {
  return (
    <div>
      <h1>{text}</h1>
      <button type='button' onClick={onLogin}>
        Login
      </button>
    </div>
  )
}

export default GuestGreeting