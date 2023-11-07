import { Outlet, Link } from 'react-router-dom'
import '../../styles/layout.scss'

export default function AdminLayout() {
  return (
    <>
      <div id="header">
        <Link to="/" id="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
            <ellipse cx="22.48" cy="22.5263" rx="22.22" ry="21.7105" fill="black" />
          </svg>
          <p className='text'>LOGO</p>
        </Link>
        <Category name="Marques"></Category>
        <Category name="Catégorie 1"></Category>
        <Category name="Catégorie 2"></Category>
        <Category name="Catégorie 3"></Category>
        <Category name="Catégorie 4"></Category>
        <Category name="Promotions"></Category>
        <div className="side">
          <div>
            <Link to="/kart">Panier</Link>
          </div>
        </div>
      </div>
      <Outlet />
      <div>
        FOOTER
      </div>
    </>
  )
}

function Category({name}: {name: string}) {
  return (
    <div className='category'>{name}</div>
  )
}