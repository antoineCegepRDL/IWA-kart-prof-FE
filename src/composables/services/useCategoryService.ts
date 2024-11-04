import Category from '#types/Category';
import DetailedCategory from '#types/DetailedCategory';
import useFetch from './useFetch';

const useCategoryService = () => {
  const { GET, POST, DELETE, PATCH } = useFetch();

  const postCategory = async (category: Category): Promise<DetailedCategory> => {
    const newCategory = await POST<Category, DetailedCategory>('Category', category);
    if (newCategory) {
      return newCategory;
    } else {
      throw new Error('Impossible de créer la catégorie');
    }
  };

  const getCategory = async (
    id: string,
    setCategory: React.Dispatch<React.SetStateAction<Category>> | undefined = undefined
  ): Promise<DetailedCategory> => {
    const category = await GET<DetailedCategory>(`category/${id}`);
    if (category) {
      if (setCategory) {
        setCategory(category);
      }
      return category;
    } else {
      throw new Error('Impossible de créer la tâche');
    }
  };

  const getCategories = async (
    setCategories: React.Dispatch<React.SetStateAction<DetailedCategory[]>> | undefined = undefined
  ): Promise<DetailedCategory[]> => {
    const categories = await GET<DetailedCategory[]>('Categories');
    if (categories) {
      if (setCategories) {
        setCategories(categories);
      }
      return categories;
    } else {
      throw new Error('Impossible de récupérer les catégories');
    }
  };

  const patchCategory = async (category: DetailedCategory) => {
    PATCH<Category>(`category/${category.id}`, category);
  };

  const deleteCategory = async (id: string) => {
    DELETE(`category/${id}`);
  };

  return { postCategory, getCategory, getCategories, patchCategory, deleteCategory };
};

export default useCategoryService;
