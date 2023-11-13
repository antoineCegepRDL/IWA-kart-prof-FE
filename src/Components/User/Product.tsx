import Product from '../../types/Product'

export default function ProductComponent({ product }: { product: Product }) {
  return (
    <div className='product'>
      <div className="imageContainer">
        <img src={product.imageUrl} alt="" />
      </div>
      <hr />
      <p className='product-name'>{product.name}</p>
      <p className='brand-name'>{product.brand.name}</p>
      {product.discountPercentage > 0
        ? <DiscountPrice product={product}></DiscountPrice>
        : <RegularPrice product={product}></RegularPrice>
      }
    </div>
  )
}

const DiscountPrice = ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='old-price'>{product.price}</p>
      <p className='regular-price'>{product.price * product.discountPercentage}</p>
    </div>
  )
}

const RegularPrice = ({ product }: { product: Product }) => {
  return (
    <div className='price'>
      <p className='regular-price'>{product.price}</p>
    </div>
  )
}