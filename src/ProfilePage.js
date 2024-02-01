import React, { useState, useEffect } from "react";
import UpdatedProfilePage from "./UpdatedProfilePage";
import ProfileCard from "./ProfileCard"; // Import ProfileCard component
import "./ProfilePage.css";

const ProfilePage = ({ onProfileUpdate }) => {
  const [profile, setProfile] = useState({
    username: "",
    fullName: "",
    email: "",
    bio: "",
    avatar: "",
  });

  const [newAvatar, setNewAvatar] = useState(null);
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  useEffect(() => {
    // Fetch profile data from an API or other data source
    fetch("https://api.example.com/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile data:", error));
  }, []); // Empty dependency array ensures the effect runs only once on component mount

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
          <div className="avatar-container">
            <img src={avatarUrl} alt="User Avatar" className="avatar" />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <div className="profile-info">
            <label>Username:</label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />

            <label>Full Name:</label>
            <input
              type="text"
              value={profile.fullName}
              onChange={(e) =>
                setProfile({ ...profile, fullName: e.target.value })
              }
            />

            <label>Email:</label>
            <input
              type="text"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />

            <label>Bio:</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            />
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
