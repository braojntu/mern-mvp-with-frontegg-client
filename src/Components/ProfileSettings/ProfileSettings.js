import React from 'react';
import {useAuth} from '@frontegg/react';
import {AdminPortal} from '@frontegg/react';
import './profilesettings.css';
import Logout from '../Logout/Logout';


function ProfileSettings() {
      const {user, isAuthenticated} = useAuth();

      const handleClick = () => {
        AdminPortal.show();
      };

  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-container">
          <div className="profile">
            <img
              className="profile-img"
              src={user.profilePictureUrl}
              alt={user.name}
              onClick={handleClick}
            />
            {/* <span>{user.name}</span> */}
          </div>
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
