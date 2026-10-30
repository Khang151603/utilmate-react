interface UserGreetingProps {
  text: string
  name: string
  onLogout: () => void
}

function UserGreeting({ text, name, onLogout }: UserGreetingProps) {
  return (
    <div>
      <h1>
        {text} {name}
      </h1>
      <button type='button' onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserGreeting