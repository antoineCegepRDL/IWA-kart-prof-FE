import '#styles/home.scss';
import mainImage from '#assets/mainImage.png';
import { useEffect, useState } from 'react';
import BrandComponent from '#components/User/ABrand';
import Product from '#types/Item';
import Brand from '#types/Brand';
import ProductList from '#components/User/AProductList';

const HomePage = () => {
  const [productsInDiscount, setProductsInDiscount] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsInDiscoutFromServer = await GET<Product[]>('items?itemsOnDiscount=true');
      const productsFromServer = await GET<Product[]>('items');
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
      setBrands(brands);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="homeImage">
        <img
          src={mainImage}
          alt=""
        />
        <p className="welcomeMessage">50% de rabais sur + de 500 produits</p>
      </div>
      <div className="products">
        <h2 className="section-title">En rabais</h2>
        <div className="list">
          <div className="discount-product-home product">
            <ProductList products={productsInDiscount}></ProductList>
          </div>
        </div>
      </div>

      <div className="products">
        <h2 className="section-title">Nos nouveautés</h2>
        <ProductList products={products}></ProductList>
      </div>

      <div className="brands">
        <h2 className="section-title">Nos marques</h2>
        <div className="list">
          {brands.map((brand) => (
            <BrandComponent
              brand={brand}
              key={brand.id}
            ></BrandComponent>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
