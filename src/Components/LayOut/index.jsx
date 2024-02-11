import { React, createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import { LayHeader } from "./Header";
import LayFooter from "./Footer";
import { courseData } from "../../Core/Services/data";

import style from "./layOut.module.css";
import useColorMode from "../CustomHooks/UseColorMode";

export const SortContext = createContext();

export const useAppContext = () => useContext(SortContext);

const Layout = () => {

  const colorMode = useSelector((state) => state.theme.theme);

  const search = useSelector((state) => state.search.search);
  const sort = useSelector((state) => state.sort.sort);
  const masterFilter = useSelector((state) => state.masterFilter);
  const courseFilter = useSelector((state) => state.courseFilter);
  const minPrice = useSelector((state) => state.priceFilter.minPrice);
  const maxPrice = useSelector((state) => state.priceFilter.maxPrice);

  const searchData = courseData.filter((e) => {
    return (
      e.courseName.indexOf(search) != -1 || e.courseMaster.indexOf(search) != -1
    );
  });

  const sortedData = searchData.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "view") return b.view - a.view;
    if (sort === "like") return b.like - a.like;
    if (sort === "addTime") return a.addTime - b.addTime;
  });

  const filteredData = sortedData.filter((el) => {
    return (
      (el.courseMaster == masterFilter.bah ||
        el.courseMaster == masterFilter.naz ||
        el.courseMaster == masterFilter.asg ||
        el.courseMaster == masterFilter.esf ||
        masterFilter.masterElse) &&
      minPrice <= el.price &&
      el.price <= maxPrice &&
      (el.courseName == courseFilter.python ||
        el.courseName == courseFilter.react ||
        el.courseName == courseFilter.design ||
        el.courseName == courseFilter.main ||
        courseFilter.courseElse)
    );
  });

  return (
    <SortContext.Provider
      value={{
        sortedData,
        filteredData,
      }}
    >
      <motion.div
        className={style.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className="flex flex-col gap-[40px] items-center mb-[30px] ">
          <LayHeader
            course={"دوره ها"}
            news={"اخبار و مقالات"}
            detailCourse={" جزییات دوره "}
          />
        </header>
        <Outlet />
        <footer className={`${ colorMode==="dark" ? style.darkModeFooter:   style.footer}`}>
          <LayFooter />
        </footer>
      </motion.div>
    </SortContext.Provider>
  );
};

export { Layout };
