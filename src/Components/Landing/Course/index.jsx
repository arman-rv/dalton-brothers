import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { SimpleSlider } from "../../Common/Sliders/SimpleSlider";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { setItem } from "../../../Core/Services/common/storage.services";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesTop?count=3");

    setCourseList(result);
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="w-100 flex flex-col gap-5 mt-10 ">
      <div className="w-[75%] h-16  flex flex-row-reverse justify-between items-center m-auto mb-10">
        <div className="mr-3 text-2xl h-28 flex justify-start items-center font-irSans text-[#fcbf49]">
          دوره ها
        </div>
        <Link
          to={"/course"}
          className="min-[500px]:w-[210px] w-[175px] h-[50px] bg-secondPallete-100 duration-100 hover:cursor-pointer hover:bg-opacity-80 flex justify-center items-center rounded-full font-irSans text-[#fff] text-l"
        >
          مشاهده ی تمام دوره ها
        </Link>
      </div>
      <div className="flex flex-row flex-wrap w-11/12 mx-auto justify-center gap-10">
        <SimpleSlider data={courseList} item={"course"} />
      </div>
    </div>
  );
};

export { CourseList };
