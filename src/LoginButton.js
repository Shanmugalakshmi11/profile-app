import React, { useState } from "react";
import "./LoginButton.css"; // Import the CSS file

const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <button
      className={isLoggedIn ? "logged-in" : ""}
      onClick={handleLoginToggle}
    >
      {isLoggedIn ? "Logged In" : "Login"}
    </button>
  );
};

export default LoginButton;
