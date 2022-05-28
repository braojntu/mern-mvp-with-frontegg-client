import React from 'react'
import {useAuth} from '@frontegg/react';
import {AdminPortal} from '@frontegg/react';
import './profilesettings.css'


export default function ProfileSettings() {
    const {user, isAuthenticated} = useAuth();

    const handleClick = () => {
      AdminPortal.show();
    };

  return (
      <div className="profile">
        <img
          className="profile-img"
          src={user.profilePictureUrl}
          alt={user.name}
          onClick={handleClick}
        />
        {/* <span>{user.name}</span> */}
      </div>
  );
}