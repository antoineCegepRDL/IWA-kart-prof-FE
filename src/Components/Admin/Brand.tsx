import Brand from '../../types/Brand'

export default function ProductComponent({brand, onDeleteItem}: {brand: Brand, onDeleteItem: Function}) {
  const handleDeleteItem =() => {
    onDeleteItem(brand.id)
  }
  
  return (
    <tr>
      <td>{brand.name}</td>
      <td>
        <img src={brand.logoUrl} alt="" />
      </td>
      <td>
        <p className='supprimer' onClick={handleDeleteItem}>Supprimer</p>
      </td>
    </tr>
  )
}