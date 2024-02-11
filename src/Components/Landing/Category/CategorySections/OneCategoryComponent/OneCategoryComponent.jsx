import React from "react";

const OneCategoryComponent = ({ imgPath, title }) => {
  return (
    <div className="2xl:flex-1 sm:w-[25%] bg-mode-50 dark:bg-mode-800 flex flex-col flex-grow items-center justify-center  py-6 gap-5 rounded-3xl">
      <picture className=" w-[100px] h-[100px] flex items-center ">
        <img src={imgPath} alt="" className="w-[70px] m-auto" />
      </picture>
      <h1 className="font-irSans text-[#3c3c3c] rounded-full flex justify-between items-center dark:text-mode-50 ">
        {title}
      </h1>
    </div>
  );
};

export { OneCategoryComponent };
