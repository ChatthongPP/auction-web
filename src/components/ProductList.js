import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price} THB</p>
          <Link to={`/auction/${product.id}`}>Go to Auction</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
