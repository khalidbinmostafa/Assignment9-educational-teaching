import React from 'react';

const Service = (props) => {
    const { name, img, description, price } = props.service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="fs-4 fw-bold">Course Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;