import DetailedItem from '#types/DetailedItem';
import ADiscountPrice from '#components/User/ADiscountPrice';
import ARegularPrice from '#components/User/ARegularPrice';
import '#styles/user/item.scss';
import { Link } from 'react-router-dom';

interface Props {
  item: DetailedItem;
}

const AItem = ({ item }: Props) => {
  return (
    <div className="item">
      <Link
        className="item-container"
        key={item.id}
        to={`/item/${item.id}`}
      >
        <img
          src={item.imageUrl}
          alt=""
        />
        <div className="item-description border-top">
          <h3>{item.name}</h3>
          <p className="brand-name">{item.brand.name}</p>
          {item.discountPercentage > 0 ? (
            <ADiscountPrice item={item}></ADiscountPrice>
          ) : (
            <ARegularPrice item={item}></ARegularPrice>
          )}
        </div>
      </Link>
    </div>
  );
};

export default AItem;
