import '#styles/item.scss';
import { useParams } from 'react-router-dom';
import DetailedItem from '#types/DetailedItem';
import { useEffect, useState } from 'react';
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
    <div>
      <div className="item-details">
        <div className="item">
          {item ? <AItem item={item}></AItem> : <></>}
          <p>{item?.description}</p>
          <div
            className="button"
            onClick={onAddToKartClick}
          >
            <p>Ajouter au panier</p>
          </div>
        </div>
      </div>

      <AItemList
        items={items}
        title="Vous pourriez aimer..."
      ></AItemList>

      <AItemList
        items={itemsInDiscount}
        title={'En rabais'}
      ></AItemList>
    </div>
  );
};

export default TheItemPage;
