// Banking.js
import React from 'react';
import { Link } from 'react-router-dom';

function Banking() {
  return (
    <section id="banking" className="service-section py-5">
      <div className="container">
        <h2 className="text-primary">Banking Services</h2>
        <p>
          Access easy, secure banking without a traditional bank account. Features include savings,
          checking, and mobile deposits.
        </p>
        <Link to="/open-account">
          <button className="btn btn-primary">Open Account</button>
        </Link>
      </div>
    </section>
  );
}



export default Banking;
