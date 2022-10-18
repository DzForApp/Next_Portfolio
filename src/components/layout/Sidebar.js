import React, { useState } from "react";

import MySocialLinks from "../util/MySocialLinks";

const sections = ["Home", "About me", "Skills", "Latest Work", "Contact me"];
const MenuIcon = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-200 ease-linear h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const navLinks = sections.map((section) => (
    <a
      key={section}
      href={`#${section.replace(" ", "_")}`}
      className=" md:hidden md:text-dark md:text-xl  no-underline transition-all space-x-4 mx-6 font-semibold hover:text-gray-600"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {section}
    </a>
  ));

  return (
    <div className="md:hidden fixed keft-0 z-50 w-1/3 h-screen z-500 bg-rdn-yellow">
      <nav className="relative h-full gap-12 flex flex-col   justify-start mt-12 ">
        {navLinks}
      </nav>
    </div>
  );
}

export default Sidebar;
