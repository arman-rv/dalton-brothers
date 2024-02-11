import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Input } from "../../../Common/Inputs/Input";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";
import { Title } from "../../../Common/Title/Title";
import { registerS1 } from "../../../../Core/Services/api/register/register.step1/register.step1";
import { setItem } from "../../../../Core/Services/common/storage.services";
import { registerS1Validation } from "../../../../Core/Validation/yup";

const RegisterStep1 = () => {
  const navigate = useNavigate();

  const handleToggle = async (value) => {
    const number = {
      phoneNumber: value.loginPhoneNumber,
    };
    setItem("userPhone", number.phoneNumber);
    const user = await registerS1(number);

    navigate("/register/step2");
    toast.success(" رمز برای شما ارسال شد ");
    // //console.log(user);
  };

  return (
    <div
      className={` w-[100%] mt-52 relative flex flex-row justify-center items-center font-irSans`}
    >
      <Formik
        initialValues={{
          loginPhoneNumber: "",
        }}
        onSubmit={handleToggle}
        validationSchema={registerS1Validation}
      >
        <Form className=" w-[100%] flex flex-col justify-center items-center  gap-[30px] px-10 rounded-[30px] ">
          <Title
            topic={"صفحه ایجاد حساب"}
            style={"leading-3 self-center text-[20px] h-auto dark:text-mode-50"}
          />
          <div className="min-[500px]:w-[90%] w-full h-52 flex items-center ">
            <Input
              topic={"شماره تلفن"}
              className={
                "rounded-full dark:bg-mode-900 dark:border-2 dark:focus:border-DarkPallete-100 dark:text-mode-50"
              }
              placeHolder={"... شماره ی خود را وارد کنید"}
              type={"text"}
              name={"loginPhoneNumber"}
              as={"input"}
            />
          </div>

          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              className={
                "bg-[#fcbf49] text-mode-50 dark:bg-DarkPallete-100 font-irSans text-[17px] py-[5px] "
              }
              value={" ارسال رمز "}
            />
            <NavLinks
              className={
                " w-[30%] py-[5px] text-[13px] font-irSans text-lg   bg-white dark:bg-mode-900 border-2 border-pallete-100 text-pallete-100 dark:border-DarkPallete-100 dark:text-DarkPallete-100 "
              }
              Children={"خانه"}
              path={"/"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterStep1 };
