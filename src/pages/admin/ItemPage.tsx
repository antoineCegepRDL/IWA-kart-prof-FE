import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Item from '#types/Item';
import DetailedCategory from '#types/DetailedCategory';
import useBrandService from '#composables/services/useBrandService';
import DetailedBrand from '#types/DetailedBrand';
import useCategoryService from '#composables/services/useCategoryService';
import useItem from '#composables/services/useItemService';
import ACategoriesCheckboxList from '../../components/ACategoriesCheckboxList';

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBrands } = useBrandService();
  const { postItem, patchItem, getItem } = useItem();
  const { getCategories } = useCategoryService();
  const [brands, setBrands] = useState<DetailedBrand[]>([]);
  const [categories, setCategories] = useState<DetailedCategory[]>([]);

  useEffect(() => {
    getBrands(setBrands);
    getCategories(setCategories);
  }, []);

  const [formData, setFormData] = useState<Item>({
    name: '',
    description: '',
    discountPercentage: 0,
    imageUrl: '',
    price: 0,
    quantity: 0,
    brandId: '',
    categoriesId: [],
  });

  useEffect(() => {
    if (id) {
      console.log('🚀 ~ useEffect ~ id:', id);
      getItem(id, setFormData);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = ({ name, value }: { name: string; value: any }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const item = formData;
      item.price = +item.price;
      item.discountPercentage = +item.discountPercentage;
      item.quantity = +item.quantity;
      if (id) {
        await patchItem({ item, id });
      } else {
        await postItem(item);
      }
      navigate('/admin/items');
    } catch (error) {
      console.error(error);
      alert('error');
    }
  };

  return (
    <div className="product-wrapper">
      <h1>Nouveau produit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom du produit
          <input
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="description">
          Description du procuit
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="price">
          Prix
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="quantity">
          Quantité en inventaire
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="discountPercentage">
          Pourcentage de rabais
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="imageUrl">
          Url de l'image du produit
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={(e) => handleChange(e.target)}
          />
        </label>

        <label htmlFor="brandId">
          <select
            name="brandId"
            id="brandId"
            onChange={(e) => handleChange(e.target)}
          >
            <option value="">Choisir une valeur</option>
            {brands.map((brand) => (
              <option
                key={brand.id}
                value={brand.id}
              >
                {brand.name}
              </option>
            ))}
          </select>
        </label>

        <div>
          <h3>Catégories</h3>
          <ACategoriesCheckboxList
            categories={categories}
            selectedCategoriesId={formData.categoriesId}
            onChange={(ids) => handleChange({ name: 'categoriesId', value: ids })}
          />
        </div>

        <input
          type="submit"
          className="button"
          value="Créer"
        />
      </form>
    </div>
  );
};

export default ItemPage;
