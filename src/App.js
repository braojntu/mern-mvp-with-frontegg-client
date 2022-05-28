import React from 'react';
import {useAuth} from '@frontegg/react';
import Login from './Components/Login/Login';
import ProfileSettings from './Components/ProfileSettings/ProfileSettings';
import CountryInfo from './Components/CountryInfo/CountryInfo';
import './styles.css';

function App() {
  const {user, isAuthenticated} = useAuth();

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <ProfileSettings />
          <CountryInfo />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
