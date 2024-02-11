import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import http from "../../../../Core/Services/interceptor";

import "aos/dist/aos.css";
import AOS from "aos";

// import { courseData } from "../../../../Core/Services/data";
import {
  IconBookmarks,
  IconThumbUp,
  IconThumbDown,
  IconUserCheck,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";
import { addSave } from "../../../../Core/Services/api/course/addSave";
import {
  addLike,
  deleteLike,
} from "../../../../Core/Services/api/course/addLike";
import reservedCourse from "../../../../Redux/reservedCourse";
import courseDetailImage from "../../../../../src/assets/Images/newsImage.jpg";

import { reserveCourse } from "../../../../Core/Services/api/course/reserve";
import { deleteSave } from "../../../../Core/Services/api/course/deleteSave";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";
import { addDisLike } from "../../../../Core/Services/api/course/addDisLike";
import RatingBox from "../RatingBox";
import { postYourCourseRate } from "../../../../Core/Services/api/course/courseDetail/courseDetail";

const AboutCourse = ({
  title,
  teacherName,
  cost,
  startTime,
  courseStatusName,
  courseLevelName,
  endTime,
  imageAddress,
  capacity,
  currentRate,
  courseId,
  isUserFavorite,
  userFavoriteId,
  dissLikeCount,
  isCourseReseve,
  isCourseUser,
  change,
  setChange,
  currentUserLike,
  likeCount,
  userLikeId,
  currentUserDissLike,
  currentUserSetRate,
  currentUserRateNumber,
}) => {
  // console.log(imageAddress);
  const [condition, setCondition] = useState();

  const token = useSelector((state) => state.token.token);
  const handleSave = async () => {
    if (token) {
      if (isUserFavorite === false) {
        const obj = {
          courseId: courseId,
        };
        const userSave = await addSave(obj);
      } else if (isUserFavorite === true) {
        var formdata = new FormData();
        formdata.append("CourseFavoriteId", userFavoriteId);
        // console.log(formdata);
        const result = await deleteSave(formdata);
      }
      setChange(!change);
    } else {
      toast.error("برای ذخیره دوره باید در سایت ثبت نام کنید");
    }
  };
  const handleLike = async () => {
    if (token) {
      if (currentUserLike === "0") {
        const result = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        const result1 = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
      } else if (currentUserLike === "1") {
        const data = new FormData();
        data.append("CourseLikeId", userLikeId);
        const result = await deleteLike(data);
        //   const result = await http.delete(`/Course/DeleteCourseLike`, {
        //     data: data,
        //   });
        //   console.log(result);
        //   } catch (error) {
        //   toast.error(error);
        //   }
        //   setLike(false);
        // } else {
        //   const userLike = await addLike(
        //     `/Course/AddCourseLike?CourseId=${courseId}`
        //   );
        //   console.log(userLike);
        //   setLike(true);
        //   setDisLike(false);
      }
      setChange(!change);
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };
  console.log(currentUserLike, currentUserDissLike);
  const handleDisLike = async () => {
    if (token) {
      if (currentUserDissLike === "0") {
        const result = await addDisLike(courseId);
      } else if (currentUserDissLike === "1") {
        const result = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        const data = new FormData();
        data.append("CourseLikeId", userLikeId);
        const result1 = await deleteLike(data);
        // const disLikeData = new FormData();

        // if (token) {
        //   if (DisLike == true) {
        //     try {
        //       disLikeData.append("CourseLikeId", userLikeId);

        //       const result = await http.delete(`/Course/DeleteCourseLike`, {
        //         data: disLikeData,
        //       });
        //       console.log(result);
        //     } catch (error) {
        //       toast.error(error);
        //     }
        //     setDisLike(false);
        //     console.log(userLikeId);
        //   } else {
        //     const userDisLike = await addLike(
        //       `/Course/AddCourseDissLike?CourseId=${courseId}`
        //     );
        //     console.log(userDisLike);
        //     setDisLike(true);
        //     setLike(false);
      }
      setChange(!change);
    } else {
      toast.error("برای دیس لایک باید در سایت ثبت نام کنید");
    }
  };

  const [NewRating, NewSetRating] = useState();

  // const postRating = async () =>{
  //   const rate = await postYourCourseRate(NewRating)
  //   console.log(rate,NewRating);
  // }
  const handleStars = async (newRating) => {
    NewSetRating(newRating);
    const rate = await postYourCourseRate(newRating,courseId)
    console.log(rate,newRating,NewRating);
    setChange(!change)
    toast.success("امتیاز شما به این دوره ثبت شد")
  };
console.log(NewRating);

  const selectedCourse = {
    courseId: courseId,
  };

  const handleClick = async () => {
    const result = await reserveCourse(selectedCourse);
    setChange(!change);
  };
  const getCondition = () => {
    if (isCourseReseve === "1") {
      if (isCourseUser === "1") {
        setCondition("تایید شده");
        return;
      }
      setCondition("در حال تایید");
    }
    if (isCourseReseve === "0") {
      setCondition("ثبت نام");
    }
  };
  useEffect(() => {
    getCondition();
  }, [isCourseReseve, isCourseUser]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="h-[500px] bg-pallete-100 bg-opacity-20 dark:bg-mode-800 w-full mt-[100px] flex justify-center items-center px-10 pt-10 pb-5 max-2xl:flex-col-reverse max-2xl:h-auto max-2xl:gap-20   ">
        {/* ------------------------  title  & info -------------------------------------------------- */}

        {/*--------------------- title  & teacher  ------------------------------- */}
        <div className="w-3/5 max-2xl:w-full h-full flex flex-col items-end gap-10 ">
          <p className="text-end font-irSBold text-2xl text-mode-800 dark:text-mode-50">
            {title}
          </p>
          <div className="flex justify-start items-center text-mode-700 dark:text-mode-200 dark:opacity-90 flex-row-reverse gap-3  font-irSBold">
            <IconUserCheck className="text-mode-700 w-8 h-8 dark:text-mode-200  dark:opacity-90 " />
            {teacherName}
          </div>
          {/* ---------------------------------------------------- */}

          {/* capility & rate & info */}
          <div className="flex justify-center items-center flex-row-reverse  bg-white dark:bg-mode-700 w-4/5 max-2xl:w-full h-[250px] rounded-[30px] max-sm:h-auto max-sm:py-5 max-sm:flex-col max-sm:gap-5">
            <div className="w-2/5 h-full  flex flex-col justify-evenly items-center">
              <div className="bg-mode-50 dark:bg-mode-700  border-2  border-mode-50 dark:border-DarkPallete-100 dark:text-mode-200 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-2 text-mode-700 font-irSans text-sm">
                <p className="text-mode-800 font-irSBold text-xl dark:text-mode-200 ">
                  {" "}
                  {capacity}
                </p>
                ظرفیت دوره
              </div>
              <p className="text-mode-700 dark:text-mode-200 font-irSans text-base flex flex-row-reverse gap-2 ">
                {" "}
                امتیاز دوره<span>{currentRate}</span>{" "}
              </p>
              {currentUserSetRate ?
              <p className="text-mode-700 font-irSBold text-lg dark:text-mode-200">
                {currentUserRateNumber } : امتیازی که شما به این دوره دادید  
              </p>
              :
              <p className="text-mode-700 font-irSBold text-lg dark:text-mode-200">
              {NewRating} : به این دوره امتیاز دهید 
              </p>
              }
              {currentUserSetRate ?<></>: <div className="flex justify-center items-center">
                <RatingBox handleStars={handleStars} />
              </div>}
            </div>

            {/* ------------------------------------------------ */}
            {/* ----------------------------  info --------------------------------------- */}
            <div className="w-3/5 h-full flex flex-col gap-6 items-end justify-center font-irSans">
              {/* one item */}
              <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200 ">
                : وضعیت
                <span className="font-irSBold mr-2 dark:text-mode-50">
                  {courseStatusName}
                </span>{" "}
              </div>
              {/* --------------- */}
              {/* one item */}
              <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
                : (تومان) هزینه دوره
                <span className="font-irSBold mr-2 flex dark:text-mode-50 ">
                  {" "}
                  {cost}{" "}
                </span>{" "}
              </div>
              {/* --------------- */}
              {/* one item */}
              <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
                : تاریخ شروع دوره{" "}
                <span className="font-irSBold mr-2 dark:text-mode-50">
                  {startTime}
                </span>{" "}
              </div>
              {/* --------------- */}

              {/* one item */}
              <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
                : سطح دوره{" "}
                <span className="font-irSBold mr-2 dark:text-mode-50">
                  {courseLevelName}
                </span>{" "}
              </div>
              {/* --------------- */}
            </div>

            {/*  -----------------------------------  */}
          </div>
        </div>

        {/*----------------------- image &  buttons ------------------------------------------------------------------------- */}
        <div className="w-2/5 max-2xl:w-full h-full  ">
          <div className="h-[70%]  flex justify-center items-center">
            {" "}
            <img
              className="w-4/5 max-2xl:w-[500px] h-full rounded-[30px] flex justify-center items-center"
              src={imageAddress != null ? imageAddress : courseDetailImage}
            />
          </div>

          <div className="h-[30%] w-[80%] max-2xl:w-[500px] m-auto max-2xl:mt-10 max-sm:flex-col max-sm:w-auto max-sm:justify-center max-sm:gap-6 flex justify-between items-center flex-row-reverse ">
            <div className="w-full flex justify-end max-sm:justify-center">
              {condition !== "ثبت نام" && (
                <span className="text-xl px-16 py-2 rounded-[40px] text-mode-700 dark:text-white font-irSans">
                  {condition}
                </span>
              )}
              {condition === "ثبت نام" && (
                <button
                  className="  bg-pallete-100 dark:bg-DarkPallete-100  text-xl px-16 py-2 rounded-[40px] text-white font-irSans"
                  onClick={() => handleClick()}
                >
                  {condition}
                </button>
              )}
            </div>
            <div className="h-full w-full flex justify-start items-center gap-3  max-sm:justify-center">
              {/* -------------saveCourse--------------------------------------------------------------------------- */}
              <div
                className="w-12 h-12 dark:bg-mode-700 rounded-full flex justify-center items-center bg-white cursor-pointer"
                onClick={() => handleSave()}
              >
                {isUserFavorite ? (
                  <IconBookmarks className="text-[#ffac30] dark:text-black" />
                ) : (
                  <IconBookmarks className="text-[#2c2c2c] dark:text-mode-50" />
                )}
              </div>

              <div className="flex justify-center items-center gap-2">
                <div
                  className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-l-[100px] rounded-r-[20px]  flex justify-center items-center gap-2 cursor-pointer"
                  onClick={handleLike}
                >
                  {currentUserLike === "1" ? (
                    <IconThumbUp className="text-[#ffac30] dark:text-black" />
                  ) : (
                    <IconThumbUp className="text-[#2c2c2c] dark:text-mode-50" />
                  )}
                  <p className="text-mode-700 dark:text-mode-50">
                    {" "}
                    {likeCount}
                  </p>
                </div>
                {/* : */}
                {/* <div className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-l-[100px] rounded-r-[20px]  flex justify-center items-center gap-2 cursor-pointer"  onClick={()=> handleLike()}>
              <IconThumbUp
                className="text-mode-700 dark:text-mode-50 w-6 h-6"
                stroke={1.8}
              />
              <p className="text-mode-700 dark:text-mode-50"> {likeCount}</p>
            </div> */}
                {/* } */}
                {/* { */}
                {/* change ?  */}
                <div
                  className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-r-[100px] rounded-l-[20px]  flex justify-center items-center gap-2 cursor-pointer "
                  onClick={() => handleDisLike()}
                >
                  {currentUserDissLike === "1" ? (
                    <IconThumbDown className="text-[#ffac30] dark:text-black" />
                  ) : (
                    <IconThumbDown className="text-[#2c2c2c] dark:text-mode-50" />
                  )}
                  <p className="text-mode-700 dark:text-mode-50 ">
                    {dissLikeCount}
                  </p>
                </div>
                {/* : */}
                {/* <div
              className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-r-[100px] rounded-l-[20px]  flex justify-center items-center gap-2 cursor-pointer "
              onClick={() => handleDisLike()}
            >
              <IconThumbDown
                className="text-mode-700 dark:text-mode-50 w-6 h-6 relative top-[2px]"
                stroke={1.8}
              />
              <p className="text-mode-700 dark:text-mode-50 ">
                {" "}
                {dissLikeCount}
              </p>
            </div> */}
                {/* } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutCourse };
