import DetailedBrand from '#types/DetailedBrand';
import { Link } from 'react-router-dom';

interface Props {
  brand: DetailedBrand;
}

const ABrand = ({ brand }: Props) => {
  return (
    <Link to={`/brand/${brand.id}`}>
      <div className="brand">
        <img
          src={brand.logoUrl}
          width="100"
          height="100"
          alt=""
        />
      </div>
    </Link>
  );
};

export default ABrand;
