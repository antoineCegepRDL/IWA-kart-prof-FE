import '#styles/kart.scss';
import { useEffect, useState } from 'react';
import TheKartItem from '#components/User/TheKartItem';
import KartItem from '#types/KartItem';
import useKartStorage from '#composables/useKartStorage';
import useItemService from '#composables/services/useItemService';
import OrderItem from '#types/OrderItem';

const TheKartPage = () => {
  const [items, setItems] = useState<KartItem[]>([]);

  const { clearStorage, getItemsFromStorage, removeItemFromStorage, updateItemFromStorage } = useKartStorage();
  const { orderItems } = useItemService();
  const total = items.reduce((acc, x) => acc + x.quantityToBuy * ((1 - x.discountPercentage) * x.price), 0);

  useEffect(() => {
    setItems(getItemsFromStorage());
  }, []);

  const handleChangeQuatity = (item: KartItem) => {
    updateItemFromStorage(item);
    setItems(items.map((x) => (x.id === item.id ? item : x)));
  };

  const handleSubmit = async () => {
    orderItems(items.map<OrderItem>((x) => ({ quantity: x.quantityToBuy, id: x.id })));
    clearStorage();
    setItems([]);
  };

  const handleRemoveItem = async (id: string) => {
    setItems(items.filter((x) => x.id !== id));
    removeItemFromStorage(id);
  };

  return (
    <>
      <div className="wrapper">
        <div className="items">
          <h2 className="section-title">Mon panier</h2>
          <div className="list">
            {items.map((item) => (
              <div
                className="item-kart"
                key={item.id}
              >
                <TheKartItem
                  item={item}
                  onChangeQuatity={handleChangeQuatity}
                  onRemoveItem={handleRemoveItem}
                ></TheKartItem>
              </div>
            ))}
          </div>
        </div>
        {items.length === 0 ? (
          <div>Le panier est vide!</div>
        ) : (
          <div>
            <div className="total">
              <p className="price">Total : {total.toFixed(2)}$</p>
              <p className="price">TPS : {(total * 0.05).toFixed(2)}$</p>
              <p className="price">TVP : {(total * 0.1).toFixed(2)}$</p>
              <p className="price total">Total : {(total * 1.15).toFixed(2)}$</p>
            </div>
            <div
              className="button center"
              onClick={handleSubmit}
            >
              <p>Passer la commande</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TheKartPage;
