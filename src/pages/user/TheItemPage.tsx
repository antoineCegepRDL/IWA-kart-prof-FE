import '#styles/item.scss';
const TheItemPage = () => {
  return (
    <div className="wrapper">
      <div className="item-details">
        <div className="item">
          <div className="imageContainer">
            <img
              src="https://c1.neweggimages.com/ProductImageCompressAll1280/22-183-793-V06.jpg"
              alt=""
            />
          </div>
          <hr />
          <div>
            <p className="item-name">Seagate</p>
            <p className="brand-name">Seagate</p>
            <div className="price">
              <p className="old-price">200.00</p>
              <p className="regular-price">180.00</p>
            </div>
          </div>
          <p>Super disque dur qui va vite vite vite. 35mo.</p>
          <div className="button">
            <p>Ajouter au panier</p>
          </div>
        </div>
      </div>
      <div className="items">
        <h2 className="section-title">Vous pourriez aimer...</h2>
        <div className="list">
          <div className="item">
            <div className="imageContainer">
              <img
                src="https://c1.neweggimages.com/ProductImageCompressAll1280/22-183-793-V06.jpg"
                alt=""
              />
            </div>
            <hr />
            <div>
              <p className="item-name">Seagate</p>
              <p className="brand-name">Seagate</p>
              <div className="price">
                <p className="old-price">200.00</p>
                <p className="regular-price">180.00</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img
                src="https://c1.neweggimages.com/productimage/nb1280/A4RES2304100HEJI748.jpg"
                alt=""
              />
            </div>
            <hr />
            <div>
              <p className="item-name">Un homme heureux </p>
              <p className="brand-name">RedDragon</p>
              <div className="price">
                <p className="old-price">1000.00</p>
                <p className="regular-price">500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <h2 className="section-title">En rabais</h2>
        <div className="list">
          <div className="item">
            <div className="imageContainer">
              <img
                src="https://c1.neweggimages.com/ProductImageCompressAll1280/22-183-793-V06.jpg"
                alt=""
              />
            </div>
            <hr />
            <div>
              <p className="item-name">Seagate</p>
              <p className="brand-name">Seagate</p>
              <div className="price">
                <p className="old-price">200.00</p>
                <p className="regular-price">180.00</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="imageContainer">
              <img
                src="https://c1.neweggimages.com/productimage/nb1280/A4RES2304100HEJI748.jpg"
                alt=""
              />
            </div>
            <hr />
            <div>
              <p className="item-name">Un homme heureux </p>
              <p className="brand-name">RedDragon</p>
              <div className="price">
                <p className="old-price">1000.00</p>
                <p className="regular-price">500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheItemPage;
