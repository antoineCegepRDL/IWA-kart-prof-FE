import Product from '#types/Item';

interface Props {
  product: Product;
}

const ARegularPrice = ({ product }: Props) => {
  return (
    <div className="price">
      <p className="regular-price">{product.price.toFixed(2)}</p>
    </div>
  );
};

export default ARegularPrice;
