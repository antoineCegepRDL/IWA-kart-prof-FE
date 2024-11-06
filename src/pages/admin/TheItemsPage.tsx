import { useEffect, useState } from 'react';
import AItem from '#components/Admin/AItem';
import DetailedItem from '#types/DetailedItem';
import { Link, useNavigate } from 'react-router-dom';
import useItem from '#composables/services/useItemService';

const ItemsPage = () => {
  const navigate = useNavigate();
  const { deleteItem, getItems } = useItem();
  const [items, setItems] = useState<DetailedItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      setItems(await getItems());
    };
    fetchItems();
  }, []);
  const handleDelete = async (id: string) => {
    await deleteItem(id);
    setItems([...items.filter((x) => x.id !== id)]);
  };

  const handleEdit = async (id: string) => {
    navigate(`/admin/item/${id}`);
  };
  return (
    <div className="items-wrapper">
      <h1>Liste de des produits</h1>
      <div className="items-list">
        {items.length === 0 ? (
          <p>Pas de produits</p>
        ) : (
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
              {items.map((item) => (
                <AItem
                  item={item}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  key={item.id}
                ></AItem>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Link to="/admin/item">Créer un nouveau produit</Link>
    </div>
  );
};

export default ItemsPage;
