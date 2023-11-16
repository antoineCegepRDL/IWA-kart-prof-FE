import Product from "../types/Product";
const key = 'kartProducts'

export function getProductsFromStorage(): Product[] {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as Product[]
}

export function removeProductFromStorage(id: string) {
  const products = getProductsFromStorage()
  localStorage.setItem(key, JSON.stringify(products.filter(x => x.id !== id)))
}

export function setProductFromStorage(product: Product) {
  const products = getProductsFromStorage()
  const productToUpdate = products.find(x => x.id === product.id)
  if (productToUpdate) {
    productToUpdate.quantityToBuy = product.quantityToBuy
  }
  localStorage.setItem(key, JSON.stringify(products))
}

export function addProductFromStorage(product: Product) {
  let products = getProductsFromStorage()
  products = products.filter(x => x.id !== product.id)
  product.quantityToBuy = 1
  products.push(product)
  localStorage.setItem(key, JSON.stringify(products))
}

export function clearStorage() {
  localStorage.removeItem(key)
}