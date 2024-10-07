import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

const Cart = () => {
    const initialProducts = [
        { id: 1, name: 'Product Name', price: 150, imgSrc: 'img/product-1.jpg', quantity: 1 },
        { id: 2, name: 'Product Name', price: 150, imgSrc: 'img/product-2.jpg', quantity: 1 },
        { id: 3, name: 'Product Name', price: 150, imgSrc: 'img/product-3.jpg', quantity: 1 },
        { id: 4, name: 'Product Name', price: 150, imgSrc: 'img/product-4.jpg', quantity: 1 },
        { id: 5, name: 'Product Name', price: 150, imgSrc: 'img/product-5.jpg', quantity: 1 },
    ];

    const [products, setProducts] = useState(initialProducts);

    const updateQuantity = (id, delta) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, quantity: Math.max(0, product.quantity + delta) } : product
            )
        );
    };

    const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">Home</a>
                            <a className="breadcrumb-item text-dark" href="#">Shop</a>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody className="align-middle">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="align-middle">
                                        <img src={product.imgSrc} alt="" style={{ width: '50px' }} /> {product.name}
                                    </td>
                                    <td className="align-middle">${product.price}</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                            <div className="input-group-btn">
                                                <button
                                                    className="btn btn-sm btn-primary btn-minus"
                                                    onClick={() => updateQuantity(product.id, -1)}
                                                >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm bg-secondary border-0 text-center"
                                                value={product.quantity}
                                                readOnly
                                            />
                                            <div className="input-group-btn">
                                                <button
                                                    className="btn btn-sm btn-primary btn-plus"
                                                    onClick={() => updateQuantity(product.id, 1)}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">${product.price * product.quantity}</td>
                                    <td className="align-middle">
                                        <button className="btn btn-sm btn-danger">
                                            <i className="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-30" action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Cart Summary</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>${subtotal}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">${shipping}</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>${total}</h5>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
