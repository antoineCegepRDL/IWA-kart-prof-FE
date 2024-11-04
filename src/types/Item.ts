export default interface Item {
  price: number;
  discountPercentage: number;
  imageUrl: string;
  quantity: number;
  name: string;
  description: string;
  brandId: string;
  categoriesId: string[];
}
