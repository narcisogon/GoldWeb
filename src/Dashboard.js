// Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="container py-5">
      <h2>Welcome to Your Dashboard</h2>
      <p>This is a protected route accessible only to authenticated users.</p>
      {/* Add dashboard content here */}
    </div>
  );
}

export default Dashboard;
