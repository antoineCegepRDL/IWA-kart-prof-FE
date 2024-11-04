import Brand from './Brand';
import Category from './Category';
import Item from './Item';

export default interface DetailedItem extends Item {
  id: string;
  brand: Brand;
  categories: Category[];
}
