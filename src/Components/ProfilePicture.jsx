import React from "react";

const ProfilePicture = () => (
  <div className="flex justify-center items-center">
    <div className="my-12 w-48 h-48 overflow-hidden rounded-full">
      <img
        src="/images/mypic.jpg" // Replace with your image URL
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default ProfilePicture;
