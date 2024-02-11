import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { SignInForm } from "./SignInSection/SignInForm";

const SignIn = () => {


  return (
    <motion.div
      dir="ltr"
      className={`xl:bg-[url('../../../src/assets/Images/signIn-bg.svg')] xl:dark:bg-[url('../../../src/assets/Images/darkSignIn.svg')]     xl:justify-start md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <SignInForm />
    </motion.div>
  );
};

export { SignIn };
