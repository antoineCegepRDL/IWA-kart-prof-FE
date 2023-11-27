import '../../styles/kart.scss'
import Product from '../../types/Product'
import DiscountPrice from './DiscountPrice'
import RegularPrice from './RegularPrice'

export default function KartProduct({ product, onChangeQuatity, onRemoveProduct }: { product: Product, onChangeQuatity: Function, onRemoveProduct: Function }) {
  const removeQuantity = () => {
    if (product.quantityToBuy > 1)
    {
      product.quantityToBuy--
      onChangeQuatity(product)
    }
  }

  const addQuantity = () => {
    if (product.quantity > product.quantityToBuy && product.quantityToBuy < 10) {
      product.quantityToBuy++
      onChangeQuatity(product)
    }
  }

  const total = product.quantityToBuy * (product.discountPercentage > 0 ? product.price * product.discountPercentage : product.price)

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
      <div className='kart-buttons'>
        <span className='kart-button button' onClick={addQuantity}>+</span>
        <span className='quantity-to-buy'>{product.quantityToBuy}</span>
        <span className='kart-button button' onClick={removeQuantity}>-</span>
        <span className='kart-button button' onClick={() => onRemoveProduct(product.id) }>X</span>
      </div>
      <div className='totalAmount'>
        <p className="price">{total.toFixed(2)}</p>
      </div>
    </div>
  )
}