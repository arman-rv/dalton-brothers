import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavLinks } from "../../../../Common/Links/NavLinks/NavLinks";
import logo from "../../../../../assets/Images/logo.png";
import DarkModeLogo from "../../../../../assets/Images/mode-logo.png";

import style from "../../header.module.css";
import useColorMode from "../../../../CustomHooks/UseColorMode";

import darkModeImg from "../../../../../assets/Images/darkMode.png";
import lightModeImg from "../../../../../assets/Images/darkMode.png";

import NightModeBtn from "../../../../../assets/Images/darkMode.png";
import LightModeBtn from "../../../../../assets/Images/lightMode.png";
import { getItem } from "../../../../../Core/Services/common/storage.services";
import { useNavigate } from "react-router";

const HeaderNavbar = () => {
  const token = useSelector((state) => state.token.token);
  const [colorMode, setColorMode] = useColorMode();
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/panel");
  };

  return (
    <div className="lg:flex-nowrap 2xl:justify-around xl:justify-start lg:items-center md:justify-around 2xl:gap-[30px] md:items-end sm:justify-start sm:mt-0 sm:gap-0 gap-5 mt-[20px] justify-center flex-row-reverse pt-[10px] px-[20px] flex flex-wrap font-irSBold">
      <div className="lg:order-3 lg:mx-0 !mx-[20px] w-[70px]  order-2">
        <img alt="" src={colorMode === "dark" ? DarkModeLogo : logo} />
      </div>
      <div className="xl:gap-5 lg:w-fit lg:px-0 lg:gap-0 px-[20px] md:w-[650px] gap-5 flex justify-between items-center ">
        <button
          onClick={() => {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }}
          className="w-16 h-10 flex justify-center items-center   mt-[2px]  "
        >
          <img
            alt=""
            src={colorMode === "dark" ? NightModeBtn : LightModeBtn}
            className=""
          />
        </button>
        <div className="xl:w-[165px] lg:order-1 md:justify-center md:m-[5px] md:px-0 w-[150px] whitespace-nowrap flex flex-row-reverse flex-wrap justify-between items-center p-0 m-0  order-3">
          {token ? (
            <NavLinks
              Children={"ورود به پنل"}
              className=" text-[#707070] 2xl:w-[165px] hover:bg-[#ffefc8] dark:hover:bg-DarkPallete-50 hover:cursor-pointer transition-all duration-500 max-[500px]:w-[150px] w-[100px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[15px] "
              path={"/panel"}
            />
          ) : (
            <NavLinks
              Children={"ورود/ثبت نام"}
              className=" text-[#707070] 2xl:w-[165px] hover:bg-[#ffefc8] dark:hover:bg-DarkPallete-50  hover:cursor-pointer transition-all duration-500 max-[500px]:w-[150px] w-[100px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[15px] "
              path={"/signIn"}
            />
          )}
        </div>
      </div>
      <div className=" xl:w-[70vw] xl:justify-center lg:order-2 lg:justify-between md:gap-[30px] md:mt-[10px] md:w-full md:flex justify-center flex-row hidden">
        <div className="2xl:justify-around 2xl:gap-[40px] xl:w-[70%] xl:text-xl xl:gap-[10px] lg:text-lg flex flex-row flex-nowrap items-center justify-center gap-[10px] dark:text-mode-50  text-[#fdb501] text-base ">
          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"پشتیبانی"} path={"/"} />
          <NavLinks Children={"اساتید"} path={"/"} />
          <NavLinks Children={"دسته بندی"} path={"/"} />
        </div>
        <div className="2xl:justify-center 2xl:gap-[40px] xl:w-[50%] xl:text-xl xl:gap-[10px] lg:text-lg lg:text-mode-100 md:text-[#fdb501] dark:text-mode-100 flex flex-row flex-nowrap items-center justify-center gap-[10px] text-mode-700">
          <NavLinks Children={"ارتباط با ما"} path={"/"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
        </div>
      </div>
      {/* md responsive navbar */}
      <div className="w-[40px] bg-cover bg-center md:hidden order-1 flex">
        <input
          className={`hidden ${style.hamInp}`}
          type="checkbox"
          name=""
          id="hamMenuLayout"
        />
        <label
          className={`w-[40px] h-[40px] absolute top-[30px] right-[10px] cursor-pointer transition-all duration-500 bg-[url('../../../../../src/assets/Images/hamMenu.png')] bg-no-repeat bg-[length:50%] bg-center ${style.hamLabel}`}
          htmlFor="hamMenuLayout"
        ></label>
        <div
          className={` absolute top-0 right-[-200px] rounded-l-[10px] transition-all duration-500 overflow-hidden flex flex-col gap-[10px] text-base text-[#fdb501] dark:text-[#16a34a] text-[12px] ${style.hamContent}`}
        >
          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"دسته بندی"} path={"/"} />
          <NavLinks Children={"پشتیبانی"} path={"/"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
          <NavLinks Children={"اساتید"} path={"/"} />
          <NavLinks Children={"ارتباط با ما"} path={"/"} />
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };
