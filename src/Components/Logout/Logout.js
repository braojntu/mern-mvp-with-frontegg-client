import React from 'react';
import './logout.css';
const ACCOUNT_URL = process.env.REACT_APP_ACCOUNT_URL;

function Logout() {
  return (
    <div className="logout">
      <a href={`${ACCOUNT_URL}/logout`}>Logout</a>
    </div>
  );
}

export default Logout;
