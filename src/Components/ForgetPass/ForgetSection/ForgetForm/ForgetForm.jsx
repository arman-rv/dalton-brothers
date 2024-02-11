import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Form, Formik } from "formik";
import * as yup from "yup";

import "aos/dist/aos.css";
import AOS from "aos";

import { Title } from "../../../Common/Title/Title";
import { Input } from "../../../Common/Inputs/Input";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

import logo from "../../../../assets/Images/logo.png";
import darkLogo from "../../../../assets/Images/mode-logo.png";
import { useSelector } from "react-redux";

const ForgetForm = () => {
  const navigate = useNavigate();

  const colorMode = useSelector((state) => state.theme.theme);


  const validation = yup.object().shape({
    email: yup.string().required("این فیلد اجباریست"),
  });
  const handleSubmit = () => {
    navigate("/identify");
  };
  

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);

  return (
    <div>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validation}
        onSubmit={handleSubmit}
        
      >
      
        <Form className={`flex flex-col gap-[35px] items-center relative `}
      data-aos="fade-up"
        
        >
          <div className="w-[75px]">
            <img src={colorMode === "dark" ? darkLogo :  logo} alt="" className="w-full h-full" />
          </div>
          <Title topic={"فراموشی رمز عبور"} style={"text-[#989898] dark:text-mode-50"} />
          <div className="w-[400px]">
            <Input
              topic={"ایمیل"}
              className={"rounded-full w-full border-[#bcbcbc] border-2 dark:focus:border-DarkPallete-100 dark:text-mode-50 dark:bg-mode-900"}
              placeHolder={"...ایمیل خود را وارد کنید"}
              type={"text"}
              name={"email"}
              as={"input"}
            />
          </div>
          <Button
            type={"submit"}
            className={
              "py-[7px] px-[60px] bg-[#fcbf49] font-irSans text-[13px] text-mode-50 dark:bg-DarkPallete-100"
            }
            value={"مرحله بعد"}
            onClick={() => navigate("/forget")}
          />
          <NavLinks
            className="font-irSans text-[13px] text-[#989898] mt-[-20px] dark:text-mode-100"
            Children={"بازگشت"}
            path={"/signIn"}
          />
        </Form>
      </Formik>
    </div>
  );
};

export { ForgetForm };
