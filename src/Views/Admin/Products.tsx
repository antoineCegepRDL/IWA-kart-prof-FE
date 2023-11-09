import '../../styles/home.scss'
import { useEffect, useState } from 'react'
import { GET } from '../../composables/server'
import ProductComponent from '../../Components/Admin/Product'
import Product from '../../types/Product'
import { Link } from 'react-router-dom'

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
        <h1>Liste de des produits</h1>
        <div className='list'>
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
                </tr>
              </thead>
              <tbody>
                {products.map(product =>
                  <ProductComponent product={product}></ProductComponent>
                )}
              </tbody>
            </table>
          }

        </div>
        <Link to="/admin/product">Créer un nouveau produit</Link>
      </div>
    </>
  )
}