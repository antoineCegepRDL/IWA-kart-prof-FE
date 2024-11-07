import { useNavigate } from 'react-router-dom';
import DetailedItem from '#types/DetailedItem';
import AItem from '#components/User/AItem';

interface Props {
  items: DetailedItem[];
  title: string;
}

const AItemList = ({ items, title }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="items">
      <h2 className="section-title">{title}</h2>
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
    </div>
  );
};

export default AItemList;
