import React, { useState } from "react";

import style from "../../Filter/Filter.Module.css";
import { useAppContext } from "../../../../Common/LayOut";

const FilterCourse = ({ id, courseName }) => {
  const [j, setJ] = useState(0);
  const { setPython, setReact, setDesign, setMain } = useAppContext();

  const handleCourseFilter = () => {
    if (j === 0) {
      if (courseName === "پایتون") {
        setPython("");
      }
      if (courseName === "ری اکت") {
        setReact("");
      }
      if (courseName === "طراحی سایت") {
        setDesign("");
      }
      if (courseName === "دوره اصلی") {
        setMain("");
      }
      setJ(1);
    } else {
      if (courseName === "پایتون") {
        setPython(courseName);
      }
      if (courseName === "ری اکت") {
        setReact(courseName);
      }
      if (courseName === "طراحی سایت") {
        setDesign(courseName);
      }
      if (courseName === "دوره اصلی") {
        setMain(courseName);
      }

      setJ(0);
    }
  };

  if (courseName === "پایتون")
    return (
      <>
        <input
          type="checkbox"
          name="course"
          id={`course${id}`}
          onClick={() => handleCourseFilter()}
          className={`hidden ${style.courseInp}`}
          defaultChecked
        />
        <label
          htmlFor={`course${id}`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.pythonLabel}`}
        >
          <h1 className="mx-auto">{courseName}</h1>
        </label>
      </>
    );
  if (courseName === "ری اکت")
    return (
      <>
        <input
          type="checkbox"
          name="course"
          id={`course${id}`}
          onClick={() => handleCourseFilter()}
          className={`hidden ${style.courseInp}`}
          defaultChecked
        />
        <label
          htmlFor={`course${id}`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.reactLabel}`}
        >
          <h1 className="mx-auto">{courseName}</h1>
        </label>
      </>
    );
  if (courseName === "طراحی سایت")
    return (
      <>
        <input
          type="checkbox"
          name="course"
          id={`course${id}`}
          onClick={() => handleCourseFilter()}
          className={`hidden ${style.courseInp}`}
          defaultChecked
        />
        <label
          htmlFor={`course${id}`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.designLabel}`}
        >
          <h1 className="mx-auto">{courseName}</h1>
        </label>
      </>
    );
  if (courseName === "دوره اصلی")
    return (
      <>
        <input
          type="checkbox"
          name="course"
          id={`course${id}`}
          onClick={() => handleCourseFilter()}
          className={`hidden ${style.courseInp}`}
          defaultChecked
        />
        <label
          htmlFor={`course${id}`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.mainLabel}`}
        >
          <h1 className="mx-auto">{courseName}</h1>
        </label>
      </>
    );
};

export { FilterCourse };
