import React from 'react';
import './logout.css';

function Logout() {
  return (
    <div className="logout">
      <a href={`/account/logout`}>Logout</a>
    </div>
  );
}

export default Logout;
