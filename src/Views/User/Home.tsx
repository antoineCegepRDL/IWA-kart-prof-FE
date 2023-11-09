import '../../styles/home.scss'
import mainImage from'../../images/mainImage.png'
import { useEffect, useState } from 'react'
import { GET } from '../../composables/server'
import ProductComponent from '../../Components/User/Product'
import Product from '../../types/Product'

export default function SendMessage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await GET<Product>('items')
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])
  
  return (
    <>
    <div className='wrapper'>
      <div className='homeImage'>
        <img src={mainImage} alt="" />
        <p className='welcomeMessage'>
        50% de rabais sur + de 500 produits
        </p>
      </div>
      <div className='products'>
        <p className="text">En rabais</p>
        <div className='list'>
          {products.map(product => 
            <ProductComponent product={product}></ProductComponent>
          )}
        </div>
      </div>
    </div>
    </>
  )
}