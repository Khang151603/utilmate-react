import { Link, Outlet, useNavigate } from 'react-router';
import ConditionalRendering from './pages/fundamental/conditional-rendering';
import Form from './pages/fundamental/form';
import DropDrilling from './pages/fundamental/prop-drilling';
import UserHookForm from './pages/fundamental/user-hook-form';
import { ComposeComponent } from './pages/sample-app/compose-component';
import { GuestGreeting } from './pages/sample-app/guest-greeting';
import Button from './components/ui/button';

function App() {
  const navigate = useNavigate();
  
  function handleLogout() {
    window.localStorage.clear();
    navigate('/login')
  }

  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
        <div className="hidden sm:flex items-center gap-8">
          <Link to="react-jsx">React JSX</Link>
          <Link to="react-props">React Props</Link>
          <Link to="react-state" replace>React State</Link>
          <Link to="users">Demo useParams</Link>
          <Link to="color-box">Color Box</Link>
          <Link to="use-effect">UseEffect</Link>
          <Link to="traffic-light">Traffic Light</Link>
        </div>
        <div>
          <Button className='cursor-pointer' onClick={handleLogout}>Logout</Button>
        </div>
      </nav>

      <Outlet />


      <hr />
      <br />
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
      <br />
      <br />
      <br />      
    </>
  )
}

export default App
