import DetailedCategory from '#types/DetailedCategory';

interface Props {
  category: DetailedCategory;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ABrand = ({ category, onDelete, onEdit }: Props) => {
  return (
    <tr>
      <td>{category.name}</td>
      <td>
        <p
          className="Modifier"
          onClick={() => onEdit(category.id)}
        >
          Modifier
        </p>
      </td>
      <td>
        <p
          className="supprimer"
          onClick={() => onDelete(category.id)}
        >
          Supprimer
        </p>
      </td>
    </tr>
  );
};

export default ABrand;
