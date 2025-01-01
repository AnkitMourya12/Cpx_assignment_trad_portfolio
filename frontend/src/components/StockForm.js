// import React, { useState } from 'react';
// import { addStock, updateStock } from '../services/api';

// const StockForm = ({ currentStock, refreshStocks, clearCurrentStock }) => {
//   const [formData, setFormData] = useState(
//     currentStock || { stockName: '', ticker: '', buyPrice: '', quantity: 1 }
//   );

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (currentStock) {
//       await updateStock(currentStock._id, formData);
//     } else {
//       await addStock(formData);
//     }
//     refreshStocks();
//     setFormData({ stockName: '', ticker: '', buyPrice: '', quantity: 1 });
//     clearCurrentStock && clearCurrentStock();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="stock-form">
//       <h3>{currentStock ? 'Edit Stock' : 'Add New Stock'}</h3>
//       <input
//         type="text"
//         name="stockName"
//         placeholder="Stock Name"
//         value={formData.stockName}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="ticker"
//         placeholder="Ticker"
//         value={formData.ticker}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="number"
//         name="buyPrice"
//         placeholder="Buy Price"
//         value={formData.buyPrice}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">{currentStock ? 'Update' : 'Add'}</button>
//     </form>
//   );
// };

// export default StockForm;

//////////////////////////

import React, { useState } from 'react';
import { addStock, updateStock } from '../services/api';

const StockForm = ({ currentStock, refreshStocks, clearCurrentStock }) => {
  const [formData, setFormData] = useState(
    currentStock || { stockName: '', ticker: '', buyPrice: '', quantity: 1 }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (currentStock) {
  //       await updateStock(currentStock._id, formData); // Update existing stock
  //     } else {
  //       await addStock(formData); // Add new stock
  //     }
  //     refreshStocks(); // Refresh the stock list
  //     setFormData({ stockName: '', ticker: '', buyPrice: '', quantity: 1 }); // Reset the form
  //     clearCurrentStock && clearCurrentStock(); // Clear the edit state
  //   } catch (error) {
  //     console.error("Error submitting stock:", error.message);
  //     alert("Failed to submit stock. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentStock) {
        await updateStock(currentStock._id, formData); // Update existing stock
      } else {
        await addStock(formData); // Add new stock
      }
      refreshStocks(); // Refresh the stock list
      setFormData({ stockName: '', ticker: '', buyPrice: '', quantity: 1 }); // Reset the form
      clearCurrentStock && clearCurrentStock(); // Clear the edit state
    } catch (error) {
      console.error("Error submitting stock:", error.message);
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Failed to submit stock.'}`);
      } else {
        alert("Network error. Please try again.");
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <h3>{currentStock ? 'Edit Stock' : 'Add New Stock'}</h3>
      <input
        type="text"
        name="stockName"
        placeholder="Stock Name"
        value={formData.stockName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ticker"
        placeholder="Ticker"
        value={formData.ticker}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="buyPrice"
        placeholder="Buy Price"
        value={formData.buyPrice}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">{currentStock ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StockForm;
