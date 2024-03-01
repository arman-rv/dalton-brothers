import React from "react";
import { CommentPlace } from "../../Common/Comment/index";

import illustration from "../../../assets/Images/landingFooter-illustration.svg";
import darkModeIllustration from "../../../assets/Images/landing-ilis-mode.svg";
import { useSelector } from "react-redux";
const LandingComment = () => {
  const colorMode = useSelector((state) => state.theme.theme);

  return (
    <div className="w-[85%] h-[500px] m-auto mt-[100px] mb-14">
      <div className="mr-3 text-2xl mb-[10px] text-center font-irSans text-pallete-100 dark:text-DarkPallete-100 dark:font-semibold">
        پیشنهادات و انتقادات
      </div>
      <div className="flex flex-row-reverse justify-center items-center pt-11">
        <div className="w-[500px] h-full 2xl:mb-16">
          <CommentPlace />
        </div>
        <picture className="w-[40%] xl:flex justify-center items-center hidden">
          <img src={colorMode === "dark" ? darkModeIllustration : illustration} alt="" className="w-[80%] 	" />
        </picture>
      </div>
    </div>
  );
};

export default LandingComment;
