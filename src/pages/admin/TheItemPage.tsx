import ACategoriesCheckboxList from '#components/ACategoriesCheckboxList';

const ItemPage = () => {
  return (
    <div className="item-wrapper">
      <h1>Nouveau produit</h1>
      <form>
        <label htmlFor="name">
          Nom du produit
          <input
            id="name"
            name="name"
          />
          <span className="error-message">Le nom est requis</span>
        </label>
        <label htmlFor="description">
          Description du procuit
          <textarea
            id="description"
            name="description"
          ></textarea>
          <span className="error-message">La description est requise</span>
        </label>
        <label htmlFor="price">
          Prix
          <input
            id="price"
            type="number"
            name="price"
          />
          <span className="error-message">Le prix doit être positif et plus grand que 0</span>
        </label>
        <label htmlFor="quantity">
          Quantité en inventaire
          <input
            id="quantity"
            type="number"
            name="quantity"
          />
          <span className="error-message">La quantité doit être positive et plus grand que 1</span>
        </label>
        <label htmlFor="discountPercentage">
          Pourcentage de rabais
          <input
            id="discountPercentage"
            name="discountPercentage"
          />
        </label>
        <label htmlFor="imageUrl">
          Url de l'image du produit
          <input
            id="imageUrl"
            name="imageUrl"
          />
          <span className="error-message">L'URL de l'image est requise</span>
        </label>
        <label htmlFor="brandId">
          <select
            id="brandId"
            name="brandId"
          >
            <option value="">Choisir une valeur</option>
            <option value="654d2d6194889e423ff6ea6c">Asrock</option>
            <option value="656d1063cc43c6d1dd0a1330">RedDragon</option>
            <option value="6570e61f47d541ee7e519e79">Dell</option>
            <option value="654d2de494889e423ff6ea6d">Asus</option>
            <option value="656d0a4dcc43c6d1dd0a132e">AMD</option>
            <option value="6566239cbe807574e276dfac">Intel</option>
            <option value="657f63d2f0327e649573a676">steelseries</option>
            <option value="657fd0edbcce77f69116710f">Lenovo</option>
            <option value="6708626af9f3f20991e4c7db">Seagate</option>
          </select>
          <span className="error-message">La marque est requise</span>
        </label>
        '{/* ICI, utiliser le component ACategoriesCheckboxList */}'
        <input
          id="submit"
          type="submit"
          className="button"
          value="Créer"
        />
      </form>
    </div>
  );
};

export default ItemPage;
