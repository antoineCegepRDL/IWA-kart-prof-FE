import Product from '../../types/Product'
import DiscountPrice from './DiscountPrice'
import RegularPrice from './RegularPrice'

export default function ProductComponent({ product }: { product: Product }) {
  return (
    <>
      <div className="imageContainer">
        <img src={product.imageUrl} alt="" />
      </div>
      <hr />
      <div>
        <p className='product-name'>{product.name}</p>
        <p className='brand-name'>{product.brand.name}</p>
        {product.discountPercentage > 0
          ? <DiscountPrice product={product}></DiscountPrice>
          : <RegularPrice product={product}></RegularPrice>
        }
      </div>
    </>
  )
}