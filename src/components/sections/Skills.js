import React, { useState } from "react";
import Skill from "../content/Skill";
import ReactIcon from "../icons/ReactIcon";
import NodeIcon from "../icons/NodeIcon";
import DjangoIcon from "../icons/DjangoIcon";
import FireBaseIcon from "../icons/FirebaseIcon";
import MongoDbIcon from "../icons/MongoDBIcon";
import NextIcon from "../icons/NextIcon";
import TailwindIcon from "../icons/TailwondIcon";

function Resume() {
  const [item, setItem] = useState(0);

  const [SelectedItemIndex, setSelectedItemIndex] = useState(0);
  const [offset, setCarouselOffsetStyle] = useState(0);

  function itemActive() {
    setItem(true);
  }
  const [menu, setMenu] = useState(false);

  return (
    <section id="Skills" className="justify-center flex flex-col">
      <div className=" flex flex-col items-center text-slate-800   ">
        <span className=" text-4xl md:text-6xl font-medium text-blx-900">
          My skills
        </span>
      </div>
      <div className="flex flex-wrap justify-center text-xs overflow-x-auto w-full px-4 py-16">
        <Skill
          title="React"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-blue-300"
        >
          <ReactIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="NextJS"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-gray-800"
        >
          <NextIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="NodeJS Backend"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-green-200"
        >
          <NodeIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="Django Backend"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-green-700"
        >
          <DjangoIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="Firebase Backend"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-yellow-400"
        >
          <FireBaseIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="MongoDB"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-green-500"
        >
          <MongoDbIcon className="w-40 h-40" />
        </Skill>
        <Skill
          title="Tailwind Css"
          brief="I have three years of experience with React. I use it to build Frontend Web apps and i love it.."
          className="border-2 border-green-500"
        >
          <TailwindIcon className="w-40 h-40" />
        </Skill>
      </div>
    </section>
  );
}

export default Resume;
