import React, { useEffect, useState } from "react";

import {   IconTrashFilled, IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import delIcon from "../../../../../assets/Images/panel/panelDel.png";
import addlIcon from "../../../../../assets/Images/panel/PanelAdd.png";
import { deleteReserve } from "../../../../../Core/Services/api/course/reserve/deleteReserve";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

import courseImage from "../../../../../assets/Images/icons8-python-144.png";

const MyCourse = ({
  courseName,
  courseMaster,
  term,
  price,
  reserveId,
  courseId,
  setCourseDeleteId,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imgUrl, setImgUrl] = useState(false);
  const deleteReservation = async () => {
    setCourseDeleteId(courseId);
    const obj = {
      id: reserveId,
    };
    const result = await deleteReserve(obj);
  };
  const handleClick = async () => {
    if (courseId) navigate(`/courseDetail/${courseId}`);
  };
  const getImg = async () => {
    const img = await basicGet(`/Course/${courseId}`);
    setImgUrl(img.imageAddress);
  };
  useEffect(() => {
    getImg();
  }, []);
  return (
    <div className="bg-[#f1f5f9] dark:bg-mode-800 rounded-[50px] w-full lg:h-[65px] h-[55px] xl:my-3 my-1 flex flex-row-reverse justify-evenly items-center text-gray-800  whitespace-nowrap">
      <div className=" w-[50px] h-[65px] text-center rounded-full flex justify-center items-center mr-2">
        {imgUrl ? (
          <img
            src={imgUrl }
            alt=""
            className="bg-red-200 w-[40px] h-[40px] rounded-full"
          ></img>
        ) : (
          <div className="bg-white w-[40px] h-[40px] rounded-full "> <img src={courseImage} alt="" /></div>
        )}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center dark:text-mode-50 overflow-hidden ">
        {courseName}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center dark:text-mode-50  overflow-hidden ">
        {courseMaster}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center dark:text-mode-50 max-xl:hidden">
        {term}
      </div>

      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center dark:text-mode-50 ">
        {price}
      </div>
      <div className="lg:w-[48px]  xl:w-[60px] w-[100px] xl:h-[55px] h-[40px] flex justify-center items-center ">
        {location.pathname === "/panel/PanelCourses" ? (
          <div
            className="w-[40px] h-[40px] rounded-full bg-pallete-100 dark:bg-DarkPallete-100 flex justify-center items-center cursor-pointer"
            onClick={deleteReservation}
          >
            {/* <img src={delIcon} className="w-[25px] h-[25px]" /> */}

            <IconTrashFilled className="text-mode-50"> </IconTrashFilled>

          </div>
        ) : (
          location.pathname === "/panel/PanelCoursesList" && (
            <div
              className="w-[40px] h-[40px] rounded-full bg-pallete-100 dark:bg-DarkPallete-100   flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              {/* <img src={addlIcon} className="w-[25px] h-[25px]" /> */}
              <IconSquareRoundedPlusFilled className="text-mode-50"></IconSquareRoundedPlusFilled>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { MyCourse };
