import React from 'react';
import { deleteStock } from '../services/api';

const StockList = ({ stocks, refreshStocks, setCurrentStock }) => {
  const handleDelete = async (id) => {
    try {
      await deleteStock(id); // Call the API to delete the stock
      refreshStocks(); // Refresh stock list
    } catch (error) {
      console.error("Error deleting stock:", error.message);
      alert("Failed to delete stock. Please try again.");
    }
  };

  return (
    <div className="stock-list">
      <h3>Current Stock Holdings</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Buy Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.stockName}</td>
              <td>{stock.ticker}</td>
              <td>${stock.buyPrice}</td>
              <td>{stock.quantity}</td>
              <td>
                <button onClick={() => setCurrentStock(stock)}>Edit</button>
                <button onClick={() => handleDelete(stock._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
