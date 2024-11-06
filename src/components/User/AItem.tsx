import DetailedItem from '#types/DetailedItem';
import ADiscountPrice from '#components/User/ADiscountPrice';
import ARegularPrice from '#components/User/ARegularPrice';

interface Props {
  item: DetailedItem;
}

const AItem = ({ item }: Props) => {
  return (
    <>
      <div className="imageContainer">
        <img
          src={item.imageUrl}
          alt=""
        />
      </div>
      <hr />
      <div>
        <p className="item-name">{item.name}</p>
        <p className="brand-name">{item.brand.name}</p>
        {item.discountPercentage > 0 ? (
          <ADiscountPrice item={item}></ADiscountPrice>
        ) : (
          <ARegularPrice item={item}></ARegularPrice>
        )}
      </div>
    </>
  );
};

export default AItem;
