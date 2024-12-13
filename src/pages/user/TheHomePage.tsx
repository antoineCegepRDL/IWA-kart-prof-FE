import '#styles/home.scss';
import MainImage from '#assets/mainImage.png';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import DetailedBrand from '#types/DetailedBrand';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useBrandService from '../../composables/services/useBrandService';
import TheBrands from '#components/User/TheBrands';

const TheHomePage = () => {
  const [itemsInDiscount, setItemsInDiscount] = useState<DetailedItem[]>([]);
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [brands, setBrands] = useState<DetailedBrand[]>([]);

  const { getItems } = useItemService();
  const { getBrands } = useBrandService();

  useEffect(() => {
    const fetchItems = async () => {
      setItems(await getItems('limit=4'));
    };
    const fetchItemsInDiscount = async () => {
      const itemsInDiscoutFromServer = await getItems('itemsOnDiscount=true&limit=2');
      setItemsInDiscount(itemsInDiscoutFromServer);
    };
    const fetchBrands = async () => {
      const brands = await getBrands();
      setBrands(brands);
    };
    fetchItemsInDiscount();
    fetchItems();
    fetchBrands();
  }, []);

  return (
    <div>
      <div className="main-image">
        <img
          src={MainImage}
          alt=""
        />
        <h1>50% de rabais sur + de 500 produits</h1>
      </div>
      <AItemList
        items={itemsInDiscount}
        title="En rabais"
      ></AItemList>

      <AItemList
        items={items}
        title="Nos nouveautés"
      ></AItemList>

      <TheBrands brands={brands} />
    </div>
  );
};

export default TheHomePage;
