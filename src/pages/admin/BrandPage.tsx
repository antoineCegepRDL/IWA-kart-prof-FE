import Brand from '#types/Brand';
import { useNavigate, useParams } from 'react-router-dom';
import useBrandService from '#composables/services/useBrandService';
import { useForm } from 'react-hook-form';

const BrandPage = () => {
  const { id } = useParams();
  const { postBrand, patchBrand, getBrand } = useBrandService();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Brand>({
    defaultValues: async () => {
      if (id) {
        return getBrand(id);
      }
      return {
        logoUrl: '',
        name: '',
      };
    },
  });

  const onSubmit = async (brand: Brand) => {
    try {
      if (id) {
        await patchBrand({ id, ...brand });
      } else {
        await postBrand(brand);
      }
    } catch (error) {
      console.error(error);
      alert('error');
    }
    navigate('/admin/brands');
  };

  return (
    <div className="brand-wrapper">
      <h1>Ajouter une marque</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nom de la marque
          <input
            type="text"
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </label>

        <label htmlFor="name">
          Url de l'image de la marque
          <input
            type="text"
            id="logoUrl"
            {...register('logoUrl', { required: "L'URL du logo est requise" })}
          />
          {errors.logoUrl && <span className="error-message">{errors.logoUrl.message}</span>}
        </label>

        <input
          type="submit"
          className="button"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default BrandPage;
