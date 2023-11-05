import {BrowserRouter, Route, Routes} from "react-router-dom"
import NewBrand from "./Views/NewBrand"
import NewItem from "./Views/NewItem"
import AdminLayout from "./Components/Admin/Layout"

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="brand" element={<NewBrand />}></Route>
          <Route path="item" element={<NewItem />}></Route>
        </Route>
        <Route path="/" element={<AdminLayout />}>
          <Route path="kart" element={<NewBrand />}></Route>
          <Route index element={<NewItem />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
