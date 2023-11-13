import '../../styles/home.scss'
import mainImage from '../../images/mainImage.png'
import { useEffect, useState } from 'react'
import { GET } from '../../composables/server'
import ProductComponent from '../../Components/User/Product'
import BrandComponent from '../../Components/User/Brand'
import Product from '../../types/Product'
import Brand from '../../types/Brand'

export default function SendMessage() {
  const [productsInDiscount, setProductsInDiscount] = useState<Product[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const productsInDiscoutFromServer = await GET<Product[]>('items?itemsOnDiscount=true')
      const productsFromServer = await GET<Product[]>('items')
      const brands = await GET<Brand[]>('brands')
      productsFromServer.forEach(x => {
        const brand = brands.find(y => y.id === x.brandId)
        if (brand) {
          x.brand = brand
        }
      })

      productsInDiscoutFromServer.forEach(x => {
        const brand = brands.find(y => y.id === x.brandId)
        if (brand) {
          x.brand = brand
        }
      })

      setProductsInDiscount(productsInDiscoutFromServer)
      setProducts(productsFromServer)
      setBrands(brands)
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
          <h2 className="section-title">En rabais</h2>
          <div className='list'>
            {productsInDiscount.map(product =>
              <div className='discount-product-home'>
                <ProductComponent product={product} key={product.id}></ProductComponent>
              </div>
            )}
          </div>
        </div>

        <div className='products'>
          <h2 className="section-title">Nos nouveautés</h2>
          <div className='list'>
            {products.map(product =>
              <div className='new-product-home'>
                <ProductComponent product={product} key={product.id}></ProductComponent>
              </div>
            )}
          </div>
        </div>

        <div className='brands'>
          <h2 className="section-title">Nos marques</h2>
          <div className='list'>
            {brands.map(brand =>
                <BrandComponent brand={brand} key={brand.id}></BrandComponent>
            )}
          </div>
        </div>
      </div>
    </>
  )
}