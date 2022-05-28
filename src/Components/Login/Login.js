import React from 'react';
import './login.css';
const ACCOUNT_URL = process.env.REACT_APP_ACCOUNT_URL;

function Login() {
  return (
    <div className="login">
      <a href={`/account/login`}>Login</a>
    </div>
  );
}

export default Login;
