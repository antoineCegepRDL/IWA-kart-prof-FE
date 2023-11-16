import { useNavigate } from "react-router-dom";
import Product from "../../types/Product";
import ProductComponent from "./Product";

export default function ProductListComponent({ products }: { products: Product[] }) {
  const navigate = useNavigate()
  return (
    <div className='list'>
      {products.map(product =>
        <div className='product' onClick={() => navigate(`/product/${product.id}`)}>
          <ProductComponent product={product} key={product.id}></ProductComponent>
        </div>
      )}
    </div>
  )
}