const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const getNews = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (response.ok) {
      return data.articles;  
    } else {
      console.error('Failed to fetch news:', data.message);
      return []; 
    }

  } catch (error) {
    console.error("Error fetching news:", error);
    return []; 
  }
};

export default getNews;
