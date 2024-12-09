import Item from '#types/Item';
import '#styles/user/Price.scss';

interface Props {
  item: Item;
}

const ADiscountPrice = ({ item }: Props) => {
  return (
    <div className="price">
      <p className="old-price">{item.price.toFixed(2)}</p>
      <p className="regular-price">{(item.price * (1 - item.discountPercentage)).toFixed(2)}</p>
    </div>
  );
};

export default ADiscountPrice;
