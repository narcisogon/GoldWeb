// OpenAccount.js
import React from 'react';

function OpenAccount() {
  return (
    <div className="open-account container py-5">
      <h2 className="mb-4">Open a New Account</h2>
      <p>Please fill out the form below to open a new account.</p>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address:</label>
          <input type="email" className="form-control" name="email" required />
        </div>
        {/* Add more fields as necessary */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default OpenAccount;
