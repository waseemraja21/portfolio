import React from "react";
import ProfilePicture from "./ProfilePicture";

function About() {
  const isLargeScreen = window.innerWidth >= 1024; // Assuming lg breakpoint is 1024px
  console.log(isLargeScreen);

  return (
    <div className="min-h-screen bg-custom-gray">
      <h1 className="ml-6 py-6 text-center text-gray-400  font-poppins drop-shadow-2xl font-bold text-6xl">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <p
          className={`flex-1 ${
            isLargeScreen ? "text-left" : "text-center"
          } font-light   px-3 text-gray-700 mx-4`}
        >
          Hi, I am a Full Stack Web Developer and Web Designer. An Open Source
          enthusiast and a Computer Science graduate from India. I am passionate
          about my field and constantly seek development through new relevant
          experiences. I enjoy creating personal projects and participating in
          teamwork, with a focus on developing my leadership skills. I have
          gained significant experience working on various college projects,
          where I was a core part of the development teams and worked on major
          features. Proficient in a range of technologies, I have successfully
          delivered tailored solutions for various projects. I love working on
          new and exciting technologies and have a keen interest in Web
          Development. I am always looking for new opportunities to learn and
          grow.
        </p>
        <div className="flex-1">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}

export default About;
