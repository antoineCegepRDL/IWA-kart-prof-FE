import '#styles/home.scss';

const TheCategoryPage = () => {
  return (
    <div className="wrapper">
      <div className="wrapper">
        <h1>Tous nos items de la marque : Test2</h1>
        <div className="items">
          <h2 className="section-title">Test2</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCategoryPage;
