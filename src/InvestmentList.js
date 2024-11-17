// InvestmentList.js
import React from 'react';

function InvestmentList({ investments }) {
  return (
    <div className="investment-list mt-4">
      <h3>Your Stocks</h3>
      {investments.length === 0 ? (
        <p>You have no investments yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Stock Symbol</th>
              <th>Shares</th>
              <th>Purchase Price</th>
              <th>Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((investment) => (
              <tr key={investment.id}>
                <td>{investment.symbol}</td>
                <td>{investment.shares}</td>
                <td>${investment.purchasePrice.toFixed(2)}</td>
                <td>{investment.purchaseDate.toDate().toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InvestmentList;