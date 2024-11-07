import '#styles/home.scss';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useBrandService from '#composables/services/useBrandService';
import { useParams } from 'react-router-dom';
import DetailedBrand from '../../types/DetailedBrand';

const TheBrandPage = () => {
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [brand, setBrand] = useState<DetailedBrand>();

  const { getItemsByBrandId } = useItemService();
  const { getBrand } = useBrandService();

  const { id } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      if (id) {
        setItems(await getItemsByBrandId(id));
      }
    };
    const fetchBrand = async () => {
      if (id) {
        setBrand(await getBrand(id));
      }
    };
    fetchItems();
    fetchBrand();
  }, [id]);

  return (
    <>
      <div className="wrapper">
        <h1>Tous nos items de la marque : {brand?.name}</h1>
        <AItemList
          items={items}
          title={brand?.name ?? ''}
        ></AItemList>
      </div>
    </>
  );
};

export default TheBrandPage;
