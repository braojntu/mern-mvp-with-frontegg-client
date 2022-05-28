import React from 'react';
import './login.css';
const ACCOUNT_URL = process.env.REACT_APP_ACCOUNT_URL;

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div>Welcome to Country Information Portal</div>
        <div className="login">
          <a href={`${ACCOUNT_URL}/login`}>Login</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
