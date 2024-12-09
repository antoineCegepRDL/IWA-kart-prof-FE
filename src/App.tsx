import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from '#layout/TheUserLayout';
import AdminLayout from '#layout/TheAdminLayout';
import '#styles/global.scss';
import TheAdminBrandPage from '#pages/admin/TheBrandPage';
import TheAdminCategoryPage from '#pages/admin/TheCategoryPage';
import TheAdminCategoriesPage from '#pages/admin/TheCategoriesPage';
import TheAdminItemsPage from '#pages/admin/TheItemsPage';
import TheUserHomePage from '#pages/user/TheHomePage';
import TheUserItemPage from '#pages/user/TheItemPage';
import TheKartPage from '#pages/user/TheKartPage';
import TheUserCategoryPage from '#pages/user/TheCategoryPage';
import TheUserBrandPage from '#pages/user/TheBrandPage';
import TheAdminItemPage from '#pages/admin/TheItemPage';
import TheAdminBrandsPage from '#pages/admin/TheBrandsPage';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={<AdminLayout />}
          >
            <Route
              path="brand"
              element={<TheAdminBrandPage />}
            ></Route>
            <Route
              path="brand/:id"
              element={<TheAdminBrandPage />}
            ></Route>
            <Route
              path="categories"
              element={<TheAdminCategoriesPage />}
            ></Route>
            <Route
              path="category"
              element={<TheAdminCategoryPage />}
            ></Route>
            <Route
              path="category/:id"
              element={<TheAdminCategoryPage />}
            ></Route>
            <Route
              path="brands"
              element={<TheAdminBrandsPage />}
            ></Route>
            <Route
              path="items"
              element={<TheAdminItemsPage />}
            ></Route>
            <Route
              path="item/:id"
              element={<TheAdminItemPage />}
            ></Route>
            <Route
              path="item"
              element={<TheAdminItemPage />}
            ></Route>
          </Route>
          <Route
            path="/"
            element={<UserLayout />}
          >
            <Route
              path="kart"
              element={<TheKartPage />}
            ></Route>
            <Route
              path="item/:id"
              element={<TheUserItemPage />}
            ></Route>
            <Route
              path="category/:id"
              element={<TheUserCategoryPage />}
            ></Route>
            <Route
              path="brand/:id"
              element={<TheUserBrandPage />}
            ></Route>
            <Route
              index
              element={<TheUserHomePage />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

