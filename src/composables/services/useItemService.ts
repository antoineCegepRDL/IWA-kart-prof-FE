import DetailedItem from '#types/DetailedItem';
import Item from '#types/Item';
import OrderItem from '#types/OrderItem';
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

  const orderItems = async (items: OrderItem[]): Promise<void> => {
    await POST<OrderItem[]>('order', items);
  };

  const getItem = async (id: string): Promise<DetailedItem> => {
    const item = await GET<DetailedItem>(`item/${id}`);
    if (item) {
      return await populateItem(item);
    } else {
      throw new Error("Impossible de récupérer l'item");
    }
  };

  const getItems = async (getParms = ''): Promise<DetailedItem[]> => {
    const route = getParms ? `items?${getParms}` : 'items';
    const items = await GET<DetailedItem[]>(route);
    if (items) {
      await Promise.all(
        items.map(async (item) => {
          return await populateItem(item);
        })
      );
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

  const populateItem = async (item: DetailedItem): Promise<DetailedItem> => {
    item.brand = await getBrand(item.brandId);
    item.categories = await Promise.all(
      item.categoriesId.map(async (id) => {
        return await getCategory(id);
      })
    );
    return item;
  };

  return { postItem, getItem, getItems, patchItem, deleteItem, orderItems };
};

export default useItemService;
