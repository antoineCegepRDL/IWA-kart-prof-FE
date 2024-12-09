import DetailedItem from '#types/DetailedItem';
import AItem from '#components/User/AItem';
import '#styles/user/itemList.scss';

interface Props {
  items: DetailedItem[];
  title: string;
}

const AItemList = ({ items, title }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="item-list">
        {items.map((item) => (
          <AItem
            item={item}
            key={item.id}
          ></AItem>
        ))}
      </div>
    </div>
  );
};

export default AItemList;
