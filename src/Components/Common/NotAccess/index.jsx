import React from "react";
import { motion } from "framer-motion";
import { NavLinks } from "../Links/NavLinks/NavLinks";

import notAccess from "../../../assets/Images/403 page-bg.svg";

const NotAccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-[100-vw] h-[100vh] bg-white flex items-end  flex-col font-irSans ">
        <img
          className="w-[100-vw] h-[100vh] absolute bottom-0 left-0 z-10"
          src={notAccess}
          alt=""
        />

        <div className=" h-28   flex flex-row-reverse flex-nowrap items-center justify-center gap-5 text-mode-700 text-lg z-20 mr-8 ">
          <NavLinks Children={"خانه"} path={"/"} />

          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
        </div>
        <div className="w-1/2 h-60  z-20 mt-40 flex flex-col justify-center  items-end gap-6 text-2xl text-mode-700 pr-14">
          شما امکان دسترسی به این صفحه را ندارید{" "}
          <p className="text-xl text-mode-700 opacity-80">
            برای دسترسی ابتدا ثبت نام کنید
          </p>
          <NavLinks
            className={"bg-pallete-100 text-white text-base mt-7"}
            Children={" ثبت نام"}
            path={"/signIn"}
          />
          <NavLinks
            className={
              "bg-white border border-pallete-100 text-pallete-100 text-base"
            }
            Children={" بازگشت به صفحه اصلی"}
            path={"/"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export { NotAccess };
