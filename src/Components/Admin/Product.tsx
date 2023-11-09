import Product from '../../types/Product'

export default function ProductComponent({product, onDeleteItem}: {product: Product, onDeleteItem: Function}) {
  const handleDeleteItem =() => {
    onDeleteItem(product.id)
  }
  
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}$</td>
      <td>{product.discountPercentage}%</td>
      <td>{product.quantity}</td>
      <td>
        <img src={product.imageUrl} alt="" />
      </td>
      <td>{product.brand?.name}</td>
      <td>
        <img src={product.brand?.logoUrl} alt="" />
      </td>
      <td>
        <p className='supprimer' onClick={handleDeleteItem}>Supprimer</p>
      </td>
    </tr>
  )
}