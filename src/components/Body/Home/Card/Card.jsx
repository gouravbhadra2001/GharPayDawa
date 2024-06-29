import React from 'react';
import './Card.css';

export default function Card({ category, description, imgSrc, actionText }) {
  return (
    <div className="card">
      <div className="category">
        <img
          width="50"
          height="50"
          src={imgSrc}
          alt={category}
        />
        <strong>{category}</strong>
      </div>
      <div className="card-desc">
        {description}
      </div>
      <div className="card-footer bg-transparent">
        <div className="card-action">{actionText}</div>
      </div>
    </div>
  );
}
