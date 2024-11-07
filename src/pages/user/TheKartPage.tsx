import '#styles/kart.scss';

const TheKartPage = () => {
  return (
    <div className="wrapper">
      <div className="wrapper">
        <div className="items">
          <h2 className="section-title">Mon panier</h2>
          <div className="list">
            <div className="item-kart">
              <div className="item">
                <div className="imageContainer">
                  <img
                    src="https://c1.neweggimages.com/ProductImageCompressAll1280/22-183-793-V06.jpg"
                    alt=""
                  />
                </div>
                <hr />
                <p className="item-name">Seagate</p>
                <p className="brand-name">Seagate</p>
                <div className="price">
                  <p className="old-price">200.00</p>
                  <p className="regular-price">180.00</p>
                </div>
                <div className="kart-buttons">
                  <span className="kart-button button">+</span>
                  <span className="quantity-to-buy">3</span>
                  <span className="kart-button button">-</span>
                  <span className="kart-button button">X</span>
                </div>
                <div className="totalAmount">
                  <p className="price">540.00 $</p>
                </div>
              </div>
            </div>
            <div className="item-kart">
              <div className="item">
                <div className="imageContainer">
                  <img
                    src="https://c1.neweggimages.com/productimage/nb1280/A4RES2304100HEJI748.jpg"
                    alt=""
                  />
                </div>
                <hr />
                <p className="item-name">Un homme heureux </p>
                <p className="brand-name">RedDragon</p>
                <div className="price">
                  <p className="old-price">1000.00</p>
                  <p className="regular-price">500.00</p>
                </div>
                <div className="kart-buttons">
                  <span className="kart-button button">+</span>
                  <span className="quantity-to-buy">4</span>
                  <span className="kart-button button">-</span>
                  <span className="kart-button button">X</span>
                </div>
                <div className="totalAmount">
                  <p className="price">2000.00 $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="total">
            <p className="price">Total : 2540.00$</p>
            <p className="price">TPS : 127.00$</p>
            <p className="price">TVP : 254.00$</p>
            <p className="price total">Total : 2921.00$</p>
          </div>
          <div className="button center">
            <p>Passer la commande</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheKartPage;
