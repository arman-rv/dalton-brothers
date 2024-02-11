import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import "aos/dist/aos.css";
import AOS from "aos";

import newsImage from "../../../../../Assets/Images/newsImage.jpg";
import articleWriter from "../../../../../Assets/Images/articleWriter.png";

import {
  IconHeart,
  IconHeartFilled,
  IconEye,
  IconStarFilled,
} from "@tabler/icons-react";

import { addLike } from "../../../../../Core/Services/api/course/addLike";
import { deleteArticleLike } from "../../../../../Core/Services/api/course/addSave";
import RatingBox from "../../../../CourseDetail/components/RatingBox";
import { postYourNewsRate } from "../../../../../Core/Services/api/course/courseDetail/courseDetail";

const AboutArticle = ({
  currentView,
  title,
  insertDate,
  addUserFullName,
  currentImageAddressTumb,
  currentImageAddress,
  miniDescribe,
  currentUserIsLike,
  currentLikeCount,
  currentRate,
  updateDate,
  id,
  likeId,
  currentUserSetRate,
  currentUserRateNumber,
  setChange,
  change,
}) => {
  const [Like, setLike] = useState(currentUserIsLike);
  const token = useSelector((state) => state.token.token);

  const handleLike = async () => {
    if (token) {
      if (Like == true) {
        setLike(false);
        const obj = {
          deleteEntityId: likeId,
        };
        const userDeleteArticleLike = await deleteArticleLike(obj);
        setChange(!change)
      } else {
        const userIsLike = await addLike(`/News/NewsLike/${id}`);
        setLike(true);
        setChange(!change)
        return;
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };
  const [NewRating, NewSetRating] = useState();

  const handleStars = async (newRating) => {
    NewSetRating(newRating);
    const rate = await postYourNewsRate(newRating,id)
    console.log(rate,newRating,NewRating);
    setChange(!change)
    toast.success("امتیاز شما به این خبر ثبت شد")
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);



  return (
    // <div className=" 2xl:h-[350px] xl:h-[310px] lg:h-72 md:h-60 h-[690px] md:flex md:justify-between md:flex-row-reverse flex max-md:flex-col max-md:items-center max-md:gap-9 mx-auto mt-16">
    //   <div className="bg-green-900 md:h-full h-52 2xl:w-[500px] xl:w-[400px] lg:w-96 md:w-80 w-[300px] lg:rounded-[50px] rounded-[40px] xl:ml-5 ml-2">
    //     <img
    //       className="w-full h-full rounded-[50px]"
    //       src={currentImageAddressTumb}
    //     ></img>
    //   </div>
    //   <div className=" md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60 flex flex-col justify-center items-center">
    //     <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
    //     <IconUserFilled  className='w-[70%] h-[70%] text-orange-300'/>
    //     </div>
    //     <div className=" flex justify-center h-9 text-gray-700 2xl:text-2xl text-xl font-irSans mt-6 text-center ">
    //       <div className="pr-2"> {addUserFullName} </div>
    //       <div className=""> : نویسنده </div>
    //     </div>
    //   </div>
    //   <div className="  md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60  flex flex-col justify-center items-center">
    //     <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
    //       <p className="  text-orange-300 font-irSBold text-3xl whitespace-break-spaces">{insertDate}</p>
    //     </div>
    //     <p className="h-9 text-gray-700  2xl:text-2xl text-xl font-irSans mt-6 ">
    //       {" "}
    //       تاریخ انتشار{" "}
    //     </p>
    //   </div>
    //   <div className=" md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60 flex flex-col justify-center items-center">
    //     <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
    //       <p className="  text-orange-300 font-irSBold text-3xl"> {currentView} </p>
    //     </div>
    //     <p className="h-9 text-gray-700  2xl:text-2xl text-xl font-irSans mt-6 ">
    //       {" "}
    //        تعداد بازدید{" "}
    //     </p>
    //   </div>
    // </div>
    <div data-aos="fade-up">

    <div className="w-full h-[480px] mt-32 bg-pallete-50 dark:bg-mode-800  flex max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:h-auto max-xl:py-10">
      <div className="w-[40%] max-lg:w-auto  h-full  flex justify-center items-center">
        <div className="w-[660px] h-[640px] max-2xl:w-[500px] max-2xl:h-[500px] max-xl:w-[400px] max-xl:h-[400px] bg-pallete-100 dark:bg-DarkPallete-100 opacity-95 rounded-full flex justify-center items-center">
          <div className=" w-[95%] h-[95%]   bg-gray-300 rounded-full">
            <img
              className="w-full h-full flex justify-center rounded-full items-center"
              src={currentImageAddressTumb != null ?currentImageAddressTumb : newsImage}
              alt="عکسی یافت نشد "
            ></img>
          </div>
        </div>
      </div>
      <div className="w-[60%] max-xl:w-full max-xl:gap-8  h-full  flex flex-col p-7 text-right">
        <div className=" w-full h-[45%] flex flex-col ">
          <h4 className="mb-5 mt-1 text-xl  text-gray-600 dark:text-mode-50 font-irSBold ">
            {title}
          </h4>
          <p className="text-xl text-gray-500 dark:text-mode-200 font-irSans leading-8">
            {miniDescribe}
          </p>
        </div>
        <div className="  w-full h-[17%] flex flex-row-reverse">
          <div className=" w-[110px] h-full flex justify-end items-center">
            <div className="w-[120px] h-[50px]">
              {Like ? (
                <div
                  className="bg-red-300 w-full h-full rounded-full flex justify-center items-center cursor-pointer pl-1"
                  onClick={() => handleLike()}
                >
                  <div className="w-4/5 h-4/5 flex justify-center items-center ">
                    <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-2xl">
                      {" "}
                      {currentLikeCount}{" "}
                    </div>
                    <IconHeartFilled
                      strokeWidth={1.5}
                      className="text-red-500 w-[35px] h-[35px] cursor-pointer "
                    ></IconHeartFilled>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-white w-full h-full rounded-full flex justify-center items-center cursor-pointer pl-1"
                  onClick={() => handleLike()}
                >
                  <div className="w-4/5 h-4/5 flex justify-center items-center">
                    <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-2xl">
                      {" "}
                      {currentLikeCount}{" "}
                    </div>
                    <IconHeart
                      strokeWidth={1.5}
                      className="text-red-500 w-[35px] h-[35px] cursor-pointer"
                    ></IconHeart>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" w-[200px] h-full flex justify-center items-center font-irSans text-2xl">
            <div className="w-1/2 max-md:w-full  h-2/3 flex justify-center items-center ">
              <div className="w-1/3 text-right text-xl flex justify-end items-center pt-[2px] text-mode-700 dark:text-mode-200 ">
                نفر
              </div>
              <div className="w-[40px]  flex justify-center items-center text-xl pt-[2px] text-mode-700 dark:text-mode-200 font-irSans">
                {" "}
                {currentView}{" "}
              </div>
              <IconEye className="w-[50px] h-[50px] text-mode-700 dark:text-mode-200 flex justify-center items-center pl-2"></IconEye>
            </div>
          </div>
          <div className=" w-[160px] h-full flex justify-center items-center font-irSans text-2xl">
            <div className="w-[160px] h-2/3 flex justify-end items-center ">
              <div className="text-gray-600 flex justify-center items-center pt-2 dark:text-mode-200">
                {" "}
                {currentRate}{" "}<p className="text-lg  whitespace-nowrap pl-1 dark:text-mode-200">:امتیاز فعلی خبر </p>
              </div>
              {/* <IconStarFilled
                className="w-1/2 scale-125 text-orange-300 flex justify-center items-center pl-2"
                fill="orange-300"
              ></IconStarFilled> */}
            </div>
          </div>
          {currentUserSetRate ? 
          <div className="flex justify-center items-center pt-2 font-irSans text-gray-600 dark:text-mode-50 text-lg">  {currentUserRateNumber } : امتیازی که شما به این خبر دادید  </div>
          :
          <div  className="flex justify-center items-center text-lg">
          <RatingBox handleStars={handleStars} />
            <p className="font-irSans pl-1 text-gray-600 pt-2 dark:text-mode-50 ">:امتیاز شما به خبر </p>
          </div>}
        </div>
        <div className=" w-full h-[38%] flex flex-row-reverse justify-center items-center max-md:flex-col">
          <div className=" flex w-1/2 max-md:w-full h-full justify-start items-center flex-row-reverse">
            <div className="w-28 h-28 bg-white dark:bg-mode-700 rounded-full mr-1 flex justify-center items-center">
              <img
                src={currentImageAddress !== null ?currentImageAddress :  articleWriter}
                alt="عکسی برای استاد یافت نشد"
                className="w-[60%] h-[60%] flex justify-center items-center text-center mb-2"
              ></img>
            </div>
            <div className="w-80 h-24 flex flex-col mr-5 font-irSans text-xl text-gray-600 dark:text-mode-100">
              <div className="w-full h-1/2  flex items-center justify-end">
                {addUserFullName}
              </div>
              <div className="w-full h-1/2   flex items-center justify-end dark:text-mode-300">
                نویسنده منتخب
              </div>
            </div>
          </div>
          <div className=" flex border h-3/4 my-auto border-gray-400"></div>
          <div className=" flex w-1/2 max-md:w-full h-full pr-5 items-center justify-end font-irSans max-md:justify-center text-xl">
            <div className="w-4/5 max-md:w-full max-md:h-full max-md:mt-6 h-4/5 flex flex-col justify-evenly text-gray-500 gap-3">
              <div className="w-full h-1/4 flex max-md:justify-end">
                <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1 dark:text-mode-300">
                  {insertDate}
                </p>
                <p className="h-full w-[130px] text-right dark:text-mode-300 ">
                  {" "}
                  : انتشار خبر{" "}
                </p>
              </div>
              <div className="w-full h-1/4 flex max-md:justify-end ">
                <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1 dark:text-mode-300">
                  {updateDate}
                </p>
                <p className="h-full w-[130px] text-right dark:text-mode-300">
                  {" "}
                  : آپدیت خبر{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export { AboutArticle };
