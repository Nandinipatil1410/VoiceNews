import React from 'react';
import './NewsCardStyle.css';

const NewsCard = ({ title, description, url, imageUrl }) => {
  const maxLength = 150; 
  const truncatedDescription = description.length > maxLength ? description.slice(0, maxLength) + '...' : description;

  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{truncatedDescription}</p> 
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
