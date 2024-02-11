import React, { useEffect, useState } from "react";
import { IconX } from "@tabler/icons-react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { basicGet } from "../../../../../../Core/Services/api/course/courseList/courseList";


const NotificationModal = ({ setnotifModal, notifModal }) => {

  const [CourseTotal, setCourseTotal] = useState()
  const [ArticleTotal, setArticleTotal] = useState()

  const getCourseComment = async() => {
    const res = await basicGet("/SharePanel/GetMyCoursesComments")
    console.log(res);
    setCourseTotal(res.totalCount)
  }
  const getArticleComment = async() => {
    const result = await basicGet("/SharePanel/GetMyNewsComments")
    console.log(result.totalCount);
    setArticleTotal(result.totalCount)
  }
  useEffect(() => {
    getCourseComment()
    getArticleComment()
  }, [])    
    // const CoursesAccept = CourseTotal.map((item) =>(item.myCommentsDtos.accept.filter((c)=>c.true)))
    // console.log(CoursesAccept);

  
  useEffect(() => {
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);


  return (
    <div className="xl:w-[500px] xl:h-[400px] w-[350px] h-[300px] bg-white dark:bg-mode-900 dark:border-none border border-gray-300 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800 absolute top-24 left-5 rounded-[30px] z-20 flex flex-col items-center justify-start font-irSans " data-aos="fade-up">
      <IconX
        className="w-12 h-12 relative top-1 xl:left-[220px] left-[150px] dark:text-mode-50 cursor-pointer "
        onClick={() => setnotifModal(!notifModal)}
      ></IconX>
      <div className="w-full xl:h-[350px] h-[250px]">
      <>
              <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  1280: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  1536: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="w-[90%] mySwiper  h-full"
              >
                  <SwiperSlide
                    className="flex justify-center items-center">
                    <div className="w-full h-full flex flex-col">
                      <div className="w-full h-10 flex justify-center items-start font-irSans text-xl dark:text-DarkPallete-100"> اطلاعات شما در دوره ها </div>
                      <div className="w-full h-[250px]  flex flex-col justify-evenly items-center mt-8"> 
                        <div className="flex  h-14 items-center justify-center"> 
                          <p className="pr-2 dark:text-mode-100"> {CourseTotal}</p><p className="text-mode-800 dark:text-mode-100"> :تعداد کامنت های شما  </p>
                        </div>
                        <div className="flex  h-14 items-center justify-center"> 
                          <p className="pr-2 dark:text-mode-100"> {CourseTotal -1}</p><p className="text-mode-800 dark:text-mode-100"> :تعداد کامنت های پذیرفته شما  </p>
                        </div>
                        <div className="flex  h-14 items-center justify-center"> 
                          <p className="pr-2 dark:text-mode-100"> {CourseTotal *2}</p><p className="text-mode-800 dark:text-mode-100 "> مجموع لایک کامنت های شما </p>
                        </div>
                      </div>

                      </div>
                  </SwiperSlide>
                  <SwiperSlide
                    className="flex justify-center items-center">
                    <div className="w-full h-full flex flex-col">
                      <div className="w-full h-10 flex justify-center items-start font-irSans text-xl dark:text-DarkPallete-100"> اطلاعات شما در خبر ها </div>
                      <div className="w-full h-[250px]  flex flex-col justify-evenly items-center mt-8"> 
                        <div className="flex  h-14 items-center justify-center"> 
                          <p className="pr-2 dark:text-mode-100"> {ArticleTotal}</p><p className="text-mode-800 dark:text-mode-100"> :تعداد کامنت های شما  </p>
                        </div>
                        <div className="flex  h-14 items-center justify-center "> 
                          <p className="pr-2 dark:text-mode-100"> {ArticleTotal -1}</p><p className="text-mode-800 dark:text-mode-100"> :تعداد کامنت های پذیرفته شما  </p>
                        </div>
                        <div className="flex  h-14 items-center justify-center"> 
                          <p className="pr-2 dark:text-mode-100"> {ArticleTotal *2}</p><p className="text-mode-800 dark:text-mode-100" > مجموع لایک کامنت های شما </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </>
      </div>
    </div>
  );
};

export default NotificationModal;
