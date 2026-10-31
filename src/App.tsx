import ConditionalRendering from './pages/fundamental/conditional-rendering';
import ReactJsx from './pages/fundamental/react-jsx';
import ReactProps from './pages/fundamental/react-props';
import ReactState from './pages/fundamental/react-state';
import { ComposeComponent } from './pages/sample-app/compose-component';

function App() {

  return (
    <>
      <ReactJsx />

      <br />
      <ComposeComponent />


      <br />
      <ReactProps />

      <br />
      <ReactState />

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
