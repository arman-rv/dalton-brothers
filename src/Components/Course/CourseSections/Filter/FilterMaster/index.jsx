import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onBahChange,
  onNazChange,
  onAsgChange,
  onEsfChange,
  onMasterElseChange,
} from "../../../../../Redux/Filter/masterFilter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

import style from "../Filter.module.css";
import { onteacherIdChange } from "../../../../../Redux/teacherId";
// import { onteacherIdChange } from "../../../Redux/teacherId";


const FilterMaster = ({setTeacherId}) => {
  const store = useSelector((state) => state.masterFilter);
  const [teacher, setteacher] = useState()
  const dispatch = useDispatch();

   dispatch(onteacherIdChange(teacher))


  // ------------------------------------------------------------ handle filter for ostad bahr ------------------------------------------------------------
  const handleBah = () => {
    // dispatch(onteacherIdChange(12))
    setteacher(12)
    if (store.bah === "") {
      dispatch(onBahChange("استاد محمد بحرالعلوم"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "استاد محمد بحرالعلوم" &&
      store.naz === "" &&
      store.asg === "" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }

    dispatch(onBahChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad nazary ------------------------------------------------------------
  const handleNaz = () => {
    // dispatch(onteacherIdChange(2))
    setteacher(2)
    if (store.naz === "") {
      dispatch(onNazChange("استاد حامد نظری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "استاد حامد نظری" &&
      store.asg === "" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onNazChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad asghari ------------------------------------------------------------
  const handleAsg = () => {
    setteacher(1)
    // dispatch(onteacherIdChange(1))
    if (store.asg === "") {
      dispatch(onAsgChange("استاد مهدی اصغری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "" &&
      store.asg === "استاد مهدی اصغری" &&
      store.esf === ""
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onAsgChange(""));
  };

  // ------------------------------------------------------------ handle filter for ostad hexa  ------------------------------------------------------------
  const handleEsf = () => {
    // dispatch(onteacherIdChange(9))
    setteacher(9)
    if (store.esf === "") {
      dispatch(onEsfChange("استاد محسن اسفندیاری"));
      dispatch(onMasterElseChange(false));
      return;
    }
    if (
      store.bah === "" &&
      store.naz === "" &&
      store.asg === "" &&
      store.esf === "استاد محسن اسفندیاری"
    ) {
      dispatch(onMasterElseChange(true));
    }
    dispatch(onEsfChange(""));
  };

  return (
    <>
      <div className="2xl:gap-[40px] xl:flex w-full 2xl:flex flex-row flex-wrap gap-[20px] justify-around font-irSans text-[#383838] hidden">
        {/*------------------------------------------------------------ ostad bahr ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="master"
          id={`masterBah`}
          onClick={()=> handleBah()}
          className={`hidden ${style.masterInp}`}
        />
        <label
          htmlFor={`masterBah`}
          className={`w-[190px] h-[190px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
        >
          <h1 className="mx-auto"> محمد جواد-سعدالهی</h1>
        </label>
        {/*------------------------------------------------------------ ostad nazary ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="master"
          id={`masterNaz`}
          onClick={handleNaz}
          className={`hidden ${style.masterInp}`}
        />
        <label
          htmlFor={`masterNaz`}
          className={`w-[190px] h-[190px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
        >
          <h1 className="mx-auto">unknown F-unknown L </h1>
        </label>
        {/*------------------------------------------------------------ ostad asghary ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="master"
          id={`masterAsg`}
          onClick={handleAsg}
          className={`hidden ${style.masterInp}`}
        />
        <label
          htmlFor={`masterAsg`}
          className={`w-[190px] h-[190px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
        >
          <h1 className="mx-auto">استاد اصغری</h1>
        </label>
        {/*------------------------------------------------------------ ostad esfandiary ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="master"
          id={`masterEsf`}
          onClick={handleEsf}
          className={`hidden ${style.masterInp}`}
        />
        <label
          htmlFor={`masterEsf`}
          className={`w-[190px] h-[190px] flex items-end pb-[10px] border-[5px] ${style.masterLabel}`}
        >
          <h1 className="mx-auto"> Hexa-Squad</h1>
        </label>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}
        navigation={false}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        className="xl:hidden md:w-[300px] md:h-[300px] w-[200px] h-[200px] mySwiper"
      >
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ ostad bahr ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="master"
            id={`masterBahResPonsive`}
            onClick={handleBah}
            className={`hidden ${style.masterInpResponsive}`}
          />
          <label
            htmlFor={`masterBahResPonsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] ${style.masterLabelResponsive}`}
          >
            <h1 className="mx-auto">محمد جواد-سعدالهی </h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ ostad nazary ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="master"
            id={`masterNazResPonsive`}
            onClick={handleNaz}
            className={`hidden ${style.masterInpResponsive}`}
          />
          <label
            htmlFor={`masterNazResPonsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] ${style.masterLabelResponsive}`}
          >
            <h1 className="mx-auto">unknown F-unknown L </h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ ostad asghary ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="master"
            id={`masterAsgResPonsive`}
            onClick={handleAsg}
            className={`hidden ${style.masterInpResponsive}`}
          />
          <label
            htmlFor={`masterAsgResPonsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] ${style.masterLabelResponsive}`}
          >
            <h1 className="mx-auto">استاد اصغری</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ ostad esfandiary ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="master"
            id={`masterEsfResPonsive`}
            onClick={handleEsf}
            className={`hidden ${style.masterInpResponsive}`}
          />
          <label
            htmlFor={`masterEsfResPonsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] ${style.masterLabelResponsive}`}
          >
            <h1 className="mx-auto">Hexa-Squad </h1>
          </label>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export { FilterMaster };
