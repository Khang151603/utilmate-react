import Button from "../../../../components/ui/button"

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
      <Button type='button' onClick={onLogout}>
        Logout
      </Button>
    </div>
  )
}

export default UserGreeting