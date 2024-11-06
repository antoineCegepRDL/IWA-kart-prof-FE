import '#styles/home.scss';
import MainImage from '#assets/mainImage.png';
import { useEffect, useState } from 'react';
import ABrandComponent from '#components/User/ABrand';
import DetailedItem from '#types/DetailedItem';
import DetailedBrand from '#types/DetailedBrand';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useBrandService from '../../composables/services/useBrandService';

const HomePage = () => {
  const [itemsInDiscount, setItemsInDiscount] = useState<DetailedItem[]>([]);
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [brands, setBrands] = useState<DetailedBrand[]>([]);

  const { getItems } = useItemService();
  const { getBrands } = useBrandService();

  useEffect(() => {
    const fetchItems = async () => {
      setItems(await getItems());
    };
    const fetchItemsInDiscount = async () => {
      const itemsInDiscoutFromServer = await getItems('itemsOnDiscount=true');
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
    <>
      <div className="homeImage">
        <img
          src={MainImage}
          alt=""
        />
        <p className="welcomeMessage">50% de rabais sur + de 500 produits</p>
      </div>
      <div className="items">
        <h2 className="section-title">En rabais</h2>
        <div className="list">
          <div className="discount-item-home item">
            <AItemList items={itemsInDiscount}></AItemList>
          </div>
        </div>
      </div>

      <div className="items">
        <h2 className="section-title">Nos nouveautés</h2>
        <AItemList items={items}></AItemList>
      </div>

      <div className="brands">
        <h2 className="section-title">Nos marques</h2>
        <div className="list">
          {brands.map((brand) => (
            <ABrandComponent
              brand={brand}
              key={brand.id}
            ></ABrandComponent>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
