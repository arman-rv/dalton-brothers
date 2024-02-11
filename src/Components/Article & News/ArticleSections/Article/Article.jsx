import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import style from "../../../Landing/Header/header.module.css";
import ArticleImage from "../../../../Assets/Images/article.png";
import ArticleWriter from "../../../../Assets/Images/articleWriter.png";
import disLikeCheck from "../../../../Assets/Images/icons8-dislike-48(3).png";
import disLike from "../../../../Assets/Images/icons8-dislike-48(4).png";
import likeCheck from "../../../../Assets/Images/icons8-facebook-like-48.png";
import like from "../../../../Assets/Images/icons8-facebook-like-48(1).png";
import comment from "../../../../Assets/Images/comment.png";
import bookmark from "../../../../Assets/Images/bookMark.png";
import bookmarkCheck from "../../../../Assets/Images/bookmarkCheck.png";
import newsImage from "../../../../Assets/Images/newsImage.jpg";

import { Button } from "../../../Common/buttons";
import { addArticleLike } from "../../../../Core/Services/api/course/Like/Like";
import handleDescription from "../../../Common/Functions/HandleDesc/HandleDesc";
import { addLike } from "../../../../Core/Services/api/course/addLike";
import {
  IconUserEdit,
  IconStarFilled,
  IconEye,
  IconHeart,
  IconHeartFilled,
  IconArrowNarrowLeft,
  IconThumbDownFilled,
  IconThumbDown,
  IconThumbUpFilled,
  IconThumbUp,
} from "@tabler/icons-react";
import {
  deleteArticleLike,
  deleteArticleSave,
} from "../../../../Core/Services/api/course/addSave";

