import { useEffect, useState } from 'react';
import ACategory from '#components/Admin/ACategory';
import { Link, useNavigate } from 'react-router-dom';
import useCategoryService from '#composables/services/useCategoryService';
import DetailedCategory from '../../types/DetailedCategory';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { getCategories, deleteCategory } = useCategoryService();
  const [categories, setCategories] = useState<DetailedCategory[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await getCategories());
    };
    fetchCategories();
  }, []);

  const handleDeleteItem = async (id: string) => {
    await deleteCategory(id);
    setCategories([...categories.filter((x) => x.id !== id)]);
  };

  const handleEdit = async (id: string) => {
    navigate(`/admin/category/${id}`);
  };

  return (
    <div className="brands-wrapper">
      <h1>Liste de des catégories</h1>
      <div className="brands-list">
        {categories.length === 0 ? (
          <p>Pas de catégories</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>nom</th>
                <th>Modifier</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <ACategory
                  category={category}
                  onDelete={handleDeleteItem}
                  onEdit={handleEdit}
                  key={category.id}
                ></ACategory>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/admin/category">Créer une nouvelle catégorie</Link>
    </div>
  );
};

export default CategoriesPage;
