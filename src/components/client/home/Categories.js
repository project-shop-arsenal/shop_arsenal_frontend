import React from 'react';

const categories = [
    { name: "Category Name", products: 100, image: "img/cat-1.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-2.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-3.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-4.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-4.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-3.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-2.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-1.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-2.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-1.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-4.jpg" },
    { name: "Category Name", products: 100, image: "img/cat-3.jpg" }
];

const Categories = () => {
    return (
        <div className="container-fluid pt-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Categories</span>
            </h2>
            <div className="row px-xl-5 pb-3">
                {categories.map((category, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="#">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                                    <img className="img-fluid" src={category.image} alt={category.name} />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>{category.name}</h6>
                                    <small className="text-body">{category.products} Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
