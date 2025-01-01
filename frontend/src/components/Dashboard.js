import React, { useState, useEffect } from 'react';
import StockForm from './StockForm';
import StockList from './StockList';
import PortfolioMetrics from './PortfolioMetrics';
import { fetchStocks } from '../services/api';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [currentStock, setCurrentStock] = useState(null);

  const refreshStocks = async () => {
    const response = await fetchStocks();
    setStocks(response.data);
  };

  useEffect(() => {
    refreshStocks();
  }, []);

  return (
    <div className="dashboard">
      <h1>Portfolio Tracker</h1>
      <div className="dashboard-content">
        <StockForm
          currentStock={currentStock}
          refreshStocks={refreshStocks}
          clearCurrentStock={() => setCurrentStock(null)}
        />
        <PortfolioMetrics stocks={stocks} />
        <StockList
          stocks={stocks}
          refreshStocks={refreshStocks}
          setCurrentStock={setCurrentStock}
        />
      </div>
    </div>
  );
};

export default Dashboard;
