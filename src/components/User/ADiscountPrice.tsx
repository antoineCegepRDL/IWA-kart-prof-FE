import Product from '#types/Item';

interface Props {
  product: Product;
}

const ADiscountPrice = ({ product }: Props) => {
  return (
    <div className="price">
      <p className="old-price">{product.price.toFixed(2)}</p>
      <p className="regular-price">{(product.price * (1 - product.discountPercentage)).toFixed(2)}</p>
    </div>
  );
};

export default ADiscountPrice;
