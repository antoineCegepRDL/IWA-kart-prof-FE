import '#styles/user/brandPage.scss';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useBrandService from '#composables/services/useBrandService';
import { useParams } from 'react-router-dom';
import DetailedBrand from '#types/DetailedBrand';

const TheBrandPage = () => {
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [brand, setBrand] = useState<DetailedBrand>();

  const { getItemsByBrandId } = useItemService();
  const { getBrand } = useBrandService();

  const { id } = useParams();
  useEffect(() => {
    const fetchItemsAndBrand = async () => {
      if (id) {
        setItems(await getItemsByBrandId(id));
        setBrand(await getBrand(id));
      }
    };
    fetchItemsAndBrand();
  }, [id]);

  return (
    <div>
      <div className="header">
        <h1>Tous nos items de la marque : </h1>
        <img
          className="w-20 h-20"
          src={brand?.logoUrl}
          alt=""
        />
      </div>
      {items.length === 0 ? (
        <p>Aucun item encore pour cette marque</p>
      ) : (
        <AItemList
          items={items}
          title={brand?.name ?? ''}
        />
      )}
    </div>
  );
};

export default TheBrandPage;
