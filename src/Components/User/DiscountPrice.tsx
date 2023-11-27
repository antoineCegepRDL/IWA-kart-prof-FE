import Product from "../../types/Product"

export default ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='old-price'>{product.price.toFixed(2)}</p>
      <p className='regular-price'>{(product.price * product.discountPercentage).toFixed(2)}</p>
    </div>
  )
}