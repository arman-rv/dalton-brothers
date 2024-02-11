import React from "react";
import { Field, ErrorMessage } from "formik";


const Input = () => {
  return (
    <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[50px] mb-[30px] px-[40px]">
      <span className="mx-[10%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
        نام کاربر
      </span>
      <Field
        name="name"
        className="outline-[#595959] w-full text-right h-[40px] rounded-full outline-none border-[#949494] border-[2px] peer px-5"
        type="text"
        placeholder="...نام کاربری"
      />
      <ErrorMessage name="Title" component={"div"} className="error" />
    </div>
  );
};

export default Input;
