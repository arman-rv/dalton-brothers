import React from "react";
import { NavLink } from "react-router-dom";

const SignLinks = ({ style, text, state, setState }) => {
  const handleClick = (state, setState) => {
    setState(!state);
    // Document.documentElement.scrollTop = 0;
  };
  return (
    <NavLink
      onClick={() => handleClick(state, setState)}
      className={`px-[50px] py-[10px] transition-all duration-500 cursor-pointer flex justify-center items-center rounded-full font-sha text-l ${style}`}
    >
      {text}
    </NavLink>
  );
};

export { SignLinks };
