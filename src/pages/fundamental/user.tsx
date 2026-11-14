import React from 'react'
import axios from 'axios'
import type { IUserHolder } from '../../types/user';
import { useNavigate, useSearchParams } from 'react-router';

function User() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const _page = searchParams.get('_page'); // 3
  const _limit = searchParams.get('_limit'); // 3
  const [users, setUsers] = React.useState<IUserHolder[]>([]);
  const [page, setPage] = React.useState(Number(_page) || 1); // 3
  const [limit, setLimit] = React.useState<number>(Number(_limit) || 2) // 3

  React.useEffect(() => {
    navigate(`/users?_page=${page}&_limit=${limit}`, { replace: true })
    async function fetchUsers() {
      try {
        const data = await axios(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);
        setUsers(data.data)
      } catch (e) {
        // TODO: show toast ...
      }
    }
    fetchUsers()
  }, [page, limit])

  function goToUserDetail(userId: number) {
    navigate(`/users/${userId}`)
  }

  function handleLimit(e: any) {
    setLimit(Number(e.target.value))
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

      Page: 
      <button type="button" className='border' onClick={() => setPage(prevState => prevState - 1)}>Prev</button> {' '}
      <span>{page}</span> {' '}
      <button type="button" className='border' onClick={() => setPage(prevState => prevState + 1)}>Next</button>

      <br />

      Limit: 
      <select value={limit} onChange={handleLimit}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
    </div>
  )
}

export default User