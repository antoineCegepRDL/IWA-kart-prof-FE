import Product from "../../types/Product"

export default  ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='regular-price'>{product.price.toFixed(2)}</p>
    </div>
  )
}