import '#styles/home.scss';

const TheHomePage = () => {
  return (
    <div className="wrapper">
      <div className="homeImage">
        <img
          src="/assets/mainImage-DdMR0tQp.png"
          alt=""
        />
        <p className="welcomeMessage">50% de rabais sur + de 500 produits</p>
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
      <div className="items">
        <h2 className="section-title">Nos nouveautés</h2>
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
      <div className="brands">
        <h2 className="section-title">Nos marques</h2>
        <div className="list">
          <a href="/brand/654d2d6194889e423ff6ea6c">
            <div className="brand">
              <img
                src="https://c1.neweggimages.com/brandimage/Brand1944.gif"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/656d1063cc43c6d1dd0a1330">
            <div className="brand">
              <img
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/032018/untitled-1_521.png?C6Bm9TeR9x1Pdtb4cBibXkOAxlVmhDHv&amp;itok=HoYxL5ui"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/6570e61f47d541ee7e519e79">
            <div className="brand">
              <img
                src="https://www.laptopspirit.fr/comparateur/images/logomarchand/Dell.gif"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/654d2de494889e423ff6ea6d">
            <div className="brand">
              <img
                src="https://c1.neweggimages.com/brandimage/Brand1315.gif"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/656d0a4dcc43c6d1dd0a132e">
            <div className="brand">
              <img
                src="https://www.ouest-france.fr/shopping/comparateur/wp-content/uploads/2020/06/Processeur-amd.jpg"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/6566239cbe807574e276dfac">
            <div className="brand">
              <img
                src="https://i5.walmartimages.com/asr/e8e99773-7a8a-4e77-876f-10d0d45d51a9.b22fbe22ce17c6e7577299a40432440a.jpeg?odnHeight=612&amp;odnWidth=612&amp;odnBg=FFFFFF"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/657f63d2f0327e649573a676">
            <div className="brand">
              <img
                src="https://media.steelseriescdn.com/filer_public/c2/ec/c2ec1dd9-fb85-41f0-8517-7dd79aca81a3/ss_logo_icon_001.png"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/657fd0edbcce77f69116710f">
            <div className="brand">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCd6lmwJQ7YO3R4p9b0TUY4kmNnQ8Ghr1FA&amp;usqp=CAU"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <a href="/brand/6708626af9f3f20991e4c7db">
            <div className="brand">
              <img
                src="https://c1.neweggimages.com/brandimage/Brand1305.gif"
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TheHomePage;
