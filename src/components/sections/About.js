import Image from "next/image";
import React from "react";
import ItemEnum from "../icons/ItemEnum";
import Devloper from "/public/devloper.png";

function About() {
  return (
    <section
      id="About_me"
      className=" relative  flex md:flex-row md:space-y-6 md:h-screen space-y-8 flex-col items-center justify-center   "
    >
      <div className="w-full h-full py-4 md:w-8rem transition-all flex flex-col md:flex-row space-y-6 justify-center items-center ">
        {/* Part 01 About me */}
        <div className="flex flex-col md:w-1/2  text-center space-y-8 justify-center items-center">
          <div className="w-full flex flex-col items-center  ">
            <span className=" text-4xl md:text-6xl  font-medium text-blx-900">
              About Me
            </span>
            <span className=" md:text-2xl text-gray-600 font-sans text-center mt-5">
              Why Choose Me ?
            </span>
          </div>
          <span className="w-2/3 md:w-96 md:text-2xl font-sans  ">
            <p className="text-gray">
              I am a software engineer and a full stack developer with over
              three years of experience.
            </p>
          </span>
          <div className="w-96 md:w-2/3   ">
            <span className=" text-xl font-medium text-slate-800">
              Here are a Few Highlights:
            </span>
            <ul className="mt-2 pl-6 space-y-2 font-light">
              <li className="flex gap-6">
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> Full Stack web and mobile development</span>
              </li>
              <li className="flex gap-6">
                {" "}
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> Interactive Front End as per the design</span>
              </li>
              <li className="flex gap-6">
                {" "}
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> React and React Native</span>
              </li>
              <li className="flex gap-6">
                {" "}
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> Redux Toolkit for State Mnanagement</span>
              </li>
              <li className="flex gap-6">
                {" "}
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> Building REST API</span>
              </li>
              <li className="flex gap-6">
                {" "}
                <ItemEnum className="w-4 h-4 bg-rdn-yellow" />
                <span> Managing database</span>
              </li>
            </ul>
            <div className="flex space-x-16  justify-center items-center py-4 ">
              <button className="h-12 w-32 bg-rdn-yellow text-black rounded-xl ">
                Konw More
              </button>
            </div>
          </div>
        </div>
        {/* Part 02 picture */}
        <div className="relative w-full md:w-1/3  items-center  justify-center  ">
          <Image src={Devloper} alt="" />
        </div>
        {/* Part 02 Some Highlight */}
      </div>
    </section>
  );
}

export default About;
