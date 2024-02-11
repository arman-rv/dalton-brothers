import React, { useState } from "react";

import message from "../../../../../assets/Images/panel/icons8-message-64.png";
import notif from "../../../../../assets/Images/panel/icons8-notification-64.png";
import NightModeBtn from "../../../../../assets/Images/darkMode.png";
import LightModeBtn from "../../../../../assets/Images/lightMode.png";

import {
  IconMailFilled,
  IconBellFilled,
  IconSettingsFilled,
} from "@tabler/icons-react";
import useColorMode from "../../../../CustomHooks/UseColorMode";
import { ChangePassword } from "../ChangePassword";
import NotificationModal from "./NotificationModal";

const Notification = () => {
  const [modal, setmodal] = useState(false);
  const [notifModal, setnotifModal] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const handleNotif = () => {
    if(notifModal==false){
      setnotifModal(true)
      setmodal(false)
    }
    else{setnotifModal(false)}
  }
  const handleSetting = () => {
    if(modal==false){
      setnotifModal(false)
      setmodal(true)
    }
    else{setmodal(false)}
  }
  return (
    <>
      <div className="w-[100px] flex justify-between items-center gap-6 font-irSans">
        <div className=" w-1/2 h-full relative ">
          {/* <div className=" w-[20px] h-[20px] rounded-full absolute -left-1 -top-1 bg-red-400 text-white flex justify-center items-center text-[10px] z-20">
          2
        </div> */}
          {/* <img src={IconMail} alt="" className="w-[40px] h-[40px] opacity-70"></img> */}
          <IconMailFilled
            strokeWidth={1.4}
            className="w-8 text-mode-700   h-full cursor-pointer "
            onClick={handleNotif}
          ></IconMailFilled>
        </div>
        <div className="w-1/2 h-full relative  ">
          {/* <div className=" w-[20px] h-[20px] rounded-full absolute -left-1 -top-1 bg-green-400 text-white flex justify-center items-center text-[10px] z-20">
          1
        </div> */}
          <IconSettingsFilled
            strokeWidth={1.4}
            className="w-8 text-mode-700   h-full cursor-pointer "
            onClick={handleSetting}
          ></IconSettingsFilled>
        </div>
        <div className=" flex justify-center items-center gap-8">
          <button
            onClick={() => {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }}
            className="w-16 h-10 flex justify-center items-center   mt-[2px]  "
          >
            <img
              alt=""
              src={colorMode === "dark" ? NightModeBtn : LightModeBtn}
              className=""
            />
          </button>
        </div>
      </div>
      <div className="mx-auto transition-all z-50">
        {modal && (
          <ChangePassword setmodal={setmodal} modal={modal}></ChangePassword>
        )}
        {notifModal  && (
          <NotificationModal setnotifModal={setnotifModal} notifModal={notifModal}></NotificationModal>
        )}
      </div>
    </>
  );
};

export { Notification };
