import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { Course } from "../../../../../src/Components/Course/CourseSections/Course";
import { relatedData } from "../../../../Core/Services/data/";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";

const RelatedCourses = ({ teacherName, courseId }) => {
  const [OtherCourse, setOtherCourse] = useState([]);

  const getAllCourse = async () => {
    const result = await basicGet(`/Home/GetCoursesWithPagination?RowsOfPage=70`);
    const response = result.courseFilterDtos;
    setOtherCourse(response);
    // console.log(result);
  };
  const filterAllTeacherCourses = OtherCourse.filter(
    (item) => item.teacherName == teacherName
  );
  const filterOtherTeacherCourses = filterAllTeacherCourses.filter(
    (item) => item.courseId != courseId
  );
  // console.log(teacherName ,filterOtherTeacherCourses);
  // console.log(filterAllTeacherCourses);
  // const items = filterOtherTeacherCourses.map((course, index) => (
  //   <Course {...course} key={index} />
  // ));
  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <>
      {filterOtherTeacherCourses.length == 0 ? (
        <></>
      ) : (
        <div className=" w-full">
          <p className="text-center h-[80px] w-full font-bold text-2xl mb-[50px] p-[30px] dark:text-mode-50">
            {" "}
            دیگر دوره های این استاد{" "}
          </p>
          <div className="w-full flex justify-evenly flex-wrap gap-9">
            {/* {items} */}
            <>
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1536: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination, Navigation]}
          className="2xl:w-[90%] md:w-[80%] mySwiper w-[100%] h-[100%] "
        >
          {filterOtherTeacherCourses.map((el, index) => (
            <SwiperSlide
              className="flex justify-center items-center"
              key={index}
            >
              <Course {...el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
          </div>
        </div>
      )}
    </>
  );
};

export { RelatedCourses };
