const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();

// Add stock
router.post('/add', async (req, res) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/stocks', async (req, res) => {
  try {
    const stock = new Stock(req.body); // Assuming Stock is your Mongoose model
    await stock.save();
    res.status(201).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update stock
// router.put('/update/:id', async (req, res) => {
//   try {
//     const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(stock);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// router.put('/update/:id', async (req, res) => {
//   try {
//     const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
//       new: true, // Return the updated document
//       runValidators: true, // Validate the updated fields
//     });

//     if (!stock) {
//       return res.status(404).json({ error: 'Stock not found' });
//     }

//     res.status(200).json(stock);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// Update stock
router.put('/update/:id', async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(stock); // Return updated stock
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Delete stock
router.delete('/delete/:id', async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Stock deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
