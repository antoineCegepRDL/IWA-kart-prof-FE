import DetailedItem from '#types/DetailedItem';
import Item from '#types/Item';
import useBrandService from './useBrandService';
import useCategoryService from './useCategoryService';
import useFetch from './useFetch';

const useItemService = () => {
  const { getBrand } = useBrandService();
  const { getCategory } = useCategoryService();
  const { GET, POST, DELETE, PATCH } = useFetch();

  const postItem = async (item: Item): Promise<DetailedItem> => {
    const newItem = await POST<Item, DetailedItem>('item', item);
    if (newItem) {
      return newItem;
    } else {
      throw new Error('Impossible de créer litem');
    }
  };

  const getItem = async (
    id: string,
    setItem: React.Dispatch<React.SetStateAction<Item>> | undefined = undefined
  ): Promise<DetailedItem> => {
    const item = await GET<DetailedItem>(`item/${id}`);
    if (item) {
      if (setItem) {
        setItem(item);
      }
      return item;
    } else {
      throw new Error('Impossible de créer la tâche');
    }
  };

  const getItems = async (
    setItems: React.Dispatch<React.SetStateAction<DetailedItem[]>> | undefined = undefined
  ): Promise<DetailedItem[]> => {
    const items = await GET<DetailedItem[]>('items');
    if (items) {
      await Promise.all(
        items.map(async (item) => {
          item.brand = await getBrand(item.brandId);
          item.categories = await Promise.all(
            item.categoriesId.map(async (id) => {
              return await getCategory(id);
            })
          );
        })
      );
      if (setItems) {
        setItems(items);
      }
      return items;
    } else {
      throw new Error('Impossible de récupérer les tâches');
    }
  };

  // ACM GARDER CA
  const patchItem = async ({ id, item }: { id: string; item: Item }) => {
    PATCH<Item>(`Item/${id}`, item);
  };

  const deleteItem = async (id: string) => {
    DELETE(`Item/${id}`);
  };

  return { postItem, getItem, getItems, patchItem, deleteItem };
};

export default useItemService;
