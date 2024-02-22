import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Identify } from "./ForgetSection/Identify/Identify";
import { ForgetForm } from "./ForgetSection/ForgetForm/ForgetForm";

import { useSelector } from "react-redux";
import forgetPassLight from '../../../src/assets/Images/registerB.svg'
import forgetPassDark from '../../../src/assets/Images/dark-forget.svg'

const ForgetPass = () => {
  const colorMode = useSelector((state) => state.theme.theme);
  return (
    <motion.div
      className={`w-100% max-w-[2000px] h-[950px] m-auto flex  relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        style={
          colorMode === "dark"
            ? {
                backgroundImage: `url(${forgetPassDark})`,
              }
            : {
                backgroundImage: `url(${forgetPassLight})`,
              }
        }
        dir="ltr"
        className={`max-xl:!bg-[url('')] md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100%] pt-[100px]  flex flex-nowrap items-start`}
      >
        <ForgetForm />
      </div>
    </motion.div>
  );
};

export { ForgetPass };
