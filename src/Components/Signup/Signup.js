import React from 'react';
import './signup.css';
const ACCOUNT_URL = process.env.REACT_APP_ACCOUNT_URL;

export default function Signup() {
  return (
    <div className="login">
      <a href={`/account/sign-up`}>Signup</a>
    </div>
  );
}
