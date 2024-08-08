import React from "react";

function Skills() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col py-4 items-center">
        <h1 className="text-center text-black  font-semibold text-6xl p-6 drop-shadow-2xl">
          SKILLS
        </h1>
        <div className=" h-1 bg-black w-20 rounded-e-full"></div>
        <div className="h-1 ml-10 bg-black w-20 mt-1 rounded-full"></div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center justify-center">
        <div className="bg-custom-gray transition-transform transform hover:scale-105 hover:border-black border border-gray-300 m-3 text-center">
          <h3 className="text-custom-blue font-semibold text-center">
            Web Design
          </h3>
          <p className="text-black p-4 m-2 font-light">
            I love designs and it's the first step before creating any website
            as I can give layout to my imagination.
          </p>
        </div>
        <div className="bg-custom-gray p-4 transition-transform transform hover:scale-105 hover:border-black border border-gray-300 m-3 text-center">
          <h3 className="text-custom-blue font-semibold text-center">
            Web Development
          </h3>
          <p className="text-black m-2 font-light">
            I am a Full Stack Web Developer (MERN) and have quite some
            experience in it as well.
          </p>
        </div>
        <div className="bg-custom-gray p-4 transition-transform transform hover:scale-105 hover:border-black border border-gray-300 m-3 text-center">
          <h3 className="text-custom-blue font-semibold text-center">
            Problem Solving
          </h3>
          <p className="text-black m-2 font-light">
            I love solving problems whether programming problems or real life
            problems.
          </p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-gray-500">TECH I'M FAMILIAR WITH</h2>
        <div className="flex justify-between items-center p-5 text-black font-thin">
          <div className="mx-5">
            <p className="hover:font-semibold">HTML</p>
            <p className="hover:font-semibold">CSS</p>
            <p className="hover:font-semibold">Javascript</p>
            <p className="hover:font-semibold">C++</p>
            <p className="hover:font-semibold">Python</p>
            <p className="hover:font-semibold">SQL</p>
          </div>
          <div className="mx-5">
            <p className="hover:font-semibold">MongoDB</p>
            <p className="hover:font-semibold">Express.js</p>
            <p className="hover:font-semibold">React.js</p>
            <p className="hover:font-semibold">Node.js</p>
            <p className="hover:font-semibold">Git & Github</p>
          </div>
          <div className="mx-5">
            <p className="hover:font-semibold">Operating Systems</p>
            <p className="hover:font-semibold">DBMS</p>
            <p className="hover:font-semibold">OOPS</p>
            <p className="hover:font-semibold">Data Structures</p>
            <p className="hover:font-semibold">Algorithms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
