import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
const LayoutRegister = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);

  return (
    <div
      className={`2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[80%] w-[100%] relative flex flex-row justify-center items-center font-irSans`}
      data-aos="fade-up"

    >
        <Outlet/>
    </div>
  );
};

export { LayoutRegister };