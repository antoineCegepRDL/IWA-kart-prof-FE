import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kart">Kart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}