import {BrowserRouter, Route, Routes} from "react-router-dom"
import NewBrand from "./Views/NewBrand"
import NewItem from "./Views/NewItem"
import UserLayout from "./Components/User/Layout"
import AdminLayout from "./Components/Admin/Layout"
import Home from "./Views/Home"
import './styles/global.scss'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="brand" element={<NewBrand />}></Route>
          <Route path="item" element={<NewItem />}></Route>
        </Route>
        <Route path="/" element={<UserLayout />}>
          <Route path="kart" element={<NewBrand />}></Route>
          <Route index element={<Home />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
