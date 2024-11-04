import Product from '../types/Item';
const key = 'kartProducts';

export const getProductsFromStorage = (): Product[] => {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as Product[];
};

export const removeProductFromStorage = (id: string): void => {
  const products = getProductsFromStorage();
  localStorage.setItem(key, JSON.stringify(products.filter((x) => x.id !== id)));
};

export const setProductFromStorage = (product: Product): void => {
  const products = getProductsFromStorage();
  const productToUpdate = products.find((x) => x.id === product.id);
  if (productToUpdate) {
    productToUpdate.quantityToBuy = product.quantityToBuy;
  }
  localStorage.setItem(key, JSON.stringify(products));
};

export const addProductFromStorage = (product: Product): void => {
  let products = getProductsFromStorage();
  products = products.filter((x) => x.id !== product.id);
  product.quantityToBuy = 1;
  products.push(product);
  localStorage.setItem(key, JSON.stringify(products));
};

export const clearStorage = (): void => {
  localStorage.removeItem(key);
};
