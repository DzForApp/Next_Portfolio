import React from "react";

const Main = ({ children }) => {
  return (
    <main className=" flex flex-col  lg:px-0 lg:py-4 px-2 lg:mt-14 mt-16 ">
      {children}
    </main>
  );
};

export default Main;
