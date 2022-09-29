import React from "react";

export default function InputItem(props) {
  return (
    <div className="">
      <p className="text-2xl font-sans text-opacity-25">{props.title}</p>
      <input className="w-full h-12 rounded-xl" type={props.name} />
    </div>
  );
}
