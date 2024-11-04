import DetailedCategory from '#types/DetailedCategory';
import { UseFormRegister } from 'react-hook-form';
import Item from '../types/Item';

interface Props {
  allCategories: DetailedCategory[];
  register: UseFormRegister<Item>;
  errorMessage: string;
}

const ACategoriesCheckboxList = ({ allCategories, register, errorMessage }: Props) => {
  return (
    <div>
      {allCategories.map((category) => (
        <div key={category.id}>
          <label htmlFor={`category-${category.id}`}>
            <input
              type="checkbox"
              id={`category-${category.id}`}
              value={category.id}
              {...register('categoriesId', {
                validate: {
                  required: (value) => (value && value.length > 0) || 'Au moins une catégorie doit être sélectionnée',
                  maxCategories: (value) => value.length <= 3 || 'On ne peut pas avoir plus de trois catégories',
                },
              })}
            />
            {category.name}
          </label>
        </div>
      ))}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default ACategoriesCheckboxList;
