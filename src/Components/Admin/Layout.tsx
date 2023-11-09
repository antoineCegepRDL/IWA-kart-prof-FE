import { Outlet, Link } from 'react-router-dom'
import '../../styles/admin.scss'

export default function AdminLayout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin/brands">Maques</Link>
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