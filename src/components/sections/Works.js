import React, { useState } from "react";
import Sample from "../content/Sample";

function Skills() {
  return (
    <section id="Latest_Work">
      <div className=" flex flex-col items-center  justify-center ">
        <span className=" text-4xl md:text-6xl font-medium text-blx-900">
          Latest Work
        </span>
        <span className=" md:text-2xl text-gray-600 font-sans text-center mt-5">
          My Latest Wroks Details
        </span>
      </div>

      <div className="flex flex-wrap justify-center text-xs overflow-x-auto w-full px-4 py-16">
        <Sample
          className=" border-2 border-gray-500"
          title="Food Delivery Service"
          brief="Delivery food service website based on given figma design with 3 breakpoints"
          duration="20 days"
          img="/media/delivery.png"
          github_link="https://github.com/bofilio/delivery-next"
          demo_link="https://delivery-next.vercel.app/"
        >
          <span className="p-1 rounded-lg bg-gray-200 text-gray-600 m-1">
            {" "}
            NextJs
          </span>
          <span className="p-1 rounded-lg bg-blue-200 text-blue-600 m-1">
            {" "}
            TailWind
          </span>
          <span className="p-1 rounded-lg bg-red-200 text-red-600 m-1">
            {" "}
            Scss
          </span>
          <span className="p-1 rounded-lg bg-green-200 text-green-600 m-1">
            {" "}
            Ci-Cd
          </span>
        </Sample>
        <Sample
          className="border-2 border-gray-400"
          title="ToDo App online Service"
          brief="ToDo app online service, you can access using [rdn, script] as creidentials"
          duration="12 days"
          img="/media/todo.png"
          github_link="https://github.com/DzForApp/ToDo"
          demo_link="https://todo-737.herokuapp.com/"
        >
          <span className="p-1 rounded-lg bg-gray-200 text-gray-600 m-1">
            {" "}
            NextJs
          </span>
          <span className="p-1 rounded-lg bg-blue-200 text-blue-600 m-1">
            {" "}
            TailWind
          </span>
          <span className="p-1 rounded-lg bg-red-200 text-red-600 m-1">
            {" "}
            ExpressJS
          </span>
        </Sample>
        <Sample
          className="border-2 border-gray-300"
          title="VPN Service"
          brief="Virtual Private Network service website based on given figma design."
          duration="15 days"
          img="/media/vpn.png"
          github_link="https://github.com/bofilio/delivery-next"
          demo_link="https://dzforapp.github.io/react_vpn/"
        >
          <span className="p-1 rounded-lg bg-gray-200 text-gray-600 m-1">
            {" "}
            ReactJS
          </span>

          <span className="p-1 rounded-lg bg-red-200 text-red-600 m-1">
            {" "}
            Css
          </span>
          <span className="p-1 rounded-lg bg-green-200 text-green-600 m-1">
            {" "}
            Ci-Cd
          </span>
        </Sample>
        <Sample
          className="border-2 border-red-900"
          title="Eco Hosting Service"
          brief="Web Hosting service website based on given figma design with 3 breakpoints"
          duration="5 days"
          img="/media/hosting.png"
          github_link="https://github.com/DzForApp/eco_hosting"
          demo_link="https://dzforapp.github.io/eco_hosting/index.html"
        >
          <span className="p-1 rounded-lg bg-gray-200 text-gray-600 m-1">
            {" "}
            HTML
          </span>
          <span className="p-1 rounded-lg bg-blue-200 text-blue-600 m-1">
            {" "}
            TailWind
          </span>
          <span className="p-1 rounded-lg bg-green-200 text-green-600 m-1">
            {" "}
            Ci-Cd
          </span>
        </Sample>
      </div>
    </section>
  );
}

export default Skills;
