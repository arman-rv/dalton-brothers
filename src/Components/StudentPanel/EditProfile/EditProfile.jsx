import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "../../Common/buttons";
import { editUSerProfile } from "../../../Core/Services/api/studentPanel/updateProfileInfo/editProfile";
import { editProfileValidation } from "../../../Core/Validation/yup";

import defaultImg from "../../../assets/Images/register-person.png";
import defaulDarktImg from "../../../assets/Images/register-person DarkMode.png";
import { PanelInps } from "../../Common/Inputs/PanelInputs";
import { useSelector } from "react-redux";
import { addPic } from "../../../Core/Services/api/studentPanel/addImg";
import DatePicker from "react-multi-date-picker";
import parsi from "react-date-object/locales/gregorian_fa";
import size from "react-element-popper/animations/size";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";
const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/colors/yellow.css";
import "react-multi-date-picker/styles/colors/teal.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import DatePickerHeader from "react-multi-date-picker/plugins/date_picker_header";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
const EditProfile = () => {
  const [personImg, setPersonImg] = useState();
  const [date, setDate] = useState("2011/11/11");
  const colorMode = useSelector((state) => state.theme.theme);

  const defaultPicture = colorMode === "dark" ? defaulDarktImg : defaultImg;

  const handleDate = (e) => {
    const all = e.toDate();
    const year = all.getFullYear();
    const month = all.getMonth();
    const day = all.getDate();
    const final = year + "/" + month + "/" + day;
    //console.log(final);
    setDate(final);
  };

  const onSubmit = async (values) => {
    //console.log("triggered");
    var userNewObj = new FormData();
    userNewObj.append("LName", values.LName);
    userNewObj.append("FName", values.FName);
    userNewObj.append("UserAbout", values.UserAbout);
    userNewObj.append("LinkdinProfile", "https://linkedin.com");
    userNewObj.append("TelegramLink", "https://t.me");
    userNewObj.append("ReceiveMessageEvent", values.ReceiveMessageEvent);
    userNewObj.append("HomeAdderess", values.HomeAdderess);
    userNewObj.append("NationalCode", values.NationalCode);
    userNewObj.append("Gender", values.Gender);
    userNewObj.append("BirthDay", date);
    userNewObj.append("Latitude", "0");
    userNewObj.append("Longitude", "53.05821549859579");

    const user = await editUSerProfile(userNewObj);

    var formdata = new FormData();
    formdata.append("formFile", personImg);

    const newImg = await addPic(formdata);
  };
  const rightArrayInps = [
    {
      title: "نام خانوادگی",
      name: "LName",
      placeholder: "...نام خانوادگی",
    },
    {
      title: "بیوگرافی",
      name: "UserAbout",
      placeholder: "...بیوگرافی",
    },
    {
      title: "ادرس",
      name: "HomeAdderess",
      placeholder: "              ...ادرس",
    },
  ];
  const leftArrayInps = [
    {
      title: "نام",
      name: "FName",
      placeholder: "...نام ",
    },
    {
      title: "شماره ملی",
      name: "NationalCode",
      placeholder: "...شماره ملی",
    },
  ];
  return (
    <Formik
      initialValues={{
        Gender: true,
        ReceiveMessageEvent: false,
        FName: "",
        LName: "",
        NationalCode: "",
        TelegramLink: "",
        HomeAdderess: "",
        UserAbout: "",
        LinkdinProfile: "",
        BirthDay: "",
      }}
      onSubmit={onSubmit}
      validationSchema={editProfileValidation}
    >
      <Form className=" w-[900px] max-lg:w-auto   flex flex-col  font-irSans">
        <div className="rounded-full cursor-pointer   self-center max-xl:self-end max-xl:mr-40 max-lg:self-center max-lg:mr-0  mb-5">
          <label htmlFor="pic2" className="cursor-pointer">
            <img
              src={personImg ? URL.createObjectURL(personImg) : defaultPicture}
              alt=""
              className="w-[150px]"
            />
          </label>
          <input
            className="hidden"
            type="file"
            id="pic2"
            onChange={(e) => setPersonImg(e.target.files[0])}
          />
        </div>
        <div className="flex flex-wrap max-xl:flex-col max-xl:items-end max-lg:items-center">
          <div className="  w-1/2 max-lg:w-full flex flex-col justify-start   ">
            {rightArrayInps.map((el, index) => (
              <PanelInps {...el} key={index} />
            ))}
            <div className="flex flex-col w-full relative   lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%] dark:bg-mode-900 dark:text-mode-50  peer-focus:right-[65%]  whitespace-nowrap bg-white absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                اطلاع رویداد ها
              </span>
              <Field
                as="select"
                name="ReceiveMessageEvent"
                className=" w-[85%] dark:bg-mode-900 dark:text-mode-50 m-auto text-right bg-white text-[#9ca3af] h-[50px] rounded-full outline-none border-zinc-300 border-[2px] peer px-5 "
              >
                <option className=" font-irSans" value="true">
                  بله
                </option>
                <option className=" font-irSans" value="false">
                  خیر
                </option>
              </Field>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="ReceiveMessageEvent"
                  component={"div"}
                  className="error text-error-100 text-center"
                />
              </div>
            </div>
          </div>
          <div className="  w-1/2 max-lg:w-full flex flex-col justify-start ">
            {leftArrayInps.map((el, index) => (
              <PanelInps {...el} key={index} />
            ))}
            <div className="flex flex-col items-center w-full relative  lg:w-full mt-[10px] mb-[35px] ">
              <DatePicker
                style={{
                  textAlign: "right",
                  backgroundColor: colorMode === "dark" ? "#27272a" : "white",
                  height: "50px",
                  outlineColor: "none",
                  border: "2px solid #ccc",
                  width: "320px " ,
                  
                  margin: "auto",
                  borderRadius: "1000px",
                  fontSize: "14px",
                  padding: "15px 25px",
                  
                  color: colorMode === "dark" ? "white" : "#a9afba",
                  
                }}
                plugins={[weekends()]}
                className={colorMode === "dark" ? "teal bg-dark" : "yellow"}
                value={date}
                onChange={(date) => {
                  handleDate(date?.isValid ? date : "");
                }}
                format="YYYY/MM/DD"
                weekDays={weekDays}
                locale={parsi}
                maxDate={new Date()}
                minDate={"1923/01/01"}
                animations={[
                  transition({
                    from: 10,
                    transition:
                      "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                  }),
                  opacity({ from: 0.1, to: 1, duration: 1000 }),
                ]}
              />
            </div>
            <div className="flex flex-col w-full relative  lg:w-full mt-[10px]  px-[40px]">
              <span className="mx-[20%]  peer-focus:right-[65%]  whitespace-nowrap bg-white dark:bg-mode-900 dark:text-mode-50 absolute right-5 px-2 w-fit -top-4 transition-all duration-1000 text-[#595959]">
                جنسیت
              </span>
              <Field
                as="select"
                name="Gender"
                className="bg-white w-[85%] m-auto text-right h-[50px] dark:bg-mode-900 dark:text-mode-50 text-[#9ca3af] rounded-full outline-none border-zinc-300 border-[2px] peer px-5"
              >
                <option value="true">مرد</option>
                <option value="false">زن</option>
              </Field>
              <div className="w-full h-10 flex justify-center items-center">
                <ErrorMessage
                  name="Gender"
                  component={"div"}
                  className="error text-error-100 text-center"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          value={"ثبت تغیرات"}
          className={
            "bg-pallete-100 dark:bg-DarkPallete-100 text-mode-50 w-[50%] mt-5 m-auto z-30"
          }
          type={"submit"}
        />
      </Form>
    </Formik>
  );
};

export { EditProfile };
