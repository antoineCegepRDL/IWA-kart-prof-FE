import '#styles/user/kart.scss';
import '#styles/user/itemList.scss';
import { useState } from 'react';
import TheKartItem from '#components/User/TheKartItem';
import TheInvoice from '#components/User/TheInvoice';
import KartItem from '#types/KartItem';
import useKartStorage from '#composables/useKartStorage';
import useItemService from '#composables/services/useItemService';
import OrderItem from '#types/OrderItem';

const TheKartPage = () => {
  const { clearStorage, getItemsFromStorage, removeItemFromStorage, updateItemFromStorage } = useKartStorage();
  const { orderItems } = useItemService();

  const [items, setItems] = useState<KartItem[]>(getItemsFromStorage());

  const handleChangeQuatity = (item: KartItem) => {
    updateItemFromStorage(item);
    setItems(items.map((x) => (x.id === item.id ? item : x)));
  };

  const handleSubmit = async () => {
    try {
      orderItems(items.map<OrderItem>((x) => ({ quantity: x.quantityToBuy, id: x.id })));
      clearStorage();
      setItems([]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveItem = async (id: string) => {
    setItems(items.filter((x) => x.id !== id));
    removeItemFromStorage(id);
  };

  return (
    <div className="content kart">
      <h2>Mon panier</h2>
      <div className="item-list">
        {items.map((item) => (
          <TheKartItem
            key={item.id}
            item={item}
            onChangeQuatity={handleChangeQuatity}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="w-1/2 m-auto text-lg">
        {items.length === 0 ? <div>Le panier est vide!</div> : <TheInvoice items={items} />}
      </div>
      <div
        className="button mx-auto my-4"
        onClick={handleSubmit}
      >
        <p>Passer la commande</p>
      </div>
    </div>
  );
};

export default TheKartPage;
