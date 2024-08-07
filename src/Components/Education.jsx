import React from "react";

function Education() {
  return (
    <div className="bg-custom-gray min-h-screen">
      <div className="flex flex-col pb-10 items-center">
        <h1 className="text-6xl pt-10 pb-5 text-center text-gray-400  font-poppins font-bold drop-shadow-2xl">
          EDUCATION
        </h1>
        <div className=" h-1 bg-black w-20 rounded-e-full"></div>
        <div className="h-1 ml-10 bg-black w-20 mt-1 rounded-full"></div>
      </div>

      <div className="py-5 pl-5">
        <h3 className="text-black py-0.2 font-thin text-2xl">
          Bachelor's Degree in Computer Science & Engineering
        </h3>
        <p className="text-gray-500 py-0.2 font-semibold">
          Technocrats Institute Of Technology (Excellence), Bhopal(India)
        </p>
        <p className="text-gray-500 py-0.5 font-semibold">CGPA - 7.93</p>
        <p className="text-black py-0.2 font-thin">2020-2024</p>
      </div>

      <div className="py-5 pl-5">
        <h3 className="text-black py-0.2 font-thin text-2xl">
          Intermediate, Jammu & Kashmir Board Of School Education
        </h3>
        <p className="text-gray-500 py-0.2 font-semibold">
          Scored 81% in PCM (Physics Chemistry Mathematics) with Statistics{" "}
        </p>
        <p className="text-black py-0.2 font-thin">2019</p>
      </div>

      <div className="py-5 pl-5">
        <h3 className="text-black py-0.2 font-thin text-2xl">
          Matriculation, Jammu & Kashmir Board Of School Education
        </h3>
        <p className="text-gray-500 py-0.2 font-semibold">
          Passed with 76.80% marks
        </p>
        <p className="text-black py-0.2 font-thin">2017</p>
      </div>
    </div>
  );
}

export default Education;
