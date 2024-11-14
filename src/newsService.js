const API_KEY = process.env.REACT_APP_API_KEY; 
const API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=news&country=in&language=en&category=business,education,environment,sports,world`;

const getNews = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (response.ok) {
      return data.results;  
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
