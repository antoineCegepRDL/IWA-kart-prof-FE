import KartItem from '#types/KartItem';
import useLocalStorage from '#composables/useLocalStorage';
import DetailedItem from '../types/DetailedItem';

const useKartStorage = () => {
  const { getItem, removeItem, setItem } = useLocalStorage<KartItem[]>();
  const getItemsFromStorage = (): KartItem[] => {
    // Retourne la liste des items du local storage.
    // Si la liste n'exsite pas, retourne un tableau vide avec l'opérateur ??.
  };

  const removeItemFromStorage = (id: string): void => {
    // Va chercher la liste des items dans le local storage.
    // Retire l'item avec l'id correspondant à celui passé en paramètre.
    // Et met à jour la liste dans le local storage.
  };

  const updateItemFromStorage = (item: KartItem): void => {
    // Va chercher la liste des items dans le local storage.
    // Met à jour l'item correspondant à celui passé en paramètre.
    // Et met à jour la liste dans le local storage.
  };

  const addItemFromStorage = (item: DetailedItem): void => {
    // Va chercher la liste des items dans le local storage.
    // Filtre la liste pour s'assurer que l'item n'est pas présent deux fois
    // Ajoute l'item avec une quantité de 1. (Voir les todos sur comment on mettait à jour le todo avec l'opérateur ...)
    // Et met à jour la liste dans le local storage.
  };

  const clearStorage = (): void => {
    // Retire la liste du storage
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
