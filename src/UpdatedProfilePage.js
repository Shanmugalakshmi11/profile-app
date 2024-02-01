import React from "react";
import ProfileCard from "./ProfileCard";

const UpdatedProfilePage = ({ updatedProfile }) => {
  return (
    <div>
      <h1>Profile Updated!</h1>
      <ProfileCard profile={updatedProfile} />
    </div>
  );
};

export default UpdatedProfilePage;
