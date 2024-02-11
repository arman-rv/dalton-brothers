import React from "react";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { Input } from "../../../Common/Inputs/Input";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";
import { Title } from "../../../Common/Title/Title";
import { registerS2 } from "../../../../Core/Services/api/register/register.step2/register.step2";
import { getItem } from "../../../../Core/Services/common/storage.services";
import { registerS2Validation } from "../../../../Core/Validation/yup";
import { registerS1 } from "../../../../Core/Services/api/register/register.step1/register.step1";

const RegisterStep2 = () => {
  const navigate = useNavigate();

  const handleToggle = async (value) => {
    const number = {
      phoneNumber: JSON.parse(getItem("userPhone")),
      verifyCode: value.verifyCode,
    };
    const user = await registerS2(number);
    if (!user.success) {
      toast.error("کد وارد شده صحیح نیست یا منقضی شده است");
      return;
    }
    navigate("/register/step3");
  };
  const sendVerify = async () => {
    const number = {
      phoneNumber: JSON.parse(getItem("userPhone")),
    };
    const user = await registerS1(number);
  };

  return (
    <div
      className={` w-[100%] mt-52 relative flex flex-row justify-center items-center font-irSans`}
    >
      <Formik
        initialValues={{
          verifyCode: "",
        }}
        onSubmit={handleToggle}
        validationSchema={registerS2Validation}
      >
        <Form className=" w-[100%] flex flex-col justify-center items-center  gap-[30px] px-10 rounded-[30px]">
          <Title
            topic={"صفحه ایجاد حساب"}
            style={"leading-3 self-center text-[20px] h-auto "}
          />
          <div className="min-[500px]:w-[90%] w-full h-52 flex items-center flex-col pt-12">
            <Input
              className={"rounded-full dark:bg-mode-900 dark:border-2 dark:focus:border-DarkPallete-100 dark:text-mode-50"}
              placeHolder={"کد ارسال شده را وارد کنید  "}
              type={"text"}
              name={"verifyCode"}
              as={"input"}
            />
            <div className="w-full flex justify-start " onClick={sendVerify}>
              <NavLinks
                Children={" ارسال دوباره رمز "}
                className="text-[#4979fc] font-thin text-[14px] font-irSans p-[0] "
              />
            </div>
          </div>
          <div className="flex flex-row justify-around w-full gap-[20px]">
            <Button
              type={"submit"}
              className={
                "bg-[#fcbf49]  text-mode-50 dark:bg-DarkPallete-100 font-irSans text-[17px] py-[5px]"
              }
              value={"مرحله بعد "}
            />
            <NavLinks
              className={
                " w-[30%] py-[5px] text-[13px] font-irSans text-lg  bg-white dark:bg-mode-900 border-2 border-pallete-100 text-pallete-100 dark:border-DarkPallete-100 dark:text-DarkPallete-100"
              }
              Children={"مرحله قبل"}
              path={"/register"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterStep2 };
