import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import AItem from '#components/User/AItem';
import useKartStorage from '#composables/useKartStorage';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';

const TheItemPage = () => {
  const [item, setItem] = useState<DetailedItem>();
  const [itemsInDiscount, setItemsInDiscount] = useState<DetailedItem[]>([]);
  const [items, setItems] = useState<DetailedItem[]>([]);
  const { addItemFromStorage } = useKartStorage();

  const { getItem, getItems } = useItemService();
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        const item = await getItem(id);
        setItem(item);
      }
    };
    const fetchItems = async () => {
      setItemsInDiscount(await getItems('itemsOnDiscount=true&limit=3&offset=0'));
      setItems(await getItems('limit=3&offset=0'));
    };

    fetchItem();
    fetchItems();
  }, [id]);

  const onAddToKartClick = () => {
    if (item) {
      alert('Le produit a été ajouté');
      addItemFromStorage(item);
    }
  };

  return (
    <div className="content">
      <div className="item-details">
        {item && (
          <div className="m-auto w-50 flex-1">
            <div className="flex gap-4">
              <AItem item={item} />
              <div></div>
              <div className="flex-grow text-center">
                <h3>Des infos utiles</h3>
                <p>{item?.description}</p>
              </div>
              <div>
                <h3>Tu en as envie?</h3>
                <div
                  className="button"
                  onClick={onAddToKartClick}
                >
                  <p>Ajouter au panier</p>
                </div>
                <h3>Information importante!</h3>
                <p>Il n'en reste que {item.quantity} en inventaire. Fait vite!</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="section">
        <AItemList
          items={items}
          title="Vous pourriez aimer..."
        />
      </div>

      <div className="section mb-10">
        <AItemList
          items={itemsInDiscount}
          title={'En rabais'}
        />
      </div>
    </div>
  );
};

export default TheItemPage;
