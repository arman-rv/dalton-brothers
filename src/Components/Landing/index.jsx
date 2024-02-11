import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";
import { CourseList } from "./Course/index.jsx";
import { BestMasters } from "./BestMasters/BestMasters.jsx";
import { ArticleNews } from "./Article & News/index.jsx";
import { Category } from "./Category/Category.jsx";
import LandingComment from "./Comment/index.jsx";
import { LandingFooter } from "./Footer/LandingFooter.jsx";

import style from "./Landing.module.css";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop.jsx";

import "aos/dist/aos.css";
import AOS from "aos";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);

  return (
    <motion.div
      className={style.landingContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ScrollToTop />
      <Header />
      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-up">
        <Category />
      </div>
      <div data-aos="fade-up" data-offset="800">
        <CourseList />
      </div>
      <div data-aos="fade-up" data-offset="1200">
        <ArticleNews />
      </div>
      <div data-aos="fade-up" data-offset="1200" data-duration="5000">
        <BestMasters />
      </div>
      <div data-aos="fade-up"  data-offset="1200">
        <LandingComment />{" "}
      </div>
      <LandingFooter />
    </motion.div>
  );
};

export { Landing };
