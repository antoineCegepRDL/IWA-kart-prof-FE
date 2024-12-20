import { Outlet, Link } from 'react-router-dom';
import '#styles/admin.scss';

export default function AdminLayout() {
  return (
    <>
      <header>
        {/* TODO component avec le logo */}
        <nav>
          <Link
            to="/"
            id="logo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <ellipse
                cx="22.48"
                cy="22.5263"
                rx="22.22"
                ry="21.7105"
                fill="black"
              />
            </svg>
            <p className="text">LOGO</p>
          </Link>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/admin/brands">Marques</Link>
            </li>
            <li>
              <Link to="/admin/items">Produits</Link>
            </li>
            <li>
              <Link to="/admin/categories">Catégories</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
