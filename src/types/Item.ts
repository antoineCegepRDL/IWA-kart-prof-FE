import Brand from "./Brand";

export default interface Item {
  id: string;
  price: number;
  isDiscount: boolean;
  discountPercentage: number;
  imageUrl: string;
  quantity: number;
  name: string;
  description: string;
  brand: Brand;
}