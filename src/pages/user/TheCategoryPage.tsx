import '#styles/home.scss';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useCategoryService from '#composables/services/useCategoryService';
import { useParams } from 'react-router-dom';
import DetailedCategory from '../../types/DetailedCategory';

const TheCategoryPage = () => {
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [category, setCategory] = useState<DetailedCategory>();

  const { getItemsByCategoryId } = useItemService();
  const { getCategory } = useCategoryService();

  const { id } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      if (id) {
        setItems(await getItemsByCategoryId(id));
      }
    };
    const fetchCategory = async () => {
      if (id) {
        setCategory(await getCategory(id));
      }
    };
    fetchItems();
    fetchCategory();
  }, [id]);

  return (
    <>
      <div className="wrapper">
        <h1>Tous nos items de la catégorie : {category?.name}</h1>
        <AItemList
          items={items}
          title={category?.name ?? ''}
        ></AItemList>
      </div>
    </>
  );
};

export default TheCategoryPage;
