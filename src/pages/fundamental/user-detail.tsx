import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router'
import type { IUserHolder } from '../../types/user';

function UserDetail() {
  const { userId } = useParams();
 const [user, setUser] = React.useState<IUserHolder | null>(null)

  React.useEffect(() => {
    if (!userId) return;

    async function fetchUser() {
      try {
        const data = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(data.data)
      } catch (e) {
        // TODO: show toast ...
      }
    }
    fetchUser()
  }, [userId])

  if (!user) return null;

  return (
    <div>
      Name: {user.name}
    </div>
  )
}

export default UserDetail