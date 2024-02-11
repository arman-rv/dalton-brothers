import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import React from "react";

import { addComment } from "../../../../Core/Services/api/course/comment/addComment/addComment";
import { Input } from "../../Inputs/Input";
import { Button } from "../../buttons";
import { commentValidation } from "../../../../Core/Validation/yup";

const AddComment = ({ id ,emotion ,setEmotion ,setModal,modal}) => {
  const onSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("CourseId", id);
    formdata.append("Title", values.title);
    formdata.append("Describe", values.describe);
    const user = await addComment(formdata);
    if(user.success==true){
      toast.success("نظر شما با موفقیت ارسال شد")
      setEmotion(!emotion)
      setModal(!modal)
  }
    else{toast.error("مشکلی در ارسال نظر وجود دارد")}
  };
  return (
    <div className=" w-full flex ">
      <div className=" xl:w-[1000px] lg:w-[900px] md:w-[800px] sm:w-[600] w-[350px] m-auto flex justify-evenly">
        <Formik
          initialValues={{
            title: "",
            describe: "",
          }}
          validationSchema={commentValidation}
          onSubmit={(values) => onSubmit(values)}
        >
          <Form className=" flex w-full flex-col items-center font-irSans transition-all">
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] md:px-[40px] px-1">
              <Input
                topic={"عنوان نظر"}
                className="rounded-[20px] dark:bg-mode-900 "
                placeHolder={"...عنوان نظر"}
                type={"text"}
                name={"title"}
                as={"input"}
              />
            </div>
            <div className="flex flex-col w-full relative sm:w-3/4 lg:w-full mb-[10px] md:px-[40px] px-1">
              <Input
                topic={"پیام شما"}
                className="rounded-[20px] min-h-[120px] max-h-[120px] pt-5 dark:bg-mode-900"
                placeHolder={"...متن پیام"}
                type={"text"}
                name={"describe"}
                as={"textarea"}
              />
            </div>
            <Button
              className="bg-[#fcbf49] dark:bg-DarkPallete-100 hover:bg-[#c89c44] text-[#fff]"
              type={"submit"}
              children={"ثبت"}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { AddComment };
