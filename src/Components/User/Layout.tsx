import { Outlet, Link } from 'react-router-dom'
import '../../styles/layout.scss'
import APropos from '../../assets/AProposBackground.png'
export default function AdminLayout() {
  return (
    <>
      <header>
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
            <Link to="/admin/products">Administration</Link>
          </div>
        </div>
      </header>
      <div className='wrapper'>
        <Outlet />
      </div>
      <footer>
        <div id="a-propos">
          <img src={APropos} alt="" />
          <div className='text'>
            <p>Nos produits sont aussi fiables que la CSS du site web!</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function Category({name}: {name: string}) {
  return (
    <div className='category'>{name}</div>
  )
}