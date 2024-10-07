import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

const ProductDetail = () => {
  return (
      <>
          <div className="container-fluid">
              <div className="row px-xl-5">
                  <div className="col-12">
                      <nav className="breadcrumb bg-light mb-30">
                          <a className="breadcrumb-item text-dark" href="#">Home</a>
                          <a className="breadcrumb-item text-dark" href="#">Shop</a>
                          <span className="breadcrumb-item active">Shop Detail</span>
                      </nav>
                  </div>
              </div>
          </div>

          <div className="container-fluid pb-5">
              <div className="row px-xl-5">
                  <div className="col-lg-5 mb-30">
                      <div id="product-carousel" className="carousel slide" data-ride="carousel">
                          <div className="carousel-inner bg-light">
                              <div className="carousel-item active">
                                  <img className="w-100 h-100" src="img/product-1.jpg" alt="Image"/>
                              </div>
                              <div className="carousel-item">
                                  <img className="w-100 h-100" src="img/product-2.jpg" alt="Image"/>
                              </div>
                              <div className="carousel-item">
                                  <img className="w-100 h-100" src="img/product-3.jpg" alt="Image"/>
                              </div>
                              <div className="carousel-item">
                                  <img className="w-100 h-100" src="img/product-4.jpg" alt="Image"/>
                              </div>
                          </div>
                          <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                              <i className="fa fa-2x fa-angle-left text-dark"></i>
                          </a>
                          <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                              <i className="fa fa-2x fa-angle-right text-dark"></i>
                          </a>
                      </div>
                  </div>

                  <div className="col-lg-7 h-auto mb-30">
                      <div className="h-100 bg-light p-30">
                          <h3>Product Name Goes Here</h3>
                          <div className="d-flex mb-3">
                              <div className="text-primary mr-2">
                                  <small className="fas fa-star"></small>
                                  <small className="fas fa-star"></small>
                                  <small className="fas fa-star"></small>
                                  <small className="fas fa-star-half-alt"></small>
                                  <small className="far fa-star"></small>
                              </div>
                              <small className="pt-1">(99 Reviews)</small>
                          </div>

                          <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                          <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam
                              stet sit
                              clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                              Nonumy</p>
                          <div className="d-flex mb-3">
                              <strong className="text-dark mr-3">Sizes:</strong>
                              <form>
                                  {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                                      <div className="custom-control custom-radio custom-control-inline" key={index}>
                                          <input type="radio" className="custom-control-input" id={`size-${index + 1}`}
                                                 name="size"/>
                                          <label className="custom-control-label"
                                                 htmlFor={`size-${index + 1}`}>{size}</label>
                                      </div>
                                  ))}
                              </form>
                          </div>
                          <div className="d-flex align-items-center mb-4 pt-2">
                              <div className="input-group quantity mr-3" style={{width: '130px'}}>
                                  <div className="input-group-btn">
                                      <button className="btn btn-primary btn-minus">
                                          <i className="fa fa-minus"></i>
                                      </button>
                                  </div>
                                  <input type="text" className="form-control bg-secondary border-0 text-center"
                                         value="1" readOnly/>
                                  <div className="input-group-btn">
                                      <button className="btn btn-primary btn-plus">
                                          <i className="fa fa-plus"></i>
                                      </button>
                                  </div>
                              </div>
                              <button className="btn btn-primary px-3">
                                  <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
};

export default ProductDetail;