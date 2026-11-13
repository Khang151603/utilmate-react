import React from 'react'
import axios from 'axios'
import type { IUserHolder } from '../../types/user';
import { useNavigate } from 'react-router';

function User() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState<IUserHolder[]>([])

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(data.data)
      } catch (e) {
        // TODO: show toast ...
      }
    }
    fetchUsers()
  }, [])

  function goToUserDetail(userId: number) {
    navigate(`/users/${userId}`)
  }

  return (
    <div>
      <table className="w-[400px] text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="bg-neutral-primary border-b border-default">
              <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                {user.name}
              </th>
              <td className="px-6 py-4">
                {user.email}
              </td>
              <td>
                <button type="button" className='border cursor-pointer' onClick={() => goToUserDetail(user.id)}>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default User