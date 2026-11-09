import ConditionalRendering from './pages/fundamental/conditional-rendering';
import Form from './pages/fundamental/form';
import DropDrilling from './pages/fundamental/prop-drilling';
import ReactJsx from './pages/fundamental/react-jsx';
import ReactProps from './pages/fundamental/react-props';
import ReactState from './pages/fundamental/react-state';
import UserHookForm from './pages/fundamental/user-hook-form';
import { ComposeComponent } from './pages/sample-app/compose-component';
import { GuestGreeting } from './pages/sample-app/guest-greeting';
import LiftingStateUp from './pages/sample-app/lifting-state-up';

function App() {

  return (
    <>
      <ReactJsx />

      <br />
      <ReactProps />

      <br />
      <ReactState />

      <br />
      <ComposeComponent />

      <br />
      <GuestGreeting />

      <br />
      <ConditionalRendering />

      <br />
      <DropDrilling />

      <br />
      <Form />

      <br />
      <UserHookForm />

      <br />
      <LiftingStateUp />

      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default App
