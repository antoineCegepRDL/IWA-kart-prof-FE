import KartItem from '#types/KartItem';
import AInfoLine from '../AInfoLine';
import AItem from './AItem';

interface Props {
  item: KartItem;
  onChangeQuatity: (item: KartItem) => void;
  onRemoveItem: (id: string) => void;
}

const TheKartItem = ({ item, onChangeQuatity, onRemoveItem }: Props) => {
  const removeQuantity = () => {
    if (item.quantityToBuy > 1) {
      item.quantityToBuy--;
      onChangeQuatity(item);
    }
  };

  const addQuantity = () => {
    console.log(item);
    if (item.quantity > item.quantityToBuy && item.quantityToBuy < 10) {
      item.quantityToBuy++;
      onChangeQuatity(item);
    } else {
      alert('Stock insuffisant');
    }
  };

  const subTotal = item.quantityToBuy * (1 - item.discountPercentage) * item.price;

  return (
    <div>
      <AItem item={item} />
      <div className="kart-buttons">
        <span
          className="kart-button button"
          onClick={addQuantity}
        >
          +
        </span>
        <span className="quantity-to-buy">{item.quantityToBuy}</span>
        <span
          className="kart-button button"
          onClick={removeQuantity}
        >
          -
        </span>
        <span
          className="kart-button button"
          onClick={() => onRemoveItem(item.id)}
        >
          X
        </span>
      </div>
      <AInfoLine
        title="Sous-total"
        value={subTotal.toFixed(2)}
        suffix="$"
      ></AInfoLine>
    </div>
  );
};

export default TheKartItem;
