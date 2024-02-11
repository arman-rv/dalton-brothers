import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import likeCheck from "../../../Assets/Images/like1check.png";
import likes from "../../../Assets/Images/like1.png";
import dislikeCheck from "../../../Assets/Images/dislikeCheck.png";
// import dislike from "../../../Assets/Images/dislike.png";

import like from "../../../assets/Images/like & dislike/like.png";
import likeFilled from "../../../assets/Images/like & dislike/likeFilled.png";
import likeMode from "../../../assets/Images/like & dislike/likeMode.png";
import dislike from "../../../assets/Images/like & dislike/dislike.png";
import dislikeMode from "../../../assets/Images/like & dislike/dislikeMode.png";
import dislikeFilled from "../../../assets/Images/like & dislike/dislikeFilled.png";
import dislikeFilledMode from "../../../assets/Images/like & dislike/dislikeFilledMode.png";

import {
  IconThumbUp,
  IconThumbUpFilled,
  IconThumbDownFilled,
  IconThumbDown,
} from "@tabler/icons-react";

// import comment from "../../../Assets/Images/comment.png";
import bookmarkCheck from "../../../Assets/Images/bookMarkCheck.png";
import bookmark from "../../../Assets/Images/bookMark.png";
import http from "../../../Core/Services/interceptor";
import DarkModelikes from "../../../Assets/Images/modeLike.png";
import comment from "../../../Assets/Images/comment.png";
import darkModeComment from "../../../Assets/Images/modeComment.png";
import darkModeBookmark from "../../../Assets/Images/modeBookmark.png";
import courseImage from "../../../Assets/Images/course.svg";
import courseImageMode from "../../../Assets/Images/courseMode.svg";
import { Button } from "../../Common/buttons";
import { addLike, deleteLike } from "../../../Core/Services/api/course/addLike";
import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
import handleDescription from "../../Common/Functions/HandleDesc/HandleDesc";
import { addSave } from "../../../Core/Services/api/course/addSave";
import { deleteSave } from "../../../Core/Services/api/course/deleteSave";
import { addDisLike } from "../../../Core/Services/api/course/addDisLike";

const Course = ({
  cost,
  likeCount,
  commandCount,
  teacherName,
  title,
  describe,
  courseId,
  userIsLiked,
  userLikedId,
  currentUserDissLike,
  dissLikeCount,
  userFavoriteId,
  userFavorite,
  setChange,
  change,
}) => {
  const token = useSelector((state) => state.token.token);
  const colorMode = useSelector((state) => state.theme.theme);

  const navigate = useNavigate();
  const handleSave = async () => {
    if (token) {
      if (!userFavorite) {
        const obj = {
          courseId: courseId,
        };
        const userSave = await addSave(obj);
      } else if (userFavorite) {
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
      if (!userIsLiked) {
        const result = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        const result1 = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
      } else if (userIsLiked) {
        const data = new FormData();
        data.append("CourseLikeId", userLikedId);
        const result = await deleteLike(data);
      }
      setChange(!change);
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };
  const handleDisLike = async () => {
    if (token) {
      if (!currentUserDissLike) {
        const result = await addDisLike(courseId);
      } else if (currentUserDissLike) {
        const result = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        const data = new FormData();
        data.append("CourseLikeId", userLikedId);
        const result1 = await deleteLike(data);
      }
      setChange(!change);
    } else {
      toast.error("برای دیس لایک باید در سایت ثبت نام کنید");
    }
  };

  return (
    <div className="w-[350px] h-96 border dark:border-none dark:bg-mode-800  rounded-2xl flex flex-col">
      {/* image & 3 button start */}

      <div className="w-full h-1/2  rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}

        <div className="w-2/3 flex justify-center items-center  h-full rounded-tr-2xl ">
          <img
            className="w-[180px] rounded-tr-2xl "
            src={colorMode === "dark" ? courseImageMode : courseImage}
            alt=""
          />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center  pt-[20px] text-[#090909] font-irSans">
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start">
            <img
              className="w-[30px] cursor-pointer"
              src={
                userFavorite
                  ? bookmarkCheck
                  : colorMode === "dark"
                  ? darkModeBookmark
                  : bookmark
              }
              alt=""
              onClick={() => handleSave()}
            />
            <span className="w-[30px] text-center inline-block dark:text-mode-200 ">
              {userFavorite}
            </span>
          </div>
          <div
            className="w-full h-1/3 pl-[30px] flex flex-col items-start gap-1"
            onClick={() => handleLike()}
          >
            {userIsLiked ? (
              <IconThumbUp className="w-[30px] cursor-pointer text-[#c93737]" />
            ) : (
              <IconThumbUp className="w-[30px] cursor-pointer text-mode-700 dark:text-mode-100" />
            )}
            <span className="w-[30px] text-center inline-block dark:text-mode-200 text-mode-700">
              {likeCount}
            </span>
          </div>
          <div
            className="w-full h-1/3 pl-[30px] flex flex-col items-start"
            onClick={() => handleDisLike()}
          >
            {currentUserDissLike ? (
              <IconThumbDown className="w-[30px] cursor-pointer  text-[#c93737]" />
            ) : (
              <IconThumbDown className="w-[30px] opacity-80 cursor-pointer  text-mode-700 dark:text-mode-100" />
            )}
            <span className="w-[30px] text-center inline-block text-mode-700 dark:text-mode-100">
              {dissLikeCount}
            </span>
          </div>
        </div>
      </div>

      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full h-[170px] flex flex-col gap-[10px] rounded-b-lg mt-6 relative">
        <span className="flex flex-row-reverse p-3 py-0 text-mode-900  text-base font-irSBold trauncte dark:text-mode-50">
          {title}
        </span>
        <span className="flex flex-row-reverse pr-3 text-mode-800 opacity-80  text-sm font-irSans dark:text-mode-100">
          {teacherName}
        </span>
        <span className="flex flex-row-reverse w-[94%] mx-auto  text-mode-700 opacity-80 text-xs font-irSans text-right text-ellipsis  overflow-hidden dark:text-mode-200">
          {describe}
        </span>

        {/* button & price start */}

        <div className="w-full h-[55px]  rounded-b-lg flex justify-center flex-row-reverse absolute bottom-0 ">
          <div className="w-1/2  flex justify-center items-center flex-row-reverse text-sm text-pallete-100 dark:text-DarkPallete-100 font-irSBold">
            <p className="">{cost}</p>
            <p className="pr-1"> تومان </p>
          </div>
          <Button
            className="w-1/2  bg-pallete-100 dark:bg-DarkPallete-100 text-mode-100 rounded-tr-2xl rounded-bl-2xl rounded-tl-none rounded-br-none flex justify-center items-center font-irSBold"
            onClick={() => navigate(`/courseDetail/${courseId}`)}
          >
            {"اطلاعات بیشتر"}
          </Button>
        </div>

        {/* button & price end */}
      </div>

      {/* details & more info button end */}
    </div>
  );
};

export { Course };
