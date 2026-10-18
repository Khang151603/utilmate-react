interface UserCardProps {
  firstName: string,
  lastName: string,
  age: number,
  children: React.ReactNode,
  typography: React.ReactNode
}

function UserCard({ firstName, lastName, age, children, typography, ...restProps }: UserCardProps) {
  console.log('UserCard restProps: ', restProps)
  
  return (
    <div>
      First Name: {firstName} <br />
      Last Name: {lastName} <br />
      Age: {age}<br />
      This is children: {children} <br />
      This is ReactNode: {typography}
    </div>
  )
}

export default UserCard