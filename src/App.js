import React, { useEffect, useState, useRef } from 'react';
import NewsCard from './NewsCard.js';
import getNews from './newsService.js';
import GreetingButton from './components/GreetingButton.js';
import Header from './components/Header.js';
import './App.css'; 

const App = () => {
  const [news, setNews] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [isGreeting, setIsGreeting] = useState(true);
  const speechRef = useRef([]);

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();

      const filteredNews = newsData.filter(article =>
        article.title && article.title !== "[Removed]" &&
        article.description && article.description !== "[Removed]"
      );

      setNews(filteredNews || []);
    };

    fetchNews();
  }, []);

  const greetUser = () => {
    const greetingSpeech = new SpeechSynthesisUtterance("Welcome to VoiceNews! I can read the headlines for you.");
    window.speechSynthesis.speak(greetingSpeech);
    setIsGreeting(false);
  };

  const readHeadlines = () => {
    setIsReading(true);
    news.forEach((article, index) => {
      const speech = new SpeechSynthesisUtterance(article.title);
      speechRef.current.push(speech);
      speech.onend = () => {
        if (index === news.length - 1) {
          setIsReading(false);
        }
      };
      window.speechSynthesis.speak(speech);
    });
  };

  const stopReading = () => {
    window.speechSynthesis.cancel();
    setIsReading(false);
  };

  return (
    <div className="app-container">
      <Header onVoiceAssist={greetUser} />

      <div className="buttons-container">
        {isGreeting && <GreetingButton onGreet={greetUser} />}
        <button
          onClick={isReading ? stopReading : readHeadlines}
        >
          {isReading ? 'Stop Reading' : 'Read News Headlines'}
        </button>
      </div>


      <div className="news-cards-container">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              imageUrl={article.urlToImage}
            />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>

    </div>
  );
};

export default App;
