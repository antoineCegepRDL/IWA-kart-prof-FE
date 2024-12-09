import '#styles/user/categoryPage.scss';
import { useEffect, useState } from 'react';
import DetailedItem from '#types/DetailedItem';
import AItemList from '#components/User/AItemList';
import useItemService from '#composables/services/useItemService';
import useCategoryService from '#composables/services/useCategoryService';
import { useParams } from 'react-router-dom';
import DetailedCategory from '#types/DetailedCategory';

const TheCategoryPage = () => {
  const [items, setItems] = useState<DetailedItem[]>([]);
  const [category, setCategory] = useState<DetailedCategory>();

  const { getItemsByCategoryId } = useItemService();
  const { getCategory } = useCategoryService();

  const { id } = useParams();
  useEffect(() => {
    const fetchItemsAndCategory = async () => {
      if (id) {
        setItems(await getItemsByCategoryId(id));
        setCategory(await getCategory(id));
      }
    };
    fetchItemsAndCategory();
  }, [id]);

  return (
    <div>
      <h1>Tous nos items de la catégorie : </h1>
      {items.length === 0 ? (
        <p>Aucun item encore pour cette catégorie</p>
      ) : (
        <AItemList
          items={items}
          title={category?.name ?? ''}
        />
      )}
    </div>
  );
};

export default TheCategoryPage;
