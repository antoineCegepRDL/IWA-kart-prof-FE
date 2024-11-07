const TheItemsPage = () => {
  return (
    <div className="items-wrapper">
      <h1>Liste de des produits</h1>
      <div className="items-list">
        <table>
          <thead>
            <tr>
              <th>nom</th>
              <th>description</th>
              <th>prix</th>
              <th>rabais</th>
              <th>quantité</th>
              <th>image</th>
              <th>marque</th>
              <th>logo de la marque</th>
              <th>catégories</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seagate</td>
              <td>Super disque dur qui va vite vite vite. 35mo.</td>
              <td>200$</td>
              <td>0.1%</td>
              <td>987</td>
              <td>
                <img
                  src="https://c1.neweggimages.com/ProductImageCompressAll1280/22-183-793-V06.jpg"
                  alt=""
                />
              </td>
              <td>Seagate</td>
              <td>
                <img
                  src="https://c1.neweggimages.com/brandimage/Brand1305.gif"
                  alt=""
                />
              </td>
              <td>test1, test2</td>
              <td>
                <p>Modifier</p>
              </td>
              <td>
                <p className="supprimer">Supprimer</p>
              </td>
            </tr>
            <tr>
              <td>Un homme heureux </td>
              <td>Enleve la poussieree</td>
              <td>1000$</td>
              <td>0.5%</td>
              <td>974</td>
              <td>
                <img
                  src="https://c1.neweggimages.com/productimage/nb1280/A4RES2304100HEJI748.jpg"
                  alt=""
                />
              </td>
              <td>RedDragon</td>
              <td>
                <img
                  src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/032018/untitled-1_521.png?C6Bm9TeR9x1Pdtb4cBibXkOAxlVmhDHv&amp;itok=HoYxL5ui"
                  alt=""
                />
              </td>
              <td>test1, test2</td>
              <td>
                <p>Modifier</p>
              </td>
              <td>
                <p className="supprimer">Supprimer</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <a
        id="new-item"
        href="/admin/item"
      >
        Créer un nouveau produit
      </a>
    </div>
  );
};

export default TheItemsPage;
