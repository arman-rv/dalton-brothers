import React, { useEffect, useState } from "react";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { MyCourse } from "../../StudentPanel/PanelCourses/Component/MyCourse/MyCourse";
import { Pagination } from "../../StudentPanel/PanelCoursesList/Pagination/Pagination";

const MasterCourses = () => {
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    const result = await basicGet(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0&TeacherId=12`
    );
    //console.log(result.courseFilterDtos);
    setCourses(result.courseFilterDtos);
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
      <div className=" w-full xl:h-[100px] h-[60px] flex justify-evenly items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600 ">
          تصویر
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          نام دوره
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          مدرس
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          ترم
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          تاریخ شروع
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          قیمت
        </div>
        <div className="w-[60px] xl:h-[50px] h-[40px] text-center text-gray-600"></div>
      </div>
      <div className="w-full h-[500px] pt-3 flex flex-col gap-1">
        {courses.map((el, index) => (
          <MyCourse
            coursePic={el.tumbImageAddress}
            courseName={el.title}
            courseMaster={el.teacherName}
            term={el.levelName}
            date={el.lastUpdate.slice(0, 10)}
            price={el.cost}
            key={index}
            courseId={el.courseId}
          />
        ))}
      </div>
      <div className=" w-full h-[90px] ">
        <Pagination />
      </div>
    </div>
  );
};

export { MasterCourses };
