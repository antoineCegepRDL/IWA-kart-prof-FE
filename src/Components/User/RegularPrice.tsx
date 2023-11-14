import Product from "../../types/Product"

export default  ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='regular-price'>{product.price}</p>
    </div>
  )
}