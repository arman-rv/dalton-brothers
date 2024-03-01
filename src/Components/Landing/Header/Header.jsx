import React, { Fragment, useEffect } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar/HeaderNavbar";
import { HeaderContent } from "./HeaderSections/HeaderContent/HeaderContent";
import HeaderSearch from "./HeaderSections/HeaderSearch/HeaderSearch";

// import styled from "./Header.module.css";

import { useSelector } from "react-redux";
import landingHeaderLight from "../../../../src/assets/Images/landing-header.svg";
import landingHeaderDark from "../../../../src/assets/Images/headerNightBg.svg";
import "aos/dist/aos.css";
import AOS from "aos";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);

  const colorMode = useSelector((state) => state.theme.theme);

  return (
    <div
      style={
        colorMode === "dark"
          ? {
              backgroundImage: `url(${landingHeaderDark})`,
            }
          : {
              backgroundImage: `url(${landingHeaderLight})`,
            }
      }
      dir="rtl"
      className="2xl:h-[1100px] bg-no-repeat bg-[length:90%] bg-[100% 0%] w-[100%] h-fit gap-[50px] flex flex-col justify-between max-lg:!bg-[url('')]"
    >
      <HeaderNavbar />
      <div >
        <HeaderContent />
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <HeaderSearch />
      </div>
    </div>
  );
};

export { Header };
