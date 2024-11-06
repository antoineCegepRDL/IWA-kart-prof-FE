import Category from '#types/Category';
import { useNavigate, useParams } from 'react-router-dom';
import useCategoryService from '#composables/services/useCategoryService';
import { useForm } from 'react-hook-form';

const CategoryPage = () => {
  const { id } = useParams();
  const { postCategory, patchCategory, getCategory } = useCategoryService();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>({
    defaultValues: async () => {
      if (id) {
        return getCategory(id);
      }
      return {
        name: '',
      };
    },
  });

  const onSubmit = async (category: Category) => {
    try {
      if (id) {
        await patchCategory({ id, ...category });
      } else {
        await postCategory(category);
      }
    } catch (error) {
      console.error(error);
      alert('error');
    }
    navigate('/admin/categories');
  };

  return (
    <div className="brand-wrapper">
      <h1>Ajouter une catégorie</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Nom de la catégorie
          <input
            type="text"
            {...register('name', { required: 'Le nom est requis' })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
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

export default CategoryPage;
