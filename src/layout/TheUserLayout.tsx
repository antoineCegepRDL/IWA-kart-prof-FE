import { Outlet, Link } from 'react-router-dom';
import '#styles/layout.scss';
import APropos from '#assets/AProposBackground.png';
import { useEffect, useState } from 'react';
import useCategoryService from '#composables/services/useCategoryService';
import DetailedCategory from '#types/DetailedCategory';

const UserLayout = () => {
  const [categories, setCategories] = useState<DetailedCategory[]>([]);
  const { getCategories } = useCategoryService();
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await getCategories());
    };
    fetchCategories();
  }, []);
  return (
    <>
      <header>
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
        <nav>
          {categories.map((category) => (
            <div
              className="category"
              key={category.id}
            >
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </div>
          ))}
        </nav>
        <div className="side">
          <div>
            <Link to="/kart">Panier</Link>
            <Link to="/admin/items">Administration</Link>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <Outlet />
      </div>
      <footer>
        <div id="a-propos">
          <img
            src={APropos}
            alt=""
          />
          <div className="text">
            <p>Nos produits sont aussi fiables que la CSS du site web!</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
