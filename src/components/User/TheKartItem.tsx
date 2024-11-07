import '#styles/kart.scss';
import KartItem from '#types/KartItem';
import ADiscountPrice from '#components/User/ADiscountPrice';
import ARegularPrice from '#components/User/ARegularPrice';

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

  const total = item.quantityToBuy * (item.price * (1 - item.discountPercentage));

  return (
    <div className="item">
      <div className="imageContainer">
        <img
          src={item.imageUrl}
          alt=""
        />
      </div>
      <hr />
      <p className="item-name">{item.name}</p>
      <p className="brand-name">{item.brand.name}</p>
      {item.discountPercentage ? (
        <ADiscountPrice item={item}></ADiscountPrice>
      ) : (
        <ARegularPrice item={item}></ARegularPrice>
      )}
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
      <div className="totalAmount">
        <p className="price">{total.toFixed(2)} $</p>
      </div>
    </div>
  );
};

export default TheKartItem;
