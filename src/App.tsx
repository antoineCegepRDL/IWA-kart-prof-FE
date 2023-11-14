import {BrowserRouter, Route, Routes} from "react-router-dom"
import NewBrand from "./Views/Admin/Brand"
import Products from "./Views/Admin/Products"
import UserLayout from "./Components/User/Layout"
import AdminLayout from "./Components/Admin/Layout"
import Home from "./Views/User/Home"
import UserProduct from "./Views/User/Product"
import './styles/global.scss'
import Kart from "./Views/User/Kart"
import Product from "./Views/Admin/Product"
import Brands from "./Views/Admin/Brands"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="brand" element={<NewBrand />}></Route>
          <Route path="brands" element={<Brands />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="product/:id" element={<Products />}></Route>
          <Route path="product" element={<Product />}></Route>
        </Route>
        <Route path="/" element={<UserLayout />}>
          <Route path="kart" element={<Kart />}></Route>
          <Route path="product/:id" element={<UserProduct />}></Route>
          <Route index element={<Home />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
