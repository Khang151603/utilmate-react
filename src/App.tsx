import ConditionalRendering from './pages/fundamental/conditional-rendering';
import ReactJsx from './pages/fundamental/react-jsx';
import ReactProps from './pages/fundamental/react-props';
import ReactState from './pages/fundamental/react-state';
import { ComposeComponent } from './pages/sample-app/compose-component';
import { GuestGreeting } from './pages/sample-app/guest-greeting';

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
      <br />
      <br />
      <br />      
    </>
  )
}

export default App
