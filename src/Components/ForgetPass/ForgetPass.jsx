import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Identify } from "./ForgetSection/Identify/Identify";
import { ForgetForm } from "./ForgetSection/ForgetForm/ForgetForm";

const ForgetPass = () => {
  return (
    <motion.div
      className={`w-100% max-w-[2000px] h-[950px] m-auto flex  relative overflow-hidden`}
           initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        dir="ltr"
        className={`xl:bg-[url('../../../src/assets/Images/registerB.svg')] dark:xl:bg-[url('../../../src/assets/Images/dark-forget.svg')] md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100%] pt-[100px]  flex flex-nowrap items-start`}
      >
        <ForgetForm />
      </div>
    </motion.div>
  );
};

export { ForgetPass };
