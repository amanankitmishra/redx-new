import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// Import any additional CSS or stylesheets if needed.

const ProductCard = (product) => {
  return (
    <Card className="compact-product-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      {/* Product Image */}
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: '80px', objectFit: 'cover' }}
      />

      {/* Product Name */}
      <Card.Body>
        <Card.Title style={{ padding: '8px 0', fontSize: '1rem' }}>{product.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export const ProductDescription = (product) => {
  return (
    <Row className="p-4 pt-8">
      {/* Product Image Column */}
      <Col xs={12} md={4} lg={4}>
        <div style={{ height: '350px', width: '100%', paddingTop: '24px' }}>
          <img
            src={product.image}
            alt={product.image}
            height={'100%'}
            width={'100%'}
            style={{ borderRadius: '20px', objectFit: 'cover' }}
          />
        </div>
      </Col>

      {/* Product Description Column */}
      <Col xs={12} md={8} lg={8}>
        <div style={{ height: '350px', paddingLeft: '0px', paddingRight: '32px', paddingTop: '24px', textAlign: 'start', fontFamily: 'sans-serif' }}>
          {/* Product Name */}
          <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>{product.name}</h4>

          {/* Product Description */}
          <p style={{ fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </Col>
    </Row>
  );
};

export default ProductCard;

