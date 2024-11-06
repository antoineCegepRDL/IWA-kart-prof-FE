import { useEffect, useState } from 'react';
import BrandComponent from '#components/Admin/ABrand';
import { Link, useNavigate } from 'react-router-dom';
import DetailedBrand from '#types/DetailedBrand';
import useBrandService from '#composables/services/useBrandService';

const BrandsPage = () => {
  const navigate = useNavigate();
  const { getBrands, deleteBrand } = useBrandService();
  const [brands, setBrands] = useState<DetailedBrand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      setBrands(await getBrands());
    };
    fetchBrands();
  }, []);

  const onDeleteItem = async (id: string) => {
    await deleteBrand(id);
    setBrands([...brands.filter((x) => x.id !== id)]);
  };

  const onEdit = async (id: string) => {
    navigate(`/admin/brand/${id}`);
  };

  return (
    <div className="brands-wrapper">
      <h1>Liste de des marques</h1>
      <div className="brands-list">
        {brands.length === 0 ? (
          <p>Pas de marques</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>nom</th>
                <th>image</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <BrandComponent
                  brand={brand}
                  onDelete={onDeleteItem}
                  onEdit={onEdit}
                  key={brand.id}
                ></BrandComponent>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/admin/brand">Créer une nouvelle marque</Link>
    </div>
  );
};

export default BrandsPage;
