import React from 'react';
import './NewsCardStyle.css';

const NewsCard = ({ title, description, url, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} />}
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
