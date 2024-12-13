import '#styles/user/brands.scss';
import DetailedBrand from '#types/DetailedBrand';
import { Link } from 'react-router-dom';

interface Props {
  brands: DetailedBrand[];
}

const TheBrands = ({ brands }: Props) => {
  return (
    <div className="brands">
      <h2 className="text-center">Nos marques</h2>
      <div className="list">
        {brands.map((brand) => (
          <Link to={`/brand/${brand.id}`}>
            <div className="brand">
              <img src={brand.logoUrl} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TheBrands;
