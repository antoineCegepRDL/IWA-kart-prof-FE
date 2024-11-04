import '#styles/product.scss';
import { useParams } from 'react-router-dom';
import Product from '#types/Item';
import { useEffect, useState } from 'react';
import ProductComponent from '#components/User/AProduct';
import Brand from '#types/Brand';
import { addProductFromStorage } from '#composables/localStorage';
import ProductList from '#components/User/AProductList';

const ProductPage = () => {
  const [product, setProduct] = useState<Product>();
  const [productsInDiscount, setProductsInDiscount] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      if (products.length > 0) return;
      const productsInDiscoutFromServer = await GET<Product[]>('items?itemsOnDiscount=true&limit=3&offset=0');
      const productsFromServer = await GET<Product[]>('items?limit=3&offset=0');
      const brands = await GET<Brand[]>('brands');
      productsFromServer.forEach((x) => {
        const brand = brands.find((y) => y.id === x.brandId);
        if (brand) {
          x.brand = brand;
        }
      });

      productsInDiscoutFromServer.forEach((x) => {
        const brand = brands.find((y) => y.id === x.brandId);
        if (brand) {
          x.brand = brand;
        }
      });

      setProductsInDiscount(productsInDiscoutFromServer);
      setProducts(productsFromServer);
    };
    const getProduct = async () => {
      if (product) return;
      const productFromServer = await GET<Product>(`item/${id}`);
      if (productFromServer) {
        const brand = await GET<Brand>(`brand/${productFromServer.brandId}`);
        productFromServer.brand = brand;
        setProduct(productFromServer);
      }
    };
    getProduct();
    getProducts();
  });

  const { id } = useParams();
  const onAddToKartClick = () => {
    if (product) {
      alert('Le produit a été ajouté');
      addProductFromStorage(product);
    }
  };
  return (
    <>
      <div className="product-details">
        <div className="product">
          {product ? <ProductComponent product={product}></ProductComponent> : <></>}
          <p>{product?.description}</p>
          <div
            className="button"
            onClick={onAddToKartClick}
          >
            <p>Ajouter au panier</p>
          </div>
        </div>
      </div>

      <div className="products">
        <h2 className="section-title">Vous pourriez aimer...</h2>
        <ProductList products={products}></ProductList>
      </div>

      <div className="products">
        <h2 className="section-title">En rabais</h2>
        <div className="list">
          <div className="discount-product-home product">
            <ProductList products={productsInDiscount}></ProductList>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
