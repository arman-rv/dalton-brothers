import React from "react";
import { Field, ErrorMessage } from "formik";


const TextArea = () => {
  return (
    <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mb-[30px] px-[40px]">
      <span className=" mx-[10%]  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
        پیام شما
      </span>
      <Field
        as="textarea"
        name="comment"
        className="outline-[#595959] w-full text-right min-h-[120px] max-h-[150px] rounded-[20px] outline-none border-[#949494] border-[2px] peer px-5 py-[15px]"
        type="text"
        placeholder="...متن پیام"
      />
      <ErrorMessage name="Describe" component={"div"} className="error" />
    </div>
  );
};

export default TextArea;
