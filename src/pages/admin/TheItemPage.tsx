import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Item from '#types/Item';
import DetailedCategory from '#types/DetailedCategory';
import useBrandService from '#composables/services/useBrandService';
import DetailedBrand from '#types/DetailedBrand';
import useCategoryService from '#composables/services/useCategoryService';
import useItem from '#composables/services/useItemService';
import ACategoriesCheckboxList from '../../components/ACategoriesCheckboxList';
import { useForm } from 'react-hook-form';

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBrands } = useBrandService();
  const { postItem, patchItem, getItem } = useItem();
  const { getCategories } = useCategoryService();
  const [brands, setBrands] = useState<DetailedBrand[]>([]);
  const [categories, setCategories] = useState<DetailedCategory[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      setBrands(await getBrands());
    };

    const fetchCategories = async () => {
      setCategories(await getCategories());
    };
    fetchBrands();
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({
    defaultValues: async () => {
      if (id) {
        return getItem(id);
      }
      return {
        logoUrl: '',
        name: '',
        brandId: '',
        categoriesId: [],
        description: '',
        discountPercentage: 0,
        imageUrl: '',
        price: 0,
        quantity: 0,
      };
    },
  });

  const onSubmit = async (item: Item) => {
    item.price = +item.price;
    item.quantity = +item.quantity;
    item.discountPercentage = +item.discountPercentage;
    try {
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
    <div className="item-wrapper">
      <h1>Nouveau produit</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nom du produit
          <input
            id="name"
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </label>

        <label htmlFor="description">
          Description du procuit
          <textarea
            id="description"
            {...register('description', { required: 'La description est requise' })}
          />
          {errors.description && <span className="error-message">{errors.description.message}</span>}
        </label>

        <label htmlFor="price">
          Prix
          <input
            id="price"
            type="number"
            {...register('price', {
              required: 'Le prix est requis',
              min: { value: 0.01, message: 'Le prix doit être positif et plus grand que 0' },
            })}
          />
          {errors.price && <span className="error-message">{errors.price.message}</span>}
        </label>

        <label htmlFor="quantity">
          Quantité en inventaire
          <input
            id="quantity"
            type="number"
            {...register('quantity', {
              required: 'La quantitée est requise',
              min: { value: 1, message: 'La quantité doit être positive et plus grand que 1' },
            })}
          />
          {errors.quantity && <span className="error-message">{errors.quantity.message}</span>}
        </label>

        <label htmlFor="discountPercentage">
          Pourcentage de rabais
          <input
            id="discountPercentage"
            {...register('discountPercentage', {
              required: 'Le pourcentage de rabais est requis',
              min: { value: 0, message: 'Le pourcentage doit être positif' },
              max: { value: 1, message: 'Le pourcentage ne doit pas dépasser 1' },
            })}
          />
          {errors.discountPercentage && <span className="error-message">{errors.discountPercentage.message}</span>}
        </label>

        <label htmlFor="imageUrl">
          Url de l'image du produit
          <input
            id="imageUrl"
            {...register('imageUrl', { required: "L'URL de l'image est requise" })}
          />
          {errors.imageUrl && <span className="error-message">{errors.imageUrl.message}</span>}
        </label>

        <label htmlFor="brandId">
          <select
            id="brandId"
            {...register('brandId', { required: 'La marque est requise' })}
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
          {errors.brandId && <span className="error-message">{errors.brandId.message}</span>}
        </label>

        <div>
          <h3>Catégories</h3>
          <ACategoriesCheckboxList
            allCategories={categories}
            errorMessage={errors.categoriesId?.message || ''}
            register={register}
          />
        </div>
        <input
          id="submit"
          type="submit"
          className="button"
          value={id ? 'Modifier' : 'Créer'}
        />
      </form>
    </div>
  );
};

export default ItemPage;
