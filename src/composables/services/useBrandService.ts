import Brand from '#types/Brand';
import DetailedBrand from '#types/DetailedBrand';
import useFetch from './useFetch';

const useBrandService = () => {
  const { GET, POST, DELETE, PATCH } = useFetch();

  const postBrand = async (brand: Brand): Promise<Brand> => {
    const newBrand = await POST<Brand, DetailedBrand>('brand', brand);
    if (newBrand) {
      return newBrand;
    } else {
      throw new Error('Impossible de créer la tâche');
    }
  };

  const getBrand = async (
    id: string,
    setBrand: React.Dispatch<React.SetStateAction<Brand>> | undefined = undefined
  ): Promise<DetailedBrand> => {
    const brand = await GET<DetailedBrand>(`brand/${id}`);
    if (brand) {
      if (setBrand) {
        setBrand(brand);
      }
      return brand;
    } else {
      throw new Error('Impossible de créer la tâche');
    }
  };

  const getBrands = async (
    setBrands: React.Dispatch<React.SetStateAction<DetailedBrand[]>> | undefined = undefined
  ): Promise<DetailedBrand[]> => {
    const brands = await GET<DetailedBrand[]>('brands');
    if (brands) {
      if (setBrands) {
        setBrands(brands);
      }
      return brands;
    } else {
      throw new Error('Impossible de récupérer les tâches');
    }
  };

  const patchBrand = async (brand: DetailedBrand) => {
    PATCH<DetailedBrand>(`brand/${brand.id}`, brand);
  };

  const deleteBrand = async (id: string) => {
    DELETE(`brand/${id}`);
  };

  return { postBrand, getBrand, getBrands, patchBrand, deleteBrand };
};

export default useBrandService;
