import React from "react";
import ClockIcon from "../icons/ClockIcon";
import GitIcon from "../icons/GitIcon";
import DemoIcon from "../icons/DemoIcon";

const Sample = ({
  title,
  brief,
  img,
  duration,
  demo_link,
  github_link,
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col hover:mt-2   hover:scale-125 hover:mx-8 ease-in-out duration-500 rounded-lg items-center  justify-center px-4 mx-4  py-6 w-60`}
    >
      <div className="w-full h-32 ">
        <img className="w-full h-full rounded-lg" src={img} alt="noImage" />
      </div>
      <h1>{title}</h1>
      <p>{brief}</p>
      <div>
        <ClockIcon className="w-5 h-5" />
        <span>{duration}</span>
      </div>
      <div className="flex">{children}</div>
      <div className="flex space-x-4">
        <a href={github_link}>
          <GitIcon className="w-4 h-4" />
        </a>
        <a href={demo_link}>
          <DemoIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default Sample;
