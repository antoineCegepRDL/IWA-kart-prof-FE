import Product from '../../types/Product'

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
      <div>
        <span onClick={addQuantity}>+</span>
          {product.quantityToBuy}
        <span onClick={removeQuantity}>-</span>
        <span onClick={() => onRemoveProduct(product.id) }>Retirer</span>
      </div>
      <p className="total">{total}</p>
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