import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const PanelInps = ({
  as = "input",
  title,
  name,
  placeholder,
  type = "text",
  className,
}) => {
  return (
    <div
      className={`flex flex-col w-full relative   lg:w-full mt-[10px]  px-[40px] ${className}`}
    >
      <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white dark:bg-mode-900 dark:text-mode-50 absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
        {title}
      </span>
      <Field
        name={name}
        as={as}
        className=" w-[85%] dark:bg-mode-900 dark:text-mode-50 dark:placeholder:text-mode-200 m-auto text-right h-[50px] rounded-[30px] outline-none border-zinc-300 border-[2px] peer px-5 pt-2 min-h-[40px] max-h-[200px]"
        type={type}
        placeholder={placeholder}
      />

      <div className="w-full h-10 flex justify-center items-center">
        <ErrorMessage
          name={name}
          component={"div"}
          className="error text-red-500 text-center"
        />
      </div>
    </div>
  );
};

export { PanelInps };
