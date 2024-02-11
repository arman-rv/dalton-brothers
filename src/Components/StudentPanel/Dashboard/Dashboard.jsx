import React from "react";
import { motion } from "framer-motion";
import { Profile } from "./Components/Profile/Profile";
import { PanelNavigation } from "./Components/PanelNavigation/PanelNavigation";
import { PanelSearch } from "./Components/PanelSearch/PanelSearch";
import { Specification } from "./Components/Specification/Specification";
import { YourStock } from "./Components/YourStock/YourStock";
import { Notification } from "./Components/Notification/Notification";

// import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";

import { CustomSlider } from "../../Common/CustomSlider/CustomSlider";

const Dashboard = () => {
  return (
    <div className=" w-full h-full flex-col mt-10  ">
      <div className="flex justify-evenly max-2xl:flex-col-reverse max-2xl:justify-center max-2xl:items-center  max-2xl:gap-[100px] max-2xl:mt-[50px] max-2xl:mb-[50px]   w-full max-lg:items-center  gap-8  ">
        <div className="   lg:w-[350px] w-[400px] xl:h-[250px] lg:h-[250px] h-[200px] ">
          <YourStock />
        </div>
        <div className=" 2xl:w-[780px] lg:w-[750px] max-sm:w-full   xl:justify-start   xl:h-[250px] lg:h-[250px] ">
          <Specification />
        </div>
      </div>
      <div className="flex flex-row-reverse  w-full mt-5 max-2xl:flex-col max-2xl:items-center   ">
        {/* h-[430px] */}
        <p className="w-1/3 whitespace-nowrap text-right text-xl font-irSans pt-5 pr-5 dark:text-mode-50">
          علاقه مندی ها
        </p>
        <div className="flex justify-center items-center mt-[70px]">
          <div className="2xl:w-[1000px] lg:w-[1000px] max-sm:w-full scale-7">
            <CustomSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
