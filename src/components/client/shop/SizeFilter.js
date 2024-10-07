import React, { useState } from 'react';

const SizeFilter = () => {
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
        <div>
            <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by size</span>
            </h5>
            <div className="bg-light p-4 mb-30">
                <form>
                    {sizes.map(size => (
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3" key={size.id}>
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

export default SizeFilter;
