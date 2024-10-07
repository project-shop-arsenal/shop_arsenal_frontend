import React from 'react';

const FeaturedProducts = () => {
    const products = [
        { id: 1, name: 'Product Name 1', price: 123.00, image: 'img/product-1.jpg', rating: 5 },
        { id: 2, name: 'Product Name 2', price: 123.00, image: 'img/product-2.jpg', rating: 4.5 },
        { id: 3, name: 'Product Name 3', price: 123.00, image: 'img/product-3.jpg', rating: 4 },
        { id: 4, name: 'Product Name 4', price: 123.00, image: 'img/product-4.jpg', rating: 3 },
        { id: 5, name: 'Product Name 5', price: 123.00, image: 'img/product-5.jpg', rating: 5 },
        { id: 6, name: 'Product Name 6', price: 123.00, image: 'img/product-6.jpg', rating: 4.5 },
        { id: 7, name: 'Product Name 7', price: 123.00, image: 'img/product-7.jpg', rating: 4 }
    ];

    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Featured Products</span>
            </h2>
            <div className="row px-xl-5">
                {products.map(product => (
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={product.id}>
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src={product.image} alt={product.name} />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="#">{product.name}</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>${product.price.toFixed(2)}</h5>
                                    <h6 className="text-muted ml-2"><del>${product.price.toFixed(2)}</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    {[...Array(5)].map((_, index) => (
                                        <small key={index} className={`fa ${index < product.rating ? 'fa-star text-primary' : 'far fa-star text-primary'} mr-1`}></small>
                                    ))}
                                    <small>({99})</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
