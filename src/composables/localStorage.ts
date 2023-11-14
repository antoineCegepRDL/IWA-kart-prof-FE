import Product from "../types/Product";
const key = 'kartProducts'

export function getProductsFromStorage(): Product[] {
  return JSON.parse(localStorage.getItem(key) ?? '[]') as Product[]
}

export function removeProduct(id: string) {
  const products = getProductsFromStorage()
  localStorage.setItem('kartProducts', JSON.stringify(products.filter(x => x.id !== id)))
}

export function addProduct(product: Product) {
  let products = getProductsFromStorage()
  products = products.filter(x => x.id !== product.id)
  product.quantityToBuy = 1
  products.push(product)
  localStorage.setItem(key, JSON.stringify(products))
}

export function clearStorage() {
  localStorage.removeItem(key)
}