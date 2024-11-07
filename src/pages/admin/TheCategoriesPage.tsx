const TheCategoriesPage = () => {
  return (
    <div className="brands-wrapper">
      <h1>Liste de des catégories</h1>
      <div className="brands-list">
        <table>
          <thead>
            <tr>
              <th>nom</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test1</td>
              <td>
                <p className="Modifier">Modifier</p>
              </td>
              <td>
                <p className="supprimer">Supprimer</p>
              </td>
            </tr>
            <tr>
              <td>test2</td>
              <td>
                <p className="Modifier">Modifier</p>
              </td>
              <td>
                <p className="supprimer">Supprimer</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a href="/admin/category">Créer une nouvelle catégorie</a>
    </div>
  );
};

export default TheCategoriesPage;
