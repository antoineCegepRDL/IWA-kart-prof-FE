import { useNavigate } from 'react-router-dom';
import Product from '#types/Item';
import ProductComponent from '#components/User/AProduct';

interface Props {
  products: Product[];
}

const AProductList = ({ products }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="list">
      {products.map((product) => (
        <div
          className="product"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <ProductComponent
            product={product}
            key={product.id}
          ></ProductComponent>
        </div>
      ))}
    </div>
  );
};

export default AProductList;
