import React from "react";
import { motion } from "framer-motion";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

const Identify = () => {
  return (
    <motion.div
      className={`font-irSBold text-center text-2xl relative`}
           initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      waiting for api ...
      <NavLinks
        className={" font-irSans text-[#ccc]"}
        Children={"click here to return"}
        path={"/forget"}
      />
    </motion.div>
  );
};

export { Identify };
