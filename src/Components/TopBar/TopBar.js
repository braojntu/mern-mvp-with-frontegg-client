import React from 'react';
import {useAuth} from '@frontegg/react';
import {AdminPortal} from '@frontegg/react';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import './topbar.css';

export default function TopBar() {
  const {user, isAuthenticated} = useAuth();

  
  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-container">
          <div>Welcome to Country Information Portal</div>
          {isAuthenticated ? (
            <>
              <ProfileSettings />
              <Logout />
            </>
          ) : (
            <>
              <Login />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

