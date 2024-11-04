import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from '#layout/UserLayout';
import AdminLayout from '#layout/AdminLayout';
import '#styles/global.scss';
import BrandPage from '#pages/admin/BrandPage';
import CategoryPage from '#pages/admin/CategoryPage';
import CategoriesPage from '#pages/admin/CategoriesPage';
import ItemsPage from '#pages/admin/ItemsPage';
import HomePage from '#pages/user/HomePage';
import UserProductPage from '#pages/user/Product';
import Kart from '#pages/user/KartPage';
import ItemPage from '#pages/admin/ItemPage';
import BrandsPage from '#pages/admin/BrandsPage';

export default function App() {
  return (
    <div className="flex-between flex-column fill-height">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              path="brand"
              element={<BrandPage />}
            ></Route>
            <Route
              path="brand/:id"
              element={<BrandPage />}
            ></Route>
            <Route
              path="categories"
              element={<CategoriesPage />}
            ></Route>
            <Route
              path="category"
              element={<CategoryPage />}
            ></Route>
            <Route
              path="category/:id"
              element={<CategoryPage />}
            ></Route>
            <Route
              path="brands"
              element={<BrandsPage />}
            ></Route>
            <Route
              path="items"
              element={<ItemsPage />}
            ></Route>
            <Route
              path="item/:id"
              element={<ItemPage />}
            ></Route>
            <Route
              path="item"
              element={<ItemPage />}
            ></Route>
          </Route>
          <Route
            path="/"
            element={<UserLayout />}
          >
            <Route
              path="kart"
              element={<Kart />}
            ></Route>
            <Route
              path="product/:id"
              element={<UserProductPage />}
            ></Route>
            <Route
              index
              element={<HomePage />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

