const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS to allow requests from your frontend
app.use(cors());

// Replace with your NewsAPI key
const NEWS_API_KEY = 'f99fce14a8554db7a905e1fca2e0745c';

// Route to handle NewsAPI requests
app.get('/news', async (req, res) => {
  const { country = 'us', category = 'general' } = req.query;
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        category,
        apiKey: NEWS_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching news');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
