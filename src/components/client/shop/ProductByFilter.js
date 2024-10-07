import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

const products = [
    {
        id: 1,
        image: "img/product-1.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 5,
        reviews: 99
    },
    {
        id: 2,
        image: "img/product-2.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 4.5,
        reviews: 99
    },
    {
        id: 3,
        image: "img/product-3.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 4.5,
        reviews: 99
    },
    {
        id: 4,
        image: "img/product-4.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 3.5,
        reviews: 99
    },
    {
        id: 5,
        image: "img/product-5.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 5,
        reviews: 99
    },
    {
        id: 6,
        image: "img/product-6.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 4.5,
        reviews: 99
    },
    {
        id: 7,
        image: "img/product-7.jpg",
        name: "Product Name Goes Here",
        price: "$123.00",
        oldPrice: "$123.00",
        rating: 5,
        reviews: 99
    },
];

const ProductItem = ({ product }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={product.image} alt={product.name} />
                    <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-heart"></i></a>
                        <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                    </div>
                </div>
                <div className="text-center py-4">
                    <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{product.price}</h5><h6 className="text-muted ml-2"><del>{product.oldPrice}</del></h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                        {[...Array(5)].map((_, index) => (
                            <small key={index} className={`fa ${index < product.rating ? 'fa-star' : 'far fa-star'} text-primary mr-1`}></small>
                        ))}
                        <small>({product.reviews})</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShopProducts = () => {
    return (
        <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
                <div className="col-12 pb-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div>
                            <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                            <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                        </div>
                        <div className="ml-2">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle"
                                        data-bs-toggle="dropdown">Sorting
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">Latest</button>
                                    <button className="dropdown-item" type="button">Popularity</button>
                                    <button className="dropdown-item" type="button">Best Rating</button>
                                </div>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle"
                                        data-bs-toggle="dropdown">Showing
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <button className="dropdown-item" type="button">10</button>
                                    <button className="dropdown-item" type="button">20</button>
                                    <button className="dropdown-item" type="button">30</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ShopProducts;
