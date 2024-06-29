import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <p className="product-offer">{product.offer}</p>
      <button className="add-to-cart">Add to Cart</button>
      <button className="order-now">Order Now</button>
    </div>
  );
};

export default ProductCard;
