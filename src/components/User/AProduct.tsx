import Product from '../../types/Item';
import ADiscountPrice from '#components/User/ADiscountPrice';
import ARegularPrice from '#components/User/ARegularPrice';

interface Props {
  product: Product;
}

const AProduct = ({ product }: Props) => {
  return (
    <>
      <div className="imageContainer">
        <img
          src={product.imageUrl}
          alt=""
        />
      </div>
      <hr />
      <div>
        <p className="product-name">{product.name}</p>
        <p className="brand-name">{product.brand.name}</p>
        {product.discountPercentage > 0 ? (
          <ADiscountPrice product={product}></ADiscountPrice>
        ) : (
          <ARegularPrice product={product}></ARegularPrice>
        )}
      </div>
    </>
  );
};

export default AProduct;
