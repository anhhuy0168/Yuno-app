import React from "react";

const ViewProducts = (randomProducts) => {
  return (
    <div className="product-minimal">
      {/* <div className="product-showcase">
                  <h2 className="title">New Arrivals</h2>
                  <div className="showcase-wrapper has-scrollbar">
                    <div className="showcase-container">
                    {randomProducts?.product?.map((product, index) => (
                      <div className="showcase" key={index}>
                        <a href="#" className="showcase-img-box">
                          <img
                            src={product.productImage}
                            alt={product.productName}
                            width={70}
                            className="showcase-img"
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                            {product.productName}
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                          {product.category}
                          </a>
                          <div className="price-box">
                            <p className="price">${product.salePrice}.00</p>
                            <del>{product.currentPrice}.00</del>
                          </div>
                        </div>
                      </div>
                        ))}
                    </div>
                    <div className="showcase-container">
                    {randomProducts?.product?.map((product, index) => (
                      <div className="showcase" key={index}>
                        <a href="#" className="showcase-img-box">
                          <img
                            src={product.productImage}
                            alt={product.productName}
                            width={70}
                            className="showcase-img"
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                            {product.productName}
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                          {product.category}
                          </a>
                          <div className="price-box">
                            <p className="price">${product.salePrice}.00</p>
                            <del>{product.currentPrice}.00</del>
                          </div>
                        </div>
                      </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="product-showcase">
                  <h2 className="title">Trending</h2>
                  <div className="showcase-wrapper  has-scrollbar">
                    <div className="showcase-container">
                    {randomProducts?.product?.map((product, index) => (
                      <div className="showcase" key={index}>
                        <a href="#" className="showcase-img-box">
                          <img
                            src={product.productImage}
                            alt={product.productName}
                            width={70}
                            className="showcase-img"
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                            {product.productName}
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                          {product.category}
                          </a>
                          <div className="price-box">
                            <p className="price">${product.salePrice}.00</p>
                            <del>{product.currentPrice}.00</del>
                          </div>
                        </div>
                      </div>
                        ))}
                    </div>
                    <div className="showcase-container">
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/sports-6.jpg"
                            alt="air tekking shoes - white"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Air Trekking Shoes - white
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Sports
                          </a>
                          <div className="price-box">
                            <p className="price">$52.00</p>
                            <del>$55.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-3.jpg"
                            alt="Boot With Suede Detail"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Boot With Suede Detail
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            boots
                          </a>
                          <div className="price-box">
                            <p className="price">$20.00</p>
                            <del>$30.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-1.jpg"
                            alt="men's leather formal wear shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Men's Leather Formal Wear shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            formal
                          </a>
                          <div className="price-box">
                            <p className="price">$56.00</p>
                            <del>$78.00</del>
                          </div>
                        </div>
                      </div>
                      <div className="showcase">
                        <a href="#" className="showcase-img-box">
                          <img
                            src="../src/assets/images/products/shoe-2.jpg"
                            alt="casual men's brown shoes"
                            className="showcase-img"
                            width={70}
                          />
                        </a>
                        <div className="showcase-content">
                          <a href="#">
                            <h4 className="showcase-title">
                              Casual Men's Brown shoes
                            </h4>
                          </a>
                          <a href="#" className="showcase-category">
                            Casual
                          </a>
                          <div className="price-box">
                            <p className="price">$50.00</p>
                            <del>$55.00</del>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>
        <div className="showcase-wrapper  has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/watch-3.jpg"
                  alt="pocket watch leather pouch"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                </a>
                <a href="#" className="showcase-category">
                  Watches
                </a>
                <div className="price-box">
                  <p className="price">$50.00</p>
                  <del>$34.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/jewellery-3.jpg"
                  alt="silver deer heart necklace"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                </a>
                <a href="#" className="showcase-category">
                  Jewellery
                </a>
                <div className="price-box">
                  <p className="price">$84.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/perfume.jpg"
                  alt="titan 100 ml womens perfume"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Titan 100 Ml Womens Perfume
                  </h4>
                </a>
                <a href="#" className="showcase-category">
                  Perfume
                </a>
                <div className="price-box">
                  <p className="price">$42.00</p>
                  <del>$10.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/belt.jpg"
                  alt="men's leather reversible belt"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Men's Leather Reversible Belt
                  </h4>
                </a>
                <a href="#" className="showcase-category">
                  Belt
                </a>
                <div className="price-box">
                  <p className="price">$24.00</p>
                  <del>$10.00</del>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/jewellery-2.jpg"
                  alt="platinum zircon classic ring"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    platinum Zircon Classic Ring
                  </h4>
                </a>
                <a href="#" className="showcase-category">
                  jewellery
                </a>
                <div className="price-box">
                  <p className="price">$62.00</p>
                  <del>$65.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/watch-1.jpg"
                  alt="smart watche vital plus"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Smart watche Vital Plus</h4>
                </a>
                <a href="#" className="showcase-category">
                  Watches
                </a>
                <div className="price-box">
                  <p className="price">$56.00</p>
                  <del>$78.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/shampoo.jpg"
                  alt="shampoo conditioner packs"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">shampoo conditioner packs</h4>
                </a>
                <a href="#" className="showcase-category">
                  cosmetics
                </a>
                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src="../src/assets/images/products/jewellery-1.jpg"
                  alt="rose gold peacock earrings"
                  className="showcase-img"
                  width={70}
                />
              </a>
              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                </a>
                <a href="#" className="showcase-category">
                  jewellery
                </a>
                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
