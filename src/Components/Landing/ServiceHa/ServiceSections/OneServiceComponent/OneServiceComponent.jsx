import React from "react";
import useColorMode from "../../../../CustomHooks/UseColorMode";
import { useSelector } from "react-redux";

const OneServiceComponent = ({ imgPath, title, darkModeImgPath }) => {
  const colorMode = useSelector((state) => state.theme.theme);

  //console.log(colorMode);

  return (
    <div className="basis-64 flex flex-col items-center justify-center px-3 py-6 gap-10 rounded-lg text-[#333333] opacity-70 w-[100%]">
      <picture className="w-32 h-32 ">
        <img src={imgPath} alt="" />
      </picture>
      <h1 className="text-xl dark:text-mode-50">{title}</h1>
    </div>
  );
};

export { OneServiceComponent };
