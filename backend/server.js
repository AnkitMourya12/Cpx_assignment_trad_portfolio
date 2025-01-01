const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/portfolioTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Stock Schema and Model
const stockSchema = new mongoose.Schema({
  stockName: { type: String, required: true },
  ticker: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true },
});

const Stock = mongoose.model('Stock', stockSchema);

// Routes
app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch stocks' });
  }
});

app.post('/api/stocks', async (req, res) => {
  try {
    const { stockName, ticker, quantity, buyPrice } = req.body;

    if (!stockName || !ticker || !quantity || !buyPrice) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newStock = new Stock({ stockName, ticker, quantity, buyPrice });
    await newStock.save();
    res.status(201).json({ message: 'Stock added successfully', stock: newStock });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add stock' });
  }
});

app.delete('/api/stocks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Stock.findByIdAndDelete(id);
    res.status(200).json({ message: 'Stock deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete stock' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
