// ProfilePage.js

import React, { useState } from "react";
import UpdatedProfilePage from "./UpdatedProfilePage";
import "./ProfilePage.css";

const ProfilePage = ({ onProfileUpdate }) => {
  const [profile, setProfile] = useState({
    username: "JohnDoe",
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Web Developer",
    avatar: "https://example.com/avatar.jpg",
  });

  const [newAvatar, setNewAvatar] = useState(null);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewAvatar(file);
  };

  const handleUpdateProfile = () => {
    const updatedProfile = {
      ...profile,
      avatar: newAvatar ? URL.createObjectURL(newAvatar) : profile.avatar,
    };
    setProfile(updatedProfile);
    setNewAvatar(null);
    setIsProfileUpdated(true);

    // Simulate updating the profile on the server
    console.log("Profile updated!");

    // Notify the parent component about the profile update and pass the updated profile
    onProfileUpdate(updatedProfile);
  };

  const avatarUrl = newAvatar ? URL.createObjectURL(newAvatar) : profile.avatar;

  return (
    <div className="profile-container">
      {isProfileUpdated ? (
        <UpdatedProfilePage updatedProfile={profile} />
      ) : (
        <>
          <h1>Profile Page</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt="User Avatar" className="avatar" />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="profile-info">
            <label>Username:</label>
            <p>{profile.username}</p>
          </div>
          <div className="profile-info">
            <label>Full Name:</label>
            <p>{profile.fullName}</p>
          </div>
          <div className="profile-info">
            <label>Email:</label>
            <p>{profile.email}</p>
          </div>
          <div className="profile-info">
            <label>Bio:</label>
            <p>{profile.bio}</p>
          </div>
          <button className="update-button" onClick={handleUpdateProfile}>
            Update Profile
          </button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
