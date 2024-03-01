import { useSelector } from "react-redux";
import registerSvgLight from "../../../src/assets/Images/register-bg.svg"
import registerSvgDark from "../../../src/assets/Images/darkRigester.svg"

import { motion } from "framer-motion";
import { LayoutRegister } from "./RegisterSection/LayoutRegister/LayoutRegister";

const Register = () => {
  const colorMode = useSelector((state) => state.theme.theme);

  return (
    <motion.div
      style={
        colorMode === "dark"
          ? {
              backgroundImage: `url(${registerSvgDark})`,
            }
          : {
              backgroundImage: `url(${registerSvgLight})`,
            }
      }
      dir="ltr"
      className={`max-xl:!bg-[url('')] xl:justify-end md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LayoutRegister />
    </motion.div>
  );
};

export { Register };
