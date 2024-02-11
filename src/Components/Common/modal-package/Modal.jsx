import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "aos/dist/aos.css";
import AOS from "aos";

const ModalComponent = ({ isOpen, closeModal, children , title , style }) => {

  useEffect(() => {
    AOS.init({
      duration: 200, // Animation duration in milliseconds
      offset: 400, // Offset (in pixels) from the original trigger point
      easing: "ease", // Animation easing
      // Other options...
    });
  }, []);


  return (
    <ReactModal
      // className="rounded-[10px] border-none  w-[70%] h-[70%]  "
      // className-overlayClassName={""}
      style = {style}
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false} // to prevent a11y warnings, adjust as needed
      
    >
      <div className="flex justify-between items-center h-20 font-irSans flex-row-reverse px-2 mb-5 dark:text-mode-50" >
        <p>{title} </p>
        <button
          className="bg-pallete-100 dark:bg-DarkPallete-100 py-2 px-5 rounded-full font-irSans text-mode-50"
          onClick={closeModal}
        >
          {" "}
          خروج
        </button>
      </div>
      {children}
    </ReactModal>
  );
};

export { ModalComponent };
