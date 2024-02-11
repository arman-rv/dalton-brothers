import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import wallet from "../../../../../assets/Images/panel/1.png";
import { onMoneyChange } from "../../../../../Redux/money";
import {
  getItem,
  setItem,
} from "../../../../../Core/Services/common/storage.services";

const YourStock = () => {
  const dispatch = useDispatch();
  const currentAmount = JSON.parse(getItem("newAmount"));
  dispatch(onMoneyChange(currentAmount));
  const money = useSelector((state) => state.money.money);
  const handleIncrease = () => {
    const newAmount = currentAmount + 100000;
    //console.log(currentAmount);
    setItem("newAmount", newAmount);
    dispatch(onMoneyChange(newAmount));
    if (newAmount === 1000000)
      toast.custom(
        <div
          className="bg-blue-200 px-5 py-4 rounded-xl font-irSans text-xl"
          duration="700"
        >
          بسه دیگه برو خونتون
        </div>
      );
    if (newAmount === 1500000)
      toast.custom(
        <div
          className="bg-blue-200 px-5 py-4 rounded-xl font-irSans text-xl"
          duration="700"
        >
          {" "}
          چه خبرته بانک نیومدی که{" "}
        </div>
      );
    if (newAmount === 2000000)
      toast.custom(
        <div
          className="bg-blue-200 px-5 py-4 rounded-xl font-irSans text-xl"
          duration="700"
        >
          {" "}
          خیلی خری{" "}
        </div>
      );
  };
  return (
    <div className=" w-full h-full border border-gray-200 rounded-[30px] flex flex-row-reverse  whitespace-nowrap font-irSans relative bg-white dark:bg-mode-900 dark:border-DarkPallete-100">
      <div className=" w-1/2  h-full flex flex-col justify-between   ">
        <span className=" bg-white dark:bg-mode-900 dark:text-mode-50 w-[120px]  flex justify-end items-center pr-4  text-lg absolute right-6 -top-4 ">
          موجودی شما
        </span>
        <div className=" w-[150px] flex h-[60px] gap-1 xl:text-xl lg:text-lg justify-center items-center pt-8">
          <p className="text-gray-600 dark:text-mode-200"> تومان </p>
          <p className="text-gray-600 dark:text-mode-50 ">{money ? money : 0}</p>
        </div>
        <div className=" w-full h-[70px] flex-col items-center ">
          <p className=" w-full text-center text-sm text-gray-500 dark:text-mode-300 ">نوع شارژ</p>
          <div className="w-[90%] h-[35px] flex justify-between items-center  mt-5 text-center  ">
            <div className="bg-mode-200 h-full w-[45%] rounded-r-md rounded-l-[30px] flex justify-center items-center text-sm ">
              دلار
            </div>
            <div className="bg-pallete-100 dark:bg-DarkPallete-100 dark:text-mode-50 h-full w-[45%] rounded-l-md rounded-r-[30px] flex justify-center items-center text-sm">
              تومان
            </div>
          </div>
        </div>
        <div className=" w-full  h-[60px] mt-[20px] lg:text-right text-center rounded-bl-[30px] flex justify-end">
          <button
            className="bg-[#fcbf49] dark:bg-DarkPallete-100  lg:w-full w-[100%] h-full rounded-tl-[30px] rounded-br-[30px]     flex justify-center items-center text-[16px] text-white font-irSBold"
            onClick={() => handleIncrease()}
          >
            شارژ حساب
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:flex  ">
        <img
          src={wallet}
          alt=""
          className="w-[120px] h-[280px] absolute bottom-[-2px] left-0"
        ></img>
      </div>
    </div>
  );
};

export { YourStock };
