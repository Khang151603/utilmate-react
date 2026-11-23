import React from "react";
import { Navigate } from "react-router";

function AuthRoute({ children }: React.PropsWithChildren) {
  const [user, setUsers] = React.useState<any>(null);

  console.log('auth route');
  const access_token = window.localStorage.getItem('access_token');

  React.useEffect(() => {
    if (!access_token) return;

    async function getMe() {
      try {
        const data = await fetch('https://tony-auth-express-vdee.vercel.app/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': access_token
          },
        });
        const json = await data.json();
        if (json.isSuccess) {
          setUsers(json.user.user)
        }

        if (!json.isSuccess) {
          window.localStorage.clear();
          setUsers('')
        }

        console.log('json: ', json)
      } catch (e) {
        
      }
    }
    getMe();
  }, [access_token])

  // null -> check authenticate, user = '' -> login, user = data -> render UI
  if (!access_token || user === '') {
    return <Navigate to="/login" />
  }

  if (user === null) {
    return <div>Please wait authenticate</div>
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthRoute