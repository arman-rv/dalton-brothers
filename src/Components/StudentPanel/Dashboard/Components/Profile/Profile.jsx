import React, { useEffect, useState, useRef } from "react";
import userImage from "../../../../../assets/Images/panel/user.png";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { changePic } from "../../../../../Core/Services/api/studentPanel/selectMainPicture";
import { deletePic } from "../../../../../Core/Services/api/studentPanel/deletePic";
import { getItem } from "../../../../../Core/Services/common/storage.services";

const Profile = () => {
  const [UserFName, setUserFName] = useState();
  const [UserLName, setUserLName] = useState();
  const [imgPath, setImgPath] = useState(null);
  const [imgCount, setImgCount] = useState(null);
  const [openSlider, setOpenSlider] = useState(false);
  const [selModal, setSelModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  const getProfile = async () => {
    const user = await basicGet("/SharePanel/GetProfileInfo");
    setImgPath(user.currentPictureAddress);
    setImgCount(user.userImage);

    const userName = await basicGet(
      "/SharePanel/GetProfileInfo"
    ) 
    setUserFName(userName.fName)
    setUserLName(userName.lName)
  };

  const handlePick = async (i) => {
    const selectedPic = imgCount.find(
      (el) =>
        `https://acadapi.etacorealtime.ir/Pictures/ProfileImageThumbnail/${el.pictureName}` ===
        i
    );
    const formdata = new FormData();
    formdata.append("ImageId", selectedPic.id);
    const result = await changePic(formdata);
    getProfile();
  };
  const handleDelete = async (i) => {
    const selectedPic = imgCount.find(
      (el) =>
        `https://acadapi.etacorealtime.ir/Pictures/ProfileImageThumbnail/${el.pictureName}` ===
        i
    );
    const formdata = new FormData();
    formdata.append("DeleteEntityId", selectedPic.id);
    const result = await deletePic(formdata);
    getProfile();
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className=" w-[270px] max-sm:w-[180px] h-[70px] flex justify-center items-center gap-3 font-irSBold">
      <h3 className=" text-lg text-gray-500 "> {UserFName} {UserLName}</h3>
      <div
        className="w-[60px] h-[60px] rounded-full bg-[#fcbe49] dark:bg-[#15a349] flex justify-center items-center overflow-hidden "
        onClick={() => setOpenSlider(true)}
      >
        <img className="w-[45px] h-[45px] rounded-full" src={imgPath} alt="" />
      </div>
      {openSlider && (
        <div className="absolute top-[10%] left-[20%] w-[60vw] h-[600px] bg-[#f1f5f9] z-40 rounded-lg">
          <span
            className="absolute right-0 top-0 cursor-pointer w-[50px] h-[50px] flex justify-center items-center border-2"
            onClick={() => setOpenSlider(false)}
          >
            x
          </span>
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff  ",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation]}
              className="h-[70%] w-[95%] mt-[50px] mx-auto"
            >
              {imgCount &&
                imgCount.map((el, index) => (
                  <SwiperSlide
                    className="flex justify-center items-center"
                    key={index}
                  >
                    <img
                      src={`https://acadapi.etacorealtime.ir/Pictures/ProfileImageThumbnail/${el.pictureName}`}
                      className="block max-w-full max-h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              // freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation]}
              className="h-[20%] box-border py-[10px] px-[20px]"
            >
              {imgCount &&
                imgCount.map((el, index) => (
                  <SwiperSlide
                    className="w-[25%] h-full opacity-40 cursor-pointer hover:opacity-100 transition-all duration-500"
                    key={index}
                    onClick={(e) => {
                      setSelectedPicture(e.target.attributes.src.nodeValue);
                      setSelModal(true);
                    }}
                  >
                    <img
                      src={`https://acadapi.etacorealtime.ir/Pictures/ProfileImageThumbnail/${el.pictureName}`}
                      className="block w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </>
          {selModal && (
            <div className="bg-[#fff2da] w-[50%] h-[300px] absolute bottom-[30%] left-[25%] z-50 flex flex-col items-center px-[30px] py-[20px] gap-[20px] text-[#6b7280] pt-[40px]">
              <span
                className="absolute right-0 top-0 cursor-pointer w-[50px] h-[50px] flex justify-center items-center border-2"
                onClick={() => setSelModal(false)}
              >
                x
              </span>
              :ویرایش عکس
              <button
                className="py-[15px] w-full bg-[#4ade80] rounded-3xl text-white mt-[50px]"
                onClick={() => {
                  setSelModal(false);
                  handlePick(selectedPicture);
                }}
              >
                انتخاب به عنوان عکس اصلی
              </button>
              <button
                className="py-[15px] w-full bg-[#f87171] rounded-3xl text-white"
                onClick={() => {
                  setSelModal(false);
                  handleDelete(selectedPicture);
                }}
              >
                حذف
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Profile };