const Article = ({
  miniDescribe,
  addUserFullName,
  title,
  newsCatregoryName,
  id,
  currentImageAddressTumb,
  currentRate,
  currentView,
  insertDate,
  updateDate,
  currentLikeCount,
  currentUserIsLike,
  likeId,
  currentDissLikeCount,
  currentUserIsDissLike,
  isCurrentUserFavorite,
  currentUserFavoriteId,
  setEmotion,
  Emotion,
}) => {
  console.log(currentImageAddressTumb);
  const [Save, setSave] = useState(isCurrentUserFavorite);
  const [Like, setLike] = useState(currentUserIsLike);
  const [DissLike, setDissLike] = useState(currentUserIsDissLike);
  const token = useSelector((state) => state.token.token);

  const navigate = useNavigate();

  const handleSave = async () => {
    if (token) {
      if (Save == true) {
        setSave(false);
        const obj = {
          deleteEntityId: currentUserFavoriteId,
        };
        const userDeleteArticleLike = await deleteArticleSave(obj);
        //console.log(userDeleteArticleLike);
      } else {
        const userIsSave = await addLike(`/News/AddFavoriteNews?NewsId=${id}`);
        //console.log(userIsSave);
        setSave(true);
      }
    } else {
      toast.error("برای ذخیره کردن باید در سایت ثبت نام کنید");
    }
  };

  const handleDissLike = async () => {
    if (token) {
      if (DissLike == true) {
        setDissLike(false);
        const obj = {
          deleteEntityId: likeId,
        };
        const userDeleteArticleLike = await deleteArticleLike(obj);
        //console.log(userDeleteArticleLike);
        setEmotion(!Emotion)
      } else {
        const userIsDissLike = await addLike(`/News/NewsDissLike/${id}`);
        setDissLike(true);
        setLike(false);
        setEmotion(!Emotion)
        //console.log(userIsDissLike);
        return;
      }
    } else {
      toast.error("برای دیس لایک باید در سایت ثبت نام کنید");
    }
    //console.log(currentUserIsDissLike);
  };

  const handleLike = async () => {
    if (token) {
      if (Like == true) {
        setLike(false);
        const obj = {
          deleteEntityId: likeId,
        };
        const userDeleteArticleLike = await deleteArticleLike(obj);
        //console.log(userDeleteArticleLike);
      setEmotion(!Emotion)
      } else {
        const userIsLike = await addLike(`/News/NewsLike/${id}`);
        //console.log(userIsLike);
        setLike(true);
        setDissLike(false);
        setEmotion(!Emotion)
        return;
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };

  return (
    <div className="w-[780px]  border rounded-[30px] flex-col bg-mode-50 text-mode-900 dark:bg-mode-800 dark:border-none p-4 pb-0 max-xl:scale-75 max-md:scale-[60%] max-sm:scale-[50%]">
      <div className=" w-full h-44 flex">
        <div className=" h-full w-3/5 flex-col pr-4">
          <h3 className=" w-full h-1/4 flex items-center justify-end font-irSBold text-xl dark:text-mode-50">
            {title && handleDescription(title, 40)}{" "}
          </h3>
          <h5 className=" w-full h-1/4 flex items-center justify-end font-irSans text-lg text-mode-800 dark:text-mode-200">
            {" "}
            {newsCatregoryName}{" "}
          </h5>
          <p
            className=" w-full h-1/2 flex items-center leading-8 text-right font-irSans text-mode-700 dark:text-mode-300 "
            dir="rtl"
          >
            {miniDescribe && handleDescription(miniDescribe, 120)}
          </p>
          <div className="w-4/5 border border-gray-300 mx-auto"></div>
        </div>
        <div className=" h-full w-2/5">
          <div className=" w-full h-full rounded-[30px]">
            <img
              src={ currentImageAddressTumb !== null ?  currentImageAddressTumb :  newsImage }
              alt=""
              className="w-full h-full flex justify-center items-center rounded-2xl "
            ></img>
          </div>
        </div>
      </div>
      <div className="w-full h-24 flex flex-row-reverse items-center font-irSans text-[15px]">
        <div className="w-[180px] h-full flex flex-col justify-evenly text-gray-500">
          <div className="w-full h-1/4 flex">
            <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1 dark:text-mode-300">
              {insertDate}
            </p>
            <p className="h-full w-[130px] text-right dark:text-mode-300">
              {" "}
              : انتشار خبر{" "}
            </p>
          </div>
          {/* <div className="w-full h-1/4 flex">
            <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1 dark:text-mode-300">
              {updateDate}
            </p>
            <p className="h-full w-[130px] text-right dark:text-mode-300"> : آپدیت خبر </p>
          </div> */}
          <div className="w-full h-1/4  flex flex-row-reverse items-center">
            <div className=" flex justify-center items-center">
              <IconUserEdit
                strokeWidth={1.5}
                className="w-full h-full text-mode-800 dark:text-mode-100"
              ></IconUserEdit>
            </div>
            <div className="h-full w-full whitespace-nowrap flex items-center justify-center text-mode-800 dark:text-mode-100">
              {addUserFullName && handleDescription(addUserFullName, 15)}
            </div>
          </div>
        </div>
        <div className="w-[190px] h-full flex justify-center items-center relative">
          <div className=" h-1/3 w-2/5 flex justify-center items-center">
            <IconEye className="w-7 h-7 text-mode-700 dark:text-mode-100"></IconEye>
            <div className="text-center text-xl ml-1 pt-1 text-mode-700 dark:text-mode-100">
              {currentView}
            </div>
          </div>
          <div className=" h-1/3 w-2/5 flex justify-center items-center">
            <IconStarFilled className="w-7 h-6 text-pallete-100" ></IconStarFilled>
            <div className="text-center text-xl ml-1 text-orange-300 pt-1">
              {currentRate}
            </div>
          </div>
          <div className="border border-r border-gray-400 h-2/3 absolute right-0"></div>
        </div>
        <div className="w-20 h-full flex items-center relative ">
          <div className="w-full h-1/3 pl-2">
            {Save ? (
              <div className="w-full h-[33px] bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={() => handleSave()}>
                <img
                  className="w-[25px] opacity-60"
                  src={bookmarkCheck}
                  alt=""
                 
                />
              </div>
            ) : (
              <div className="w-full h-[33px] bg-white rounded-full flex justify-center items-center cursor-pointer" onClick={() => handleSave()}>
                <img
                  className="w-[25px]  opacity-60"
                  src={bookmark}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-20 h-[36%] rounded-[20px]  flex flex-row-reverse items-center">
          {DissLike ? (
            <div
              className="bg-red-300 w-full h-full rounded-[20px] rounded-l flex justify-center items-center cursor-pointer pl-1"
              onClick={() => handleDissLike()}
            >
              <div className="w-4/5 h-4/5 flex flex-row-reverse">
                <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                  {" "}
                  {currentDissLikeCount}{" "}
                </div>
                <IconThumbDownFilled
                className="w-[30px] cursor-pointer  text-error-100  relative top-[2px]"
                
                
               
              />
              </div>
            </div>
          ) : (
            <div
              className="bg-white  w-full h-full rounded-[20px]  rounded-l flex justify-center items-center cursor-pointer pl-1"
              onClick={() => handleDissLike()}
            >
              <div className="w-4/5 h-4/5 flex flex-row-reverse">
                <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                  {" "}
                  {currentDissLikeCount}{" "}
                </div>

                <IconThumbDown
                className="w-[30px] opacity-80 cursor-pointer  text-mode-700 dark:text-mode-700 relative top-[2px]"
                
                
                
              />
              </div>
            </div>
          )}
        </div>
        <div className="w-20 h-[36%] ml-3 mr-1">
          {Like ? (
            <div
              className="bg-red-300 w-full h-full rounded-[20px] rounded-r flex justify-center items-center cursor-pointer pl-1"
              onClick={() => handleLike()}
            >
              <div className="w-4/5 h-4/5 flex flex-row-reverse">
                <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                  {" "}
                  {currentLikeCount}{" "}
                </div>
                <IconThumbUpFilled
                className="w-[30px] cursor-pointer text-error-100  "

                
              />
              </div>
            </div>
          ) : (
            <div
              className="bg-white w-full h-full rounded-[20px] rounded-r flex justify-center items-center cursor-pointer pl-1"
              onClick={() => handleLike()}
            >
              <div className="w-4/5 h-4/5 flex flex-row-reverse">
                <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                  {" "}
                  {currentLikeCount}{" "}
                </div>
                <IconThumbUp
                className="w-[30px] cursor-pointer   text-mode-700 dark:text-mode-700"
              
                onClick={() => handleLike()}
              />
              </div>
            </div>
          )}
        </div>
        <Button
          className="w-[150px] h-1/3 flex flex-row-reverse !px-0 !py-0"
          onClick={() => navigate(`/newsDetail/${id}`)}
        >
          <div className="w-2/3 h-full whitespace-nowrap font-irSans text-mode-700 dark:text-mode-200 font-bold flex justify-center items-center pr-3">
            {" "}
            جزئیات بیشتر{" "}
          </div>
          <div className="w-[50px] h-8  flex justify-center items-center ">
            <IconArrowNarrowLeft
              className="w-full h-full text-mode-700 dark:text-mode-200"
              strokeWidth={1.5}
            ></IconArrowNarrowLeft>
          </div>
        </Button>
      </div>

      {/* <div className="w-full h-1/2 rounded-t-lg flex justify-center flex-row-reverse">
        
        <div className="w-full h-full rounded-[20px] overflow-hidden ">
          <img className="w-full h-full" src={currentImageAddressTumb} alt="" />
        </div>
      </div> */}
      {/* 
      /* <div className=" w-full flex flex-col px-[5px] gap-5 rounded-b-lg mt-1 ">
        <span className="flex flex-row-reverse font-irSBold text-gray-800 ">
          {title}
        </span>
        <span className="flex flex-row-reverse text-neutral-500 font-irSans text-sm">
            {miniDescribe}
        </span>
        <div className="flex justify-start items-center flex-row-reverse gap-1 font-irSans text-neutral-500 text-sm">
          <img className="w-[20px]" src={ArticleWriter} alt="" />
          {addUserFullName}
        </div>

       

        <div className="w-full h-1/2  rounded-b-lg flex justify-between items-center flex-row-reverse ">
          <div className=" flex flex-row justify-center gap-[20px] ">
            <div className="w-full h-1/3 flex justify-center items-center">
              { save?
               (<img className="w-[30px] cursor-pointer" src={bookmarkCheck} alt="" onClick={()=> setSave(!save)}/>)
               :(<img className="w-[30px] cursor-pointer  opacity-40" src={bookmark} alt="" onClick={()=> setSave(!save)}/>)
                }
              
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
            { Like?
               (<img className="w-[30px] cursor-pointer" src={likeCheck} alt="" onClick={()=> setLike(!Like)}/>)
               :(<img className="w-[30px] cursor-pointer  opacity-40" src={like} alt="" onClick={()=> setLike(!Like)}/>)
                }
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
              <img className="w-[30px]  opacity-40 cursor-pointer" src={comment} alt=""  onClick={()=> navigate(`/newsDetail/${id}`)}/>
            </div>
          </div>
          <Button value={"اطلاعات بیشتر"} className=" !px-[30px] py-[10px] bg-[#fcbf49] rounded-full flex items-center justify-center font-irSans" onClick={()=> navigate(`/newsDetail/${id}`)}>       
            
          </Button> */}
      {/* </div> */}
    </div>
  );
};

export { Article };
