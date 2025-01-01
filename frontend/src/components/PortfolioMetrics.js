import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const PortfolioMetrics = ({ stocks }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const totalValue = stocks.reduce((acc, stock) => acc + stock.buyPrice * stock.quantity, 0);

  const data = stocks.map((stock) => ({
    name: stock.ticker,
    value: stock.buyPrice * stock.quantity,
  }));

  return (
    <div className="portfolio-metrics">
      <h3>Portfolio Metrics</h3>
      <p>Total Portfolio Value: ${totalValue.toFixed(2)}</p>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PortfolioMetrics;
