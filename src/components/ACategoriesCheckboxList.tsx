import DetailedCategory from '#types/DetailedCategory';

interface Props {
  categories: DetailedCategory[];
  selectedCategoriesId: string[];
  onChange: (ids: string[]) => void;
}

const ACategoriesCheckboxList = ({ categories, selectedCategoriesId, onChange }: Props) => {
  const handleCheckboxChange = (category: DetailedCategory) => {
    const newCategoriesId = selectedCategoriesId.includes(category.id)
      ? selectedCategoriesId.filter((id) => id !== category.id)
      : [...selectedCategoriesId, category.id];
    onChange(newCategoriesId);
  };

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <label>
            <input
              type="checkbox"
              value={category.id}
              checked={selectedCategoriesId.includes(category.id)}
              onChange={() => handleCheckboxChange(category)}
            />
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ACategoriesCheckboxList;
