import { useParams } from 'react-router-dom'
import Product from '../../types/Product'
import { useEffect, useState } from 'react'
import { GET } from '../../composables/server'
import ProductComponent from '../../Components/User/Product'
import Brand from '../../types/Brand'
import { addProduct } from '../../composables/localStorage'

export default function ProductPage() {
  const [product, setProduct] = useState<Product>()
  let { id } = useParams()
  useEffect(() => {
    const getProduct = async () => {
      const product = await GET<Product>(`item/${id}`)
      if(product) {
        const brand = await GET<Brand>(`brand/${product.brandId}`)
        product.brand = brand
        setProduct(product)
      }
    }
    getProduct()
  }, [])

  const onAddToKartClick = () => {
    if (product)
    {
      addProduct(product)
    }
  }
  return (
    <div className='product'>
      {product 
      ? <ProductComponent product={product}></ProductComponent>
      : <></>}
      <div>
        <p onClick={onAddToKartClick}>Ajouter au panier</p>
      </div>
    </div>
  )
}