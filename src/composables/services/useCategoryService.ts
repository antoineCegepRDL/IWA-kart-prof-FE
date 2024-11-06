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

  const getCategory = async (id: string): Promise<DetailedCategory> => {
    const category = await GET<DetailedCategory>(`category/${id}`);
    if (category) {
      return category;
    } else {
      throw new Error('Impossible de récupérer la catégorie');
    }
  };

  const getCategories = async (): Promise<DetailedCategory[]> => {
    const categories = await GET<DetailedCategory[]>('Categories');
    if (categories) {
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
