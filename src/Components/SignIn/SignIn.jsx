import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { SignInForm } from "./SignInSection/SignInForm";

import { useSelector } from "react-redux";
import logInSvgLight from "../../../src/assets/Images/signIn-bg.svg";
import logInSvgDark from "../../../src/assets/Images/darkSignIn.svg";

const SignIn = () => {
  const colorMode = useSelector((state) => state.theme.theme);

  return (
    <motion.div
      style={
        colorMode === "dark"
          ? {
              backgroundImage: `url(${logInSvgDark})`,
            }
          : {
              backgroundImage: `url(${logInSvgLight})`,
            }
      }
      dir="ltr"
      className={`max-xl:!bg-[url('')] xl:justify-start md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SignInForm />
    </motion.div>
  );
};

export { SignIn };
