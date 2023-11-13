import { useEffect, useState } from 'react'
import { DELETE, GET } from '../../composables/server'
import BrandComponent from '../../Components/Admin/Brand'
import { Link } from 'react-router-dom'
import Brand from '../../types/Brand'


export default function SendMessage() {
  const [brands, setBrands] = useState<Brand[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const brandsFromServer = await GET<Brand[]>('brands')
      setBrands(brandsFromServer)
    }
    getProducts()
  }, [])

  const onDeleteItem = async (id: string) => {
    await DELETE(`brand/${id}`)
    setBrands([...brands.filter(x => x.id !== id)])
  }
  return (
    <div className='brands-wrapper'>
      <h1>Liste de des marques</h1>
      <div className='brands-list'>
        {brands.length === 0
          ? <p>Pas de marques</p>
          :
          <table>
            <thead>
              <tr>
                <th>
                  nom
                </th>
                <th>
                  image
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map(brand =>
                <BrandComponent brand={brand} onDeleteItem={onDeleteItem} key={brand.id}></BrandComponent>
              )}
            </tbody>
          </table>
        }
      </div>
      <Link to="/admin/brand">Créer une nouvelle marque</Link>
    </div>
  )
}