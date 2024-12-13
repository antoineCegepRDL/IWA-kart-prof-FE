import '#styles/layout.scss';
import { Outlet, Link } from 'react-router-dom';
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
        <div className="h-8 w-full bg-black"></div>
        <div className="header">
          <div>
            <Link
              to="/"
              id="logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
          </div>
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
            <div className="flex justify-around w-full">
              <Link to="/kart">Panier</Link>
              <Link to="/admin/items">Administration</Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
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
