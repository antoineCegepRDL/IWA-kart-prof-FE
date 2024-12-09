import Item from '#types/Item';
import '#styles/user/Price.scss';

interface Props {
  item: Item;
}

const ARegularPrice = ({ item }: Props) => {
  return (
    <div className="price">
      <p className="regular-price">{item.price.toFixed(2)}</p>
    </div>
  );
};

export default ARegularPrice;
