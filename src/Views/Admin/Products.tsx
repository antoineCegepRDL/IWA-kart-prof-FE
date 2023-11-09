import { useEffect, useState } from 'react'
import { DELETE, GET } from '../../composables/server'
import ProductComponent from '../../Components/Admin/Product'
import Product from '../../types/Product'
import { Link } from 'react-router-dom'
import Brand from '../../types/Brand'

export default function SendMessage() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await GET<Product>('items')
      const brands = await GET<Brand>('brands')
      productsFromServer.forEach(x => {
        const brand = brands.find(y => y.id === x.brandId)
        if (brand) {
          x.brand = brand
        }
      })
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])
  const onDeleteItem = async (id: string) => {
    await DELETE(`item/${id}`)
    setProducts([...products.filter(x => x.id !== id)])
  }
  return (
    <div className='products-wrapper'>
      <h1>Liste de des produits</h1>
      <div className='products-list'>
        {products.length === 0
          ? <p>Pas de produits</p>
          :
          <table>
            <thead>
              <tr>
                <th>
                  nom
                </th>
                <th>
                  description
                </th>
                <th>
                  prix
                </th>
                <th>
                  rabais
                </th>
                <th>
                  quantité
                </th>
                <th>
                  image
                </th>
                <th>
                  marque
                </th>
                <th>
                  logo de la marque
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map(product =>
                <ProductComponent product={product} onDeleteItem={onDeleteItem} key={product.id}></ProductComponent>
              )}
            </tbody>
          </table>
        }
      </div>
      <Link to="/admin/product">Créer un nouveau produit</Link>
    </div>
  )
}