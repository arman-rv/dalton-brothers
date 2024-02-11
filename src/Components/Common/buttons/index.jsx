import React from "react";

const Button = ({ type, className, value, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-[50px] py-[10px] rounded-[100px] font-irSBold text-lg cursor-pointer whitespace-nowrap transition-all duration-500 ${className}`}
    >
      {value}
      {children}
    </button>
  );
};

export { Button };
