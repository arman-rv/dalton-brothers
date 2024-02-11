import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import { Button } from "../../Common/buttons";
import { Input } from "../Inputs/Input";

const CommentPlace = () => {
  // validation................................
  const validation = yup.object().shape({
    name: yup.string().required("این فیلد اجباریست"),
    comment: yup.string().required("این فیلد اجباریست"),
  });

  const onSubmit = (values) => {
    const obj = {
      name: values.name,
      comment: values.comment,
    };
  };

  return (
    <>
      <h1 className="text-center my-4 font-irSans text-slate-800 dark:text-mode-50 text-lg whitespace-nowrap">
        ارتباط با ما
      </h1>
      <Formik
        initialValues={{
          name: "",
          comment: "",
        }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={validation}
      >
        <Form className=" flex w-full flex-col items-center font-irSans">
          <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px] dark:bg-mode-900">
            <Input
              topic={"نام کاربر"}
              className="rounded-[20px] dark:bg-mode-900 dark:text-mode-50 "
              placeHolder={"...نام کاربری"}
              type={"text"}
              name={"name"}
              as={"input"}
            />
          </div>
          <div className="flex flex-col w-full relative sm:w-3/4 lg:w-full mb-[10px] px-[40px]">
            <Input
              topic={"پیام شما"}
              className="rounded-[20px] min-h-[120px] max-h-[120px] pt-5 dark:bg-mode-900 dark:text-mode-50"
              placeHolder={"...متن پیام"}
              type={"text"}
              name={"comment"}
              as={"textarea"}
            />
          </div>
          <Button
            className="bg-pallete-100 dark:bg-DarkPallete-100 hover:bg-[#c89c44] text-[#fff]"
            type={"submit"}
            children={"ثبت"}
          />
        </Form>
      </Formik>
    </>
  );
};

export { CommentPlace };
