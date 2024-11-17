// OpenAccount.js
import React from 'react';


function OpenAccount() {
  return (
    <div className="open-account">
      <h2>Open a New Account</h2>
      <p>Please fill out the form below to open a new account.</p>
      {/* Add form elements here */}
      <form>
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email Address:
          <input type="email" name="email" required />
        </label>
        {/* Add more fields as necessary */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OpenAccount;
