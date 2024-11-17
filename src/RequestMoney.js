// RequestMoney.js
import React from 'react';


function RequestMoney() {
  return (
    <div className="request-money">
      <h2>Request Money</h2>
      <p>Enter the details below to request money.</p>
      <form>
        <label>
          Requestor's Email:
          <input type="email" name="requestorEmail" required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        {/* Add more fields as necessary */}
        <button type="submit">Request</button>
      </form>
    </div>
  );
}

export default RequestMoney;
