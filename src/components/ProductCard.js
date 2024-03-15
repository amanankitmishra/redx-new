import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ProductCard = (product) => {
  return (
    <Card className="compact-product-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: '80px', objectFit: 'cover'}}
      />      
      <Card.Body>
        <Card.Title style={{padding: '8px 0', fontSize: '1rem'}}>{product.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export const ProductDescription = (product) => {
  return (
    <Row className="p-4 pt-8" sx={{display:"flex" , textAlign:"center"  , justifyContant:"center"}}>
      <Col xs={12} md={4} lg={4}>
        <div style={{ height: '350px', width: '100%', paddingTop: '24px', display:'flex' ,alignItems:"center", justifyItems:'center'}}>
          <img
            src={product.image}
            alt={product.image}
            height={'100%'}
            className='products'
            width={'100%'}
            style={{ borderRadius: '20px', objectFit: 'cover',}}
          />
        </div>
      </Col>
      <Col xs={12} md={8} lg={8}>
        <div style={{ height: '350px', paddingLeft: '0px',  paddingTop: '24px', textAlign: 'start', fontFamily: 'sans-serif' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '20px' }}>{product.name}</h4>
          <p style={{ fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: product.description }} />
        </div>
      </Col>
    </Row>
  );
};

export default ProductCard;