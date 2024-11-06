import { useNavigate } from 'react-router-dom';
import DetailedItem from '#types/DetailedItem';
import AItem from '#components/User/AItem';

interface Props {
  items: DetailedItem[];
}

const AItemList = ({ items }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="list">
      {items.map((item) => (
        <div
          key={item.id}
          className="item"
          onClick={() => navigate(`/item/${item.id}`)}
        >
          <AItem
            item={item}
            key={item.id}
          ></AItem>
        </div>
      ))}
    </div>
  );
};

export default AItemList;
