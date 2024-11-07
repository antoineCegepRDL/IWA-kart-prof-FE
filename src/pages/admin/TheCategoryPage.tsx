const CategoryPage = () => {
  return (
    <div className="brand-wrapper">
      <h1>Ajouter une catégorie</h1>
      <form>
        <label htmlFor="name">
          Nom de la catégorie
          <input
            type="text"
            name="name"
          />
          <span className="error-message">Le nom est requis</span>
        </label>
        <input
          id="submit"
          type="submit"
          className="button"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default CategoryPage;
