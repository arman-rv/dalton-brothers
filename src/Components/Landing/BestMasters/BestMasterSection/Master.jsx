import React, { useState } from "react";

import style from "../BestMaster.module.css";

import masterImage from "../../../../assets/Images/master-image.svg"

const Master = ({ fullName,pictureAddress,teacherName }) => {

// console.log(pictureAddress);

  return (
    <div className="lg:h-[380px] lg:gap-0 flex flex-col gap-[20px] items-center">
      <div className={`lg:w-[250px] ${style.master}`}>
          <img src={ pictureAddress !== null ? pictureAddress :  masterImage  } alt="" className="w-[90%]  rounded-full "/>
      </div>
      <h1 className="lg:mt-[0px] font-irSBold text-mode-800 dark:text-mode-50 text-xl mt-[30px]">
        {   fullName !== null ? fullName : "نام مدرس"     }
      </h1>
      <h1 className="font-irSans text-mode-700 dark:text-mode-200 dark:opacity-60 text-l mt-4">مدرس</h1>
    </div>
  );
};

export default Master;
