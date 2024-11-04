import DetailedItem from '#types/DetailedItem';

interface Props {
  item: DetailedItem;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const AProduct = ({ item, onEdit, onDelete }: Props) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}$</td>
      <td>{item.discountPercentage}%</td>
      <td>{item.quantity}</td>
      <td>
        <img
          src={item.imageUrl}
          alt=""
        />
      </td>
      <td>{item.brand?.name}</td>
      <td>
        <img
          src={item.brand?.logoUrl}
          alt=""
        />
      </td>
      {/* //ACM Garder ca */}
      <td>{item.categories.map((c) => c.name).join(', ')}</td>
      <td>
        <p onClick={() => onEdit(item.id)}>Modifier</p>
      </td>
      <td>
        <p
          className="supprimer"
          onClick={() => onDelete(item.id)}
        >
          Supprimer
        </p>
      </td>
    </tr>
  );
};

export default AProduct;
