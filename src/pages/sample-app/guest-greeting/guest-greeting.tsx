import { useState } from 'react'
import GuestGreetingView from './components/guest-greeting'
import UserGreeting from './components/user-greeting'

function GuestGreeting() {
  const [isAuth, setisAuth] = useState(false)

  if (isAuth) {
    return (
      <UserGreeting
        text='Welcome to'
        name='Tony'
        onLogout={() => setisAuth(false)}
      />
    )
  }

  return (
    <GuestGreetingView
      text='Please sign up'
      onLogin={() => setisAuth(true)}
    />
  )
}

export default GuestGreeting