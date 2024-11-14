import React from 'react';
import './NewsCardStyle.css';
import defaultImage from './resources/default-image.jpg'; 


const NewsCard = ({ title, description, url, imageUrl }) => {
  const imageToDisplay = imageUrl ? imageUrl : defaultImage; 
  
  return (
    <div className="card">
      <img src={imageToDisplay} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};


export default NewsCard;
