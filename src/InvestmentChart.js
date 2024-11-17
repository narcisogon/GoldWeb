// InvestmentChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function InvestmentChart({ investments }) {
  // Prepare data for the chart
  const chartData = investments.map((investment) => ({
    symbol: investment.symbol,
    totalValue: investment.shares * investment.purchasePrice,
  }));

  return (
    <div className="investment-chart mt-5">
      <h3>Investment Portfolio</h3>
      {chartData.length === 0 ? (
        <p>No data available for chart.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="symbol" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalValue" fill="#0072ce" name="Total Value ($)" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default InvestmentChart;