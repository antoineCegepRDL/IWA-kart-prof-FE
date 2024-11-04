import { useEffect, useState } from 'react';
import Category from '#types/Category';
import { useNavigate, useParams } from 'react-router-dom';
import useCategoryService from '#composables/services/useCategoryService';

const CategoryPage = () => {
  const { id } = useParams();
  const { postCategory, patchCategory, getCategory } = useCategoryService();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Category>({
    name: '',
  });

  useEffect(() => {
    if (id) {
      getCategory(id, setFormData);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (id) {
        await patchCategory({ id, ...formData });
      } else {
        await postCategory(formData);
      }
    } catch (error) {
      console.error(error);
      alert('error');
    }
    navigate('/admin/categories');
  };

  return (
    <div className="brand-wrapper">
      <h1>Ajouter une marque</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom de la marque
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
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
