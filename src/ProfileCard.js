import React, { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {
  const handleContactMe = () => {
    // Replace 'recipient@example.com' with the actual email address
    const emailAddress = "recipient@example.com";
    const subject = "Inquiry from your website";

    // Using template literals to create the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    // Open the default email client with the pre-filled email
    window.location.href = mailtoLink;
  };
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleFollow = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };
  // Accept profile data as a prop
  return (
    <div className="profile-card">
      <img src={profile.avatar} alt="Profile" className="profile-image" />
      <div className="profile-info">
        <h2 className="name">{profile.username}</h2>
        <h2 className="name">{profile.fullName}</h2>
        <p className="bio">{profile.bio}</p>
        <p className="email">{profile.email}</p>
        <p>{isFollowing ? "Follows you" : "Not following"}</p>
      </div>
      <div className="contact-me">
        <button className="contact-button" onClick={handleContactMe}>
          Contact Me
        </button>{" "}
        <br></br>
        <button
          className={isFollowing ? "unfollow-button" : "follow-button"}
          onClick={handleToggleFollow}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
