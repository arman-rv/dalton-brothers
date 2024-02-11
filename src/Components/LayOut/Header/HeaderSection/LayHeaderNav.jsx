import React from "react";
import { useSelector } from "react-redux";

import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

import logo from "../../../../assets/Images/layOut-logo.png";
import modeLogo from "../../../../assets/Images/layOut-logo-mode.png";
import sun from "../../../../assets/Images/sun.png";
import NightModeBtn from "../../../../assets/Images/darkMode.png";
import LightModeBtn from "../../../../assets/Images/lightMode.png";

import style from "../../layOut.module.css";
import useColorMode from "../../../CustomHooks/UseColorMode";

const LayHeaderNav = () => {
  const token = useSelector((state) => state.token.token);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div
      className={colorMode === "dark" ? style.darkHeaderBox1 : style.headerBox1}
    >
      {/* logo */}
      <div className="w-16 h-18">
        <img
          className="xl:order-1 w-full h-full"
          src={colorMode === "dark" ? modeLogo : logo}
          alt=""
        />
      </div>
      <div className="lg:w-fit lg:gap-[30px] lg:order-2 md:justify-center md:mt-[30px] md:w-[100%] md:flex hidden flex-row-reverse flex-wrap justify-center gap-[75px] items-center font-irSans text-xl text-gray-500">
        {/* items */}
        <NavLinks
          className={"dark:text-mode-50"}
          Children={"خانه"}
          path={"/"}
        />
        <NavLinks
          className={"dark:text-mode-50"}
          Children={"دوره ها"}
          path={"/course"}
        />
        <NavLinks
          className={"dark:text-mode-50"}
          Children={"اخبار و مقالات"}
          path={"/news"}
        />
        <NavLinks
          className={"dark:text-mode-50"}
          Children={"ارتباط با ما"}
          path={"/"}
        />
      </div>
      {/* md responsive navbar */}
      <div className="w-[100px] bg-cover bg-center md:hidden order-1 flex">
        <input
          className={`hidden ${style.hamInp}`}
          type="checkbox"
          name=""
          id="hamMenu"
        />
        <label
          className={`w-[40px] h-[40px] absolute top-[30px] right-[10px] cursor-pointer transition-all duration-500 bg-[url('../../../../../src/assets/Images/hamMenu.png')] bg-no-repeat bg-[length:50%] bg-center ${style.hamLabel}`}
          htmlFor="hamMenu"
        ></label>
        <div
          className={`h-[100%] absolute top-0 right-[-200px] rounded-l-[10px] transition-all duration-500 overflow-hidden flex flex-col gap-[10px] text-base dark:text-[#16a34a] text-[#fdb501] text-[12px] ${style.hamContent}`}
        >
          <NavLinks Children={"خانه"} path={"/"} />
          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"اخبار و مقالات"} path={"/news"} />
          <NavLinks Children={"ارتباط با ما"} path={"/"} />
        </div>
      </div>
      {/* dark mode*/}

      {/* button for sign in or enter */}
      <div className=" 2xl:ml-0 xl:order-4 xl:ml-[20px] xl: mr-0 w-[400px] flex justify-center items-center gap-4 flex-row-reverse">
        <div className=" flex justify-center items-center ">
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
        </div>
        {!token ? (
          <div className=" 2xl:ml-0 xl:order-4 xl:ml-[20px] xl: mr-0 bg-zinc-100  w-[300px] p-2 flex flex-row-reverse  rounded-full relative font-irSBold text-slate-600">
            <NavLinks
              path={"/register"}
              className="bg-[#fff] w-[150px] h-11 text-center py-[12px] shadow-ri shadow-slate-400 rounded-full absolute left-[12px] top-[10px]"
              Children={"ثبت نام"}
            />
            <NavLinks
              path={"/signIn"}
              className="bg-pallete-100 dark:bg-DarkPallete-100 dark:text-mode-50 w-[150px] h-12 text-center py-[12px]  rounded-full"
              Children={"ورود"}
            />
          </div>
        ) : (
          <NavLinks
            Children={"ورود به پنل"}
            className=" text-mode-700 whitespace-nowrap hover:bg-[#ffefc8] dark:hover:bg-DarkPallete-50  hover:cursor-pointer transition-all duration-500 max-[500px]:w-[100px] w-[100px] h-[40px] bg-mode-100 rounded-full flex justify-center items-center text-[15px]"
            path={"/panel"}
          />
        )}
      </div>
    </div>
  );
};

export { LayHeaderNav };
