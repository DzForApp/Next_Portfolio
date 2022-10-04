import React from "react";
import Image from "next/image";
import FaceIcon from "../icons/FaceIcon";
import ButtonHire from "../commun/ButtonHire";
import ButtonResume from "../commun/ButtonResume";
import TwitIcon from "../icons/TwitIcon";
import LinkedIcond from "../icons/LinkedIcon";
import TelegIcon from "../icons/TelegIcon";
import GitIcon from "../icons/GitIcon";

export default function Intro() {
  return (
    <section
      id="Home"
      className="flex md:flex-row md:space-y-6  md:h-screen space-y-8 flex-col items-center justify-center  p-6 mb-32 "
    >
      <div className=" flex-col  items-center h-160 top-0 flex justify-center space-x-16  ">
        <div className="flex flex-col md:flex-row text-center ">
          <div className="flex flex-col justify-center items-center  h-full text-4xl  ">
            <div className=" w-full h-full flex flex-col md:flex-row space-y-2 md:space-x-32 justify-start p-6 items-center">
              <div className="flex flex-col space-y-4 justify-center items-center">
                {" "}
                <div className="flex flex-col text-center  space-y-1 w-auto text-4xl md:text-6xl">
                  <p className="text-slate-900 font-semibold ">
                    F r o n t e n d
                  </p>
                  <p className="text-rdn-yellow ">Web Developer</p>
                </div>
                <div className=" text-slate-900 w-2/3 md:w-96   text-center text-lg md:text-2xl font-sans">
                  <p>
                    I am familiar with React, NextJs, TailWind for the Frontend.{" "}
                    <br /> And Express, NestJs or Firebase for the backend.
                  </p>
                </div>
              </div>
              <div className=" w-96 h-96  bg-rdn-yellow items-center justify-center  rounded-full">
                <Image
                  src="/Me.png"
                  alt="Vercel Logo"
                  width={340}
                  height={430}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center"></div>
    </section>
  );
}
