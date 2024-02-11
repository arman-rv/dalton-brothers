import React, { Component, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Article } from "../../Article & News/ArticleSections/Article/Article";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import { Course } from "../../Course/CourseSections/Course";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";

const CustomSlider = () => {
  const [courseList, setCourseList] = useState([]);
  const [change, setChange] = useState(false);

  const getCount = async () => {
    const CountArr = await basicGet("/SharePanel/GetMyFavoriteCourses");
    const count = CountArr.favoriteCourseDto;
    const resultArr = await basicGet(`/Home/GetCoursesWithPagination`);
    const result = resultArr.courseFilterDtos;
    const finalArr = count.map((el) =>
      result.filter((e) => e.courseId === el.courseId)
    );
    const final = finalArr.map((e) => e[0]);
    console.log(final);
    setCourseList(final);
  };

  useEffect(() => {
    getCount();
  }, [change]);
  return (
    <>
      <div className="xl:hidden block w-[350px] h-[385px] xl:mb-12 mb-0 xl:mr-20 mr-4 m-auto">
        <Swiper
          loop={true}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper h-full"
        >
          {courseList && courseList.length > 0 ? (
            courseList.map((course, index) => (
              <SwiperSlide
                key={index}
                className="bg-white rounded-xl overflow-hidden w-full h-full"
              >
                <Course {...course} setChange={setChange} change={change} />
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
      </div>
      <div className="xl:block hidden relative left-[150px] w-[full] h-[385px] xl:mb-12 mb-0 xl:mr-20 mr-4 m-auto">
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
          {courseList &&
            courseList.map((course, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Course {...course} setChange={setChange} change={change} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
export { CustomSlider };
