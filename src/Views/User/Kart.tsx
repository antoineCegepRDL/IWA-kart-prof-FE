import { useEffect, useState } from 'react'
import { POST } from '../../composables/server'
import KartProductComponent from '../../Components/User/KartProduct'
import Product from '../../types/Product'
import { clearStorage, getProductsFromStorage, removeProductFromStorage, setProductFromStorage } from '../../composables/localStorage'

export default function SendMessage() {
  const [products, setProducts] = useState<Product[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getProducts = async () => {
      const productsFromKart: Product[] = getProductsFromStorage()
      setProducts(productsFromKart)
      calculateNewTotal(productsFromKart)
    }
    getProducts()
  }, [])

  const calculateNewTotal = (products: Product[]) => {
    const total = products.reduce((acc, x) => acc + x.quantityToBuy * (x.discountPercentage > 0 ? x.discountPercentage * x.price : x.price)
      , 0)
    setTotal(total)
  }

  const onChangeQuatity = (product: Product) => {
    setProductFromStorage(product)
    products.find(x => x.id === product.id)!.quantityToBuy = product.quantityToBuy
    setProducts([...products])
    calculateNewTotal(products)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const command = products.map(x => ({ quantity: x.quantityToBuy, id: x.id }))
    POST('command', command)
    clearStorage()
  }

  const onRemoveProduct = async (id: string) => {
    const filteredProducts = [...products].filter(x => x.id !== id)
    setProducts(filteredProducts)
    removeProductFromStorage(id)
    calculateNewTotal(filteredProducts)
  }
  return (
    <>
      <div className='wrapper'>
        <div className='products'>
          <h2 className="section-title">Mon panier</h2>
          <div className='list'>
            {products.map(product =>
              <div className='new-product-home'>
                <KartProductComponent product={product} onChangeQuatity={onChangeQuatity} onRemoveProduct={onRemoveProduct} key={product.id}></KartProductComponent>
              </div>
            )}
          </div>
        </div>
        {
          products.length === 0 
          ? <div>
            Le panier est vide!
          </div>
          : <>
            <div className='total'>
              <p>Total : {total}$</p>
              <p>TPS : {total * 0.05}$</p>
              <p>TVP : {total * 0.10}$</p>
              <p>Total : {total * 1.15}$</p>
            </div>
            <div className='button' onClick={handleSubmit}>
              <p>Passer la commande</p>
            </div>
          </>
        }
      </div>
    </>
  )
}