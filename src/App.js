// App.js

import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import UpdatedProfilePage from "./UpdatedProfilePage";

const App = () => {
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const handleProfileUpdate = () => {
    // Simulate updating the profile on the server
    console.log("Profile updated!");
    setIsProfileUpdated(true);
  };

  return (
    <div>
      {isProfileUpdated ? (
        <UpdatedProfilePage />
      ) : (
        <ProfilePage onProfileUpdate={handleProfileUpdate} />
      )}
    </div>
  );
};

export default App;
