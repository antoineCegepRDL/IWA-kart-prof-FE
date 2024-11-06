import KartItem from '#types/KartItem';
import useLocalStorage from '#composables/useLocalStorage';
import DetailedItem from '../types/DetailedItem';

const useKartStorage = () => {
  const { getItem, removeItem, setItem } = useLocalStorage<KartItem[]>();
  const getItemsFromStorage = (): KartItem[] => {
    return getItem() ?? [];
  };

  const removeItemFromStorage = (id: string): void => {
    const items = getItemsFromStorage();
    setItem(items.filter((x) => x.id !== id));
  };

  const updateItemFromStorage = (item: KartItem): void => {
    const items = getItemsFromStorage();
    setItem(items.map((x) => (x.id === item.id ? item : x)));
  };

  const addItemFromStorage = (item: DetailedItem): void => {
    let items = getItemsFromStorage();
    items = items.filter((x) => x.id !== item.id);
    items.push({ ...item, quantityToBuy: 1 });
    setItem(items);
  };

  const clearStorage = (): void => {
    removeItem();
  };

  return {
    getItemsFromStorage,
    removeItemFromStorage,
    updateItemFromStorage,
    addItemFromStorage,
    clearStorage,
  };
};

export default useKartStorage;
