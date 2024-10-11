import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = { id, name: 'Art Toy 1', price: 500, description: 'This is an awesome art toy.', imageUrl: '/images/arttoy1.jpg' };

  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} THB</p>
    </div>
  );
};

export default ProductDetail;
