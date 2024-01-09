import React from 'react';
import { Card } from 'react-bootstrap';


const ProductCard = (product) => {
    return (
        <Card className="compact-product-card" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            {/* Product Image */}
            <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
            />

            {/* Product Name */}
            <Card.Body>
                <Card.Title style={{ padding: '8px 0' }}>{product.name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export const ProductDescription = (product) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 col-lg-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid"
                        style={{ borderRadius: '20px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-8 col-lg-8">
                    <div className="p-3">
                        <h4 className="fw-bold mb-3">{product.name}</h4>
                        <p className="fs-14" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
