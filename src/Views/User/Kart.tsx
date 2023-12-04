import '../../styles/kart.scss'
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
    const total = products.reduce((acc, x) => acc + x.quantityToBuy * ((1-x.discountPercentage) * x.price)
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
    const order = products.map(x => ({ quantity: x.quantityToBuy, id: x.id }))
    POST('order', order)
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
              <div className='product-kart'>
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
          : <div>
            <div className='total'>
              <p className='price'>Total : {total.toFixed(2)}$</p>
              <p className='price'>TPS : {(total * 0.05).toFixed(2)}$</p>
              <p className='price'>TVP : {(total * 0.10).toFixed(2)}$</p>
              <p className='price total'>Total : {(total * 1.15).toFixed(2)}$</p>
            </div>
            <div className='button center' onClick={handleSubmit}>
              <p>Passer la commande</p>
            </div>
          </div>
        }
      </div>
    </>
  )
}