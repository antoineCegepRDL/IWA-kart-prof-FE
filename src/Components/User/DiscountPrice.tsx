import Product from "../../types/Product"

export default ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='old-price'>{product.price}</p>
      <p className='regular-price'>{product.price * product.discountPercentage}</p>
    </div>
  )
}