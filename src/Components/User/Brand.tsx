import Brand from '../../types/Brand'

export default function ProductComponent({ brand }: { brand: Brand }) {
  return (
    <div className='brand'>
      <img src={brand.logoUrl} width='100' height='100' alt="" />
    </div>
  )
}