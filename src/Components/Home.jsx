import React from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  return (
    <div className=" ">
      <div className="bg-custom-gray">
        <div className="min-h-screen" id="home">
          <h1 className="ml-6 py-6 text-gray-400  font-poppins font-bold text-6xl drop-shadow-2xl">
            Welcome
          </h1>
          <div className="items-center justify-center">
            <h3 className="ml-40 mb-6 text-gray-600 font-poppins font-bold">
              I AM
            </h3>
            <h1 className="text-6xl ml-12 font-freehand text-black ">Waseem</h1>
            <h1 className="text-6xl mb-6 ml-6 font-freehand text-black ">
              Raja
            </h1>
            <div className=" h-1 ml-5 bg-black w-20 rounded-e-full mt-2"></div>
            <div className="h-1 ml-10 bg-black w-20 mt-1 rounded-full"></div>
            <h3 className="ml-10 my-3 text-gray-600 font-poppins font-bold">
              SOFTWARE DEVELOPER
            </h3>
          </div>
          <div className="flex items-center  justify-center">
            <button className="absolute bottom-0 text-center w-32 mb-4 border border-gray-300 bg-white text-black font-thin rounded-full h-8">
              <a href="#about">KNOW MORE</a>
            </button>
          </div>
        </div>

        <div id="about">
          <About />
        </div>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
