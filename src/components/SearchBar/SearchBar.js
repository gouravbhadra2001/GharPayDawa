import React from 'react';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search for medicine" className="search-input" />
      <button type="submit" className="search-button">
        <img src="https://img.icons8.com/ios/50/search--v1.png"  alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
