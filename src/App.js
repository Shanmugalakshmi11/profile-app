import React from "react";
import ProfilePage from "./ProfilePage";

const App = () => {
  const handleProfileUpdate = (updatedProfile) => {
    // Handle the updated profile data, e.g., send it to the server
    console.log("Received updated profile:", updatedProfile);
  };

  return (
    <div>
      <ProfilePage onProfileUpdate={handleProfileUpdate} />
    </div>
  );
};

export default App;
