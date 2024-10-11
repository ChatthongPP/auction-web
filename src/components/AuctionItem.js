import React from 'react';

const AuctionItem = ({ product, currentBid, onBid }) => {
  return (
    <div className="auction-item">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Starting Price: {product.startPrice} THB</p>
      <p>Current Bid: {currentBid} THB</p>
      <button onClick={onBid}>Place a Bid</button>
    </div>
  );
};

export default AuctionItem;
