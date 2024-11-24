require('dotenv').config();
const express = require("express");
const fs = require("fs").promises;
const app = express();
const PORT = process.env.PORT || 3500;
const morgan = require('morgan');
const cors = require('cors');



// Middleware to parse JSON
app.use(express.json());

// Middleware to parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(cors()); // Enables CORS for all routes

// Example quotes data
let quotes = [];

const loadQuotes = async () => {
  if (quotes.length === 0) {
    try {
      console.log("...Attempting to load quotes");
      const data = await fs.readFile("api/quotes.json", "utf8");
      quotes = JSON.parse(data);
      console.log("Quotes data loaded successfully.");
    } catch (error) {
      console.error("Error loading quotes", error);
      throw error;
    }
  }
};

// Route to get quotes with optional tag filtering
app.get("/api/quotes", async (req, res) => {
  const tag = req.query.tag?.toLowerCase();

  // Check if the tag is a string
  if (tag && typeof tag !== 'string') {
    return res.status(400).json({ error: 'Invalid tag format. Tag must be a string.' });
  }

  try {
   if(!quotes.length) await loadQuotes();

    if (tag) {
      const filteredQuotes = quotes.filter((quote) => Array.isArray(quote.tags) && quote.tags.includes(tag));

      if (filteredQuotes.length > 0) {
        const randomQuote =
          filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        return res.json(randomQuote);
      } else {
        return res
          .status(404)
          .json({ error: `No quotes found for tag: ${tag}` });
      }
    } 
    
        res.json(quotes); // Return all quotes if no tag is provided
    
  } catch (err) {
    res
      .status(500)
      .json({ error: `Error loading quotes data: ${err.message}` });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
