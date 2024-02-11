import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Common/buttons";
import { getCurrentUserInfo } from "../../../../../Core/Services/api/studentPanel/getProfileInfo/getCurrentUserInfo";
import { getItem } from "../../../../../Core/Services/common/storage.services";

const Specification = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const user = await getCurrentUserInfo();
    setUser(user);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="w-full h-full border border-gray-200 rounded-[30px] flex flex-row-reverse max-sm:flex-col max-sm:justify-center max-sm:items-center  gap-5 xl:text-xl lg:text-lg whitespace-nowrap font-irSans bg-white dark:bg-mode-900 dark:border-DarkPallete-100">
      <div className=" w-1/3 max-sm:w-full h-full flex flex-col items-end justify-evenly relative pr-3 pt-1">
        <span className="bg-white dark:bg-mode-900 dark:text-mode-50 flex justify-end w-[110px] pr-4  text-xl absolute right-8 -top-4">
          مشخصات
        </span>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg ">
          <p className="  pr-5 text-gray-600 dark:text-mode-200"> نام:{user.fName} </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg ">
          <p className="  pr-5 text-gray-600 dark:text-mode-200"> نام خانوادگی :{user.lName} </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600 dark:text-mode-200">
            شماره تلفن : {JSON.parse(getItem("phoneNumber"))}
          </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600 dark:text-mode-200">شماره ملی:{user.nationalCode} </p>
          <p className=""></p>
        </div>
      </div>
      <div className="w-2/3 max-sm:w-full h-full flex flex-col items-end justify-evenly max-sm:pr-3 ">
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600 dark:text-mode-200">ادرس : {user.homeAdderess} </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg  overflow-auto">
          <p className="  pr-5 text-gray-600 dark:text-mode-200">بیوگرافی :{user.userAbout} </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600 dark:text-mode-200">{user.telegramLink} : تلگرام</p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[63px] mt-[20px] rounded-bl-[30px]">
          {/* <button ></button> */}
          <Button
            className="bg-pallete-100 dark:bg-DarkPallete-100 text-white font-irSBold text-[16px]  w-[60%] h-full rounded-tr-[30px] rounded-bl-[30px]  rounded-br-none rounded-tl-none "
            value={" ویرایش اطلاعات "}
            onClick={() => navigate("/panel/EditProfile")}
          />
        </div>
      </div>
    </div>
  );
};

export { Specification };
