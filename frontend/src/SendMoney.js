// SendMoney.js
import React from 'react';


function SendMoney() {
  return (
    <div className="send-money">
      <h2>Send Money</h2>
      <p>Enter the details below to send money.</p>
      <form>
        <label>
          Recipient's Email:
          <input type="email" name="recipientEmail" required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" required />
        </label>
        {/* Add more fields as necessary */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SendMoney;
