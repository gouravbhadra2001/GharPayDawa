import React, { useState } from 'react';
import './home.css';
import Card from './Card/Card';
import ProductCard from './Products/ProductCard';
import './Products/ProductCard.css';

const Home = () => {
  const medicineCards = [
    {
      category: 'Medicine',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis doloremque dignissimos odit nulla eaque quia dolore rerum similique voluptas ab, tempora dolores laudantium earum exercitationem aliquam at, iusto non!',
      imgSrc: 'https://img.icons8.com/ios-filled/100/supplement-bottle.png',
      actionText: 'Find medicine'
    },
    {
      category: 'Health',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea voluptatem saepe ex magnam dolore cum officia eveniet voluptas, laudantium voluptatum debitis sequi obcaecati totam placeat similique, qui molestiae quam vitae aperiam unde!',
      imgSrc: 'https://img.icons8.com/ios-filled/100/like--v1.png',
      actionText: 'Find health products'
    },
    {
      category: 'Supplements',
      description: 'Numquam sit et aut ipsum? Ipsum doloremque dignissimos odit nulla eaque quia dolore rerum similique voluptas ab, tempora dolores laudantium earum exercitationem aliquam at.',
      imgSrc: 'https://img.icons8.com/ios-filled/100/pill.png',
      actionText: 'Find supplements'
    }
  ];

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },  
    {
      id: 4,
      name: 'Product 4',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 29.99,
      offer: '20% off',
      image: 'https://via.placeholder.com/150'
    },
  ];

  // State to track current position of the product slider
  const [currentPosition, setCurrentPosition] = useState(0);

  // Function to handle moving to the next slide
  const nextSlide = () => {
    const newPosition = currentPosition + 1;
    setCurrentPosition(newPosition >= products.length ? 0 : newPosition);
  };

  // Function to handle moving to the previous slide
  const prevSlide = () => {
    const newPosition = currentPosition - 1;
    setCurrentPosition(newPosition < 0 ? products.length - 1 : newPosition);
  };

  return (
    <div className="Home">
      <section className="shortcuts">
        <div className="head">
          <h2>Our Services</h2>
        </div>
        <div className="body row flex-row flex-nowrap mt-4 pb-4 pt-2">
          {medicineCards.map((card, index) => (
            <Card
              key={index}
              category={card.category}
              description={card.description}
              imgSrc={card.imgSrc}
              actionText={card.actionText}
            />
          ))}
        </div>
        <div className="slider-controller">
          <span className="prev" onClick={prevSlide}>{"<"}</span>
          <span className="next" onClick={nextSlide}>{">"}</span>
        </div>
      </section>
      <section className="shortcuts">
        <div className="head">
          <h2>Our Products</h2>
        </div>
        <div className="product-list row flex-row flex-nowrap mt-4 pb-4 pt-2" style={{ overflowX: 'auto' }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
       
      </section>
    </div>
  );
}

export default Home;
