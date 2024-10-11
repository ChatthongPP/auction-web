import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AuctionItem from '../components/AuctionItem';

const Auction = () => {
  const { id } = useParams();
  const [currentBid, setCurrentBid] = useState(500);

  const product = { id, name: 'Art Toy 1', startPrice: 500, imageUrl: '/images/arttoy1.jpg' };

  const handleBid = () => {
    setCurrentBid(currentBid + 100); // เพิ่มเงินประมูล
  };

  return (
    <div>
      <h1>Auction for {product.name}</h1>
      <AuctionItem product={product} currentBid={currentBid} onBid={handleBid} />
    </div>
  );
};

export default Auction;
