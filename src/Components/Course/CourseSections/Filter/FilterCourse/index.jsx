import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onPythonChange,
  onSQLChange,
  onReactChange,
  onMainChange,
  onCourseElseChange,
  onnextChange,
  onbackendChange,
  onjavaScriptChange,
} from "../../../../../Redux/Filter/courseFilter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";
import { onlistTechChange } from "../../../../../Redux/listTech";

import style from "../Filter.module.css";

const FilterCourse = ({setlistTech}) => {
  const store = useSelector((state) => state.courseFilter);
  const dispatch = useDispatch();

  // ------------------------------------------------------------ handle filter for python ------------------------------------------------------------
  const handlePython = () => {
    dispatch(onlistTechChange(7))
    if (store.python === "") {
      dispatch(onPythonChange("پایتون"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "پایتون" &&
      store.SQL === "" &&
      store.react === "" &&
      store.javaScript === "" &&
      store.next === "" &&
      store.backend === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }

    dispatch(onPythonChange(""));
  };

  // ------------------------------------------------------------ handle filter for SQL ------------------------------------------------------------
  const handleSQL = () => {
    dispatch(onlistTechChange(8))
    if (store.SQL === "") {
      dispatch(onSQLChange("طراحی سایت"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "طراحی سایت" &&
      store.react === "" &&
      store.javaScript === "" &&
      store.next === "" &&
      store.backend === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onSQLChange(""));
  };

  // ------------------------------------------------------------ handle filter for react ------------------------------------------------------------
  const handleReact = () => {
    dispatch(onlistTechChange(3))
    if (store.react === "") {
      dispatch(onReactChange("ری اکت"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "" &&
      store.react === "ری اکت" &&
      store.javaScript === "" &&
      store.next === "" &&
      store.backend === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onReactChange(""));
  };

  // ------------------------------------------------------------ handle filter for main ------------------------------------------------------------
  const handleMain = () => {
    dispatch(onlistTechChange(2))
    if (store.main === "") {
      dispatch(onMainChange("دوره اصلی"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "" &&
      store.react === "" &&
      store.javaScript === "" &&
      store.next === "" &&
      store.backend === "" &&
      store.main === "دوره اصلی"
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onMainChange(""));
  };
  const handleBackend = () => {
    dispatch(onlistTechChange(6))
    if (store.backend === "") {
      dispatch(onbackendChange("دوره بک اند"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "" &&
      store.react === "" &&
      store.javaScript === "" &&
      store.next === "" &&
      store.backend === "دوره بک اند" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onbackendChange(""));
  };
  const handleJavaScript = () => {
    setlistTech(5)
    if (store.javaScript === "") {
      dispatch(onjavaScriptChange("دوره جاوا اسکریپت"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "" &&
      store.react === "" &&
      store.javaScript === "دوره جاوا اسکریپت" &&
      store.next === "" &&
      store.backend === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onjavaScriptChange(""));
  };
  const handleNext = () => {
    dispatch(onlistTechChange(4))
    if (store.next === "") {
      dispatch(onnextChange("دوره  نکست"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.SQL === "" &&
      store.react === "" &&
      store.javaScript === "" &&
      store.next === "دوره نکست" &&
      store.backend === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onnextChange(""));
  };
  return (
    <>
      <div className="2xl:gap-[30px] xl:flex w-full 2xl:flex flex-row flex-wrap gap-[20px] justify-around font-irSans text-[#383838] hidden">
        {/*------------------------------------------------------------ python ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`python`}
          onClick={handlePython}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`python`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px]  ${style.pythonLabel}`}
        >
          <h1 className="mx-auto"> #C</h1>
        </label>
        {/*------------------------------------------------------------ SQL ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`SQL`}
          onClick={handleSQL}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`SQL`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.SQLLabel}`}
        >
          <h1 className="mx-auto"> SQL </h1>
        </label>
        {/*------------------------------------------------------------ react ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`react`}
          onClick={handleReact}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`react`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.reactLabel}`}
        >
          <h1 className="mx-auto"> react </h1>
        </label>
        {/*------------------------------------------------------------ main ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`main`}
          onClick={()=>handleMain()}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`main`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.mainLabel}`}
        >
          <h1 className="mx-auto"> front end </h1>
        </label>
                {/*------------------------------------------------------------ javaScript ------------------------------------------------------------*/}
                <input
          type="checkbox"
          name="course"
          id={`javaScript`}
          onClick={()=> handleJavaScript()}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`javaScript`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.javaScriptLabel}`}
        >
          <h1 className="mx-auto"> javaScript </h1>
        </label>
                {/*------------------------------------------------------------ next ------------------------------------------------------------*/}
                <input
          type="checkbox"
          name="course"
          id={`next`}
          onClick={()=>handleNext()}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`next`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.nextLabel}`}
        >
          <h1 className="mx-auto">   next </h1>
        </label>
                {/*------------------------------------------------------------ backend ------------------------------------------------------------*/}
                <input
          type="checkbox"
          name="course"
          id={`backend`}
          onClick={()=>handleBackend()}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`backend`}
          className={`w-[135px] h-[135px] flex items-end pb-[10px] border-[5px] ${style.backendLabel}`}
        >
          <h1 className="mx-auto"> backend </h1>
        </label>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        className="xl:hidden md:w-[300px] md:h-[300px] w-[200px] h-[200px] mySwiper"
      >
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ python ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`pythonResponsive`}
            onClick={handlePython}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`pythonResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.pythonLabelResponsive}`}
          >
            <h1 className="mx-auto">دوره ی پایتون</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ SQL ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`SQLResponsive`}
            onClick={handleSQL}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`SQLResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.SQLLabelResponsive}`}
          >
            <h1 className="mx-auto"> دوره ی طراحی </h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ react ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`reactResponsive`}
            onClick={handleReact}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`reactResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.reactLabelResponsive}`}
          >
            <h1 className="mx-auto"> دوره ی ری اکت</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ main ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`mainResponsive`}
            onClick={handleMain}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`mainResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.mainLabelResponsive}`}
          >
            <h1 className="mx-auto">دوره ی فرانت اند</h1>
          </label>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export { FilterCourse };
