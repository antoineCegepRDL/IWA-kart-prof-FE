import DetailedBrand from '#types/DetailedBrand';

interface Props {
  brand: DetailedBrand;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ABrand = ({ brand, onDelete, onEdit }: Props) => {
  return (
    <tr>
      <td>{brand.name}</td>
      <td>
        <img
          src={brand.logoUrl}
          alt=""
        />
      </td>
      <td>
        <p
          className="Modifier"
          onClick={() => onEdit(brand.id)}
        >
          Modifier
        </p>
      </td>
      <td>
        <p
          className="supprimer"
          onClick={() => onDelete(brand.id)}
        >
          Supprimer
        </p>
      </td>
    </tr>
  );
};

export default ABrand;
