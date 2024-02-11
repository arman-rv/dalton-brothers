import React, { Children } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

const MasterSelectOption = ({ title, name, Children }) => {
  return (
    <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[10px]  px-[40px]">
      <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white dark:bg-mode-900 dark:text-mode-50 font-irSans absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
        {title}
      </span>
      <Field
        as="select"
        name={name}
        className="bg-white dark:bg-mode-900 dark:text-mode-200 w-[85%] m-auto text-right h-[50px] text-[#9ca3af]  rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
      >
        {Children}
      </Field>
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

export default MasterSelectOption;
