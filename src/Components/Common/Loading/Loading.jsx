import React from "react";
import { useSelector } from "react-redux";

import loading from "../../../assets/Images/loading.svg";
import darkModeLoading from "../../../assets/Images/modeLoading.svg";
import logo from "../../../assets/Images/logo.png";
import darkModelogo from "../../../assets/Images/mode-logo.png";

const Loading = ({style}) => {
  const colorMode = useSelector((state) => state.theme.theme);

  return (
    <div className={`w-[400px] h-[250px] bg-mode-50 dark:bg-mode-800 m-auto flex gap-6 justify-center flex-col items-center rounded-3xl ${style}`} >
      <div className="w-[70px] h-[70px] ">
        <img src={colorMode === "dark" ? darkModelogo : logo} alt="" />
      </div>
      <div className="w-[90px] h-[80px] ">
        <img src={colorMode === "dark" ? darkModeLoading : loading} alt="" />
      </div>
    </div>
  );
};

export { Loading };
