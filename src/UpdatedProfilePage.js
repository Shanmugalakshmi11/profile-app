import React from "react";
import ProfileCard from "./ProfileCard";
import LoginButton from "./LoginButton";

const UpdatedProfilePage = ({ updatedProfile }) => {
  return (
    <div>
      <h1>Profile Updated!</h1>
      <ProfileCard profile={updatedProfile} />
      <br></br>
      <LoginButton />
    </div>
  );
};

export default UpdatedProfilePage;
