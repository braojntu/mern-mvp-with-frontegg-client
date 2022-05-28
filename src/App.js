import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {useAuth} from '@frontegg/react';
import Login from './Components/Login/Login';
import Logout from './Components/Logout/Logout';
import Signup from './Components/Signup/Signup';
import TopBar from './Components/TopBar/TopBar';
import Home from './Pages/Home/Home';
import './styles.css';


export default function App() {
  const {user, isAuthenticated} = useAuth();

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <TopBar />}
        />
        <Route
          path="/sign-up"
          element={isAuthenticated ? <Home /> : <Signup />}
        />
        <Route path="/login" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}
