import React, { useState } from "react";

import { FooterDesc } from "../../LayOut/Footer/FooterSection/Footer-desc";

import logo from "../../../assets/Images/namad.png";
import rezi from "../../../assets/Images/rezi.png";
import kasbokar from "../../../assets/Images/kasbokar.png";
import mapFooter from "../../../assets/Images/mapFooter.svg";
import mapFooterMode from "../../../assets/Images/mapFooterMode.svg";
import { useSelector } from "react-redux";
import { MapModal } from "./MapModal";

const LandingFooter = () => {
  const colorMode = useSelector((state) => state.theme.theme);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    // 2xl:h-[800px]
    <div
      className={` xl:bg-[url('../../../../src/assets/Images/landing-footer.svg')] dark:xl:bg-[url('../../../../src/assets/Images/landing-footer-mode.svg')] xl:bg-no-repeat max-xl:flex-col-reverse  xl:h-[600px] xl:bg-[length:100vw] xl:bg-bottom xl:bg-transparent xl:items-end  md:items-center flex flex-row-reverse justify-between flex-nowrap items-start w-[100%] h-fit dark:bg-DarkPallete-100 bg-[#fcbf49] max-md:items-center  `}
    >
      <div className=" flex justify-center items-center flex-row-reverse gap-8 mt-[30px] px-[20px] max-xl:items-center max-xl:flex max-xl:flex-col xl:mr-8">
        <FooterDesc className={"gap-8"} />
        <div className="xl:flex-col xl:w-[100px] sm:w-[440px] w-[300px] flex-row flex h-[300px] mb-[30px]">
          <div className="w-[full]">
            <img src={logo} alt="" />
          </div>
          <div className="w-[full]">
            <img src={rezi} alt="" />
          </div>
          <div className="w-[full]">
            <img src={kasbokar} alt="" />
          </div>
        </div>
      </div>

      <div className="w-[550px] h-[650px] max-xl:w-full max-xl:h-[700px] max-xl:bg-mode-900 flex justify-center items-center xl:ml-16 cursor-pointer " onClick={openModal}>
        <img
          className="w-[550px] h-[650px] "
          src={colorMode === "dark" ? mapFooterMode : mapFooter}
          alt=""
        />
      </div>
      <MapModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </div>
  );
};

export { LandingFooter };
