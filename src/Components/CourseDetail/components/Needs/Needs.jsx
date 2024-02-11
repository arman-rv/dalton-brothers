import React from "react";

import { IconCheck,IconPlus } from '@tabler/icons-react';

const Needs = () => {
  return (
    <div className=" w-full flex flex-col px-[40px]">
      <div className=" w-full h-[100px] text-center font-irSBold text-2xl py-[25px] dark:text-DarkPallete-100 ">
        {" "}
        پیش نیاز ها{" "}
      </div>
      <div className="w-full md:flex md:justify-between max-md:items-center items-center max-md:justify-start  ">
        <div className=" flex flex-col gap-5 text-gray-900 text-lg font-irSans  md:text-right text-center md:w-1/2  py-5 ">
          <h5 className="text-xl dark:text-mode-200"> لازم نیست </h5>
          <div className="flex md:justify-end justify-center">
          <p className="text-gray-600 dark:text-mode-300"> پیش زمینه برنامه نویسی داشته باشید  </p>
            <div className="  w-9 h-9 ml-1">
              <IconPlus strokeWidth="1.5" className="w-full h-full rotate-45 text-gray-400 scale-125 dark:text-DarkPallete-100"/>
            </div>
          </div>
          <div className="flex md:justify-end justify-center">
          <p className="text-gray-600 dark:text-mode-300"> پیش زمینه برنامه نویسی داشته باشید  </p>
            <div className="  w-9 h-9 ml-1">
              <IconPlus strokeWidth="1.5" className="w-full h-full rotate-45 text-gray-400 scale-125 dark:text-DarkPallete-100"/>
            </div>
          </div>
          <div className="flex md:justify-end justify-center">
          <p className="text-gray-600 dark:text-mode-300"> پیش زمینه برنامه نویسی داشته باشید  </p>
            <div className="  w-9 h-9 ml-1">
              <IconPlus strokeWidth="1.5" className="w-full h-full rotate-45 text-gray-400 scale-125 dark:text-DarkPallete-100"/>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-5 text-gray-900 text-lg font-irSans md:text-right text-center md:w-1/2  py-5">
          <h5 className="text-xl dark:text-mode-200"> لازم است </h5>
          <div className="flex  md:justify-end justify-center">
          <p className="text-gray-600 dark:text-mode-300"> علاقه و پشت کار داشته باشید  </p>
            <div className="  w-8 h-8 ml-1">
              <IconCheck className="w-full h-full text-gray-400 dark:text-DarkPallete-100"/>
            </div>
          </div>
          <div className="flex md:justify-end justify-center">
          <p className="text-gray-600 dark:text-mode-300"> علاقه و پشت کار داشته باشید  </p>
            <div className="  w-8 h-8 ml-1">
              <IconCheck className="w-full h-full text-gray-400 dark:text-DarkPallete-100 "/>
            </div>
          </div>
          <div className="flex md:justify-end justify-center">
          <p className=" text-gray-600 dark:text-mode-300"> علاقه و پشت کار داشته باشید  </p>
            <div className="  w-8 h-8 ml-1">
              <IconCheck className="w-full h-full text-gray-400 dark:text-DarkPallete-100"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Needs };
