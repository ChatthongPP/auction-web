import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const products = [
    { id: 1, name: 'Art Toy 1', price: 500, imageUrl: '/images/arttoy1.jpg' },
    { id: 2, name: 'Model 2', price: 1000, imageUrl: '/images/model2.jpg' },
    { id: 3, name: 'Figure 3', price: 1500, imageUrl: '/images/figure3.jpg' },
  ];

  return (
    <div>
      <h1>Welcome to Art Toys Auction</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
