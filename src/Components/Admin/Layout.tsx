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
            <Link to="/admin/brand">Maques</Link>
          </li>
          <li>
            <Link to="/admin/products">Produits</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}