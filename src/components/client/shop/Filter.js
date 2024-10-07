import React, {useState} from 'react';

const Filter = () => {
    const [sizes, setSizes] = useState([
        { id: 'size-all', label: 'All Size', count: 1000, checked: true },
        { id: 'size-1', label: 'XS', count: 150, checked: false },
        { id: 'size-2', label: 'S', count: 295, checked: false },
        { id: 'size-3', label: 'M', count: 246, checked: false },
        { id: 'size-4', label: 'L', count: 145, checked: false },
        { id: 'size-5', label: 'XL', count: 168, checked: false },
    ]);

    const handleCheckboxChange = (id) => {
        setSizes(sizes.map(size =>
            size.id === id ? { ...size, checked: !size.checked } : size
        ));
    };

    return (
        <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by price</span>
            </h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    <div
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="price-all"/>
                        <label className="custom-control-label" htmlFor="price-all">All Price</label>
                        <span className="badge border font-weight-normal">1000</span>
                    </div>
                    <div
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="price-1"/>
                        <label className="custom-control-label" htmlFor="price-1">$0 - $100</label>
                        <span className="badge border font-weight-normal">150</span>
                    </div>
                    <div
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="price-2"/>
                        <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                        <span className="badge border font-weight-normal">295</span>
                    </div>
                    <div
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="price-3"/>
                        <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                        <span className="badge border font-weight-normal">246</span>
                    </div>
                    <div
                        className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                        <input type="checkbox" className="custom-control-input" id="price-4"/>
                        <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                        <span className="badge border font-weight-normal">145</span>
                    </div>
                    <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                        <input type="checkbox" className="custom-control-input" id="price-5"/>
                        <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                        <span className="badge border font-weight-normal">168</span>
                    </div>
                </form>
            </div>

            <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by size</span>
            </h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    {sizes.map(size => (
                        <div
                            className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3"
                            key={size.id}>
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id={size.id}
                                checked={size.checked}
                                onChange={() => handleCheckboxChange(size.id)}
                            />
                            <label className="custom-control-label" htmlFor={size.id}>{size.label}</label>
                            <span className="badge border font-weight-normal">{size.count}</span>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Filter;
