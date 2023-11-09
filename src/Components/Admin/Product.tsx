import Product from '../../types/Product'

export default function ProductComponent({product}: {product: Product}) {
  return (
    <div>
      {product.id}
    </div>
  )
}