import Item from '#types/Item';

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
