import React, { useState } from "react";
import InputItem from "../commun/InputItem";
import FaceIcon from "../icons/FaceIcon";
import GitIcon from "../icons/GitIcon";
import LinkedIcon from "../icons/LinkedIcon";

function ContactMe() {
  const [menu, setMenu] = useState(false);

  return (
    <section
      id="Contact_me"
      className="relative   flex md:flex-col md:space-y-6 px-8 py-16 md:h-full space-y-8 flex-col items-center justify-center   "
    >
      <div className="w-full md:w-1/2 ">
        <div className="w-full h-full flex flex-col items-center  ">
          <span className=" text-4xl md:text-6xl font-medium text-blx-900">
            ContactMe
          </span>
          <span className="md:text-2xl text-gray-600 font-sans text-center my-5 ">
            Let s Keep In Touch
          </span>
        </div>

        <div className="  flex flex-col px-2 w-full h-full py-1 pl-1 rounded-xl shadow-xl bg-rdn-yellow  items-center ">
          <div className=" w-auto h-full bg-rdn-yellow items-center justify-center text-white  ">
            <div className="flex flex-col items-center ">
              {" "}
              <div className="uppercase text-3xl">Get in Touch</div>
              <div className="flex    space-x-4 mt-4">
                <GitIcon className="w-12 h-12" />
                <FaceIcon className="w-12 h-12" />
                <LinkedIcon className="w-12 h-12" />
              </div>
            </div>
          </div>

          <div className=" w-full m-6 h-5/6 bg-transparent items-center flex flex-col rounded-2xl flex-shrink-0 self-center ">
            <div className="flex flex-col  w-5/6 md:w-2/3 space-y-4 p-2">
              <InputItem title="Name" />
              <InputItem title="Email" />
              <InputItem title="Message" />
            </div>
          </div>
          <div className="md:px-6 px-4 md:py-3 py-2 md:flex rounded-2xl  bg-slate-800">
            <button className=" w-auto items-center text-center  bg-rdn-red text-2xl text-white  border-0 font-sans rounded-xl">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
