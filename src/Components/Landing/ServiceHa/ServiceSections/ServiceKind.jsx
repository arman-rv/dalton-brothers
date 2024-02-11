import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

import { OneServiceComponent } from "../ServiceSections/OneServiceComponent/OneServiceComponent";
import useColorMode from "../../../CustomHooks/UseColorMode";

// import { OneServiceComponent } from "../../Category/CategorySections/OneCategoryComponent/OneCategoryComponent";
import WarrantyIcon from "../../../../assets/Images/WarrantyIcon.png";
import SupportIcon from "../../../../assets/Images/SupportIcon.png";
import communication from "../../../../assets/Images/communication.png";
import JobChances from "../../../../assets/Images/JobChances.png";

import darkWarrantyIcon from "../../../../assets/Images/WarrantyIcon - mode.png";
import darkSupportIcon from "../../../../assets/Images/SupportIcon - mode.png";
import darkcommunication from "../../../../assets/Images/communication - mode.png";
import darkJobChances from "../../../../assets/Images/jobChances-mode.png";
import { getItem } from "../../../../Core/Services/common/storage.services";
import { useSelector } from "react-redux";

const ServiceKind = () => {
  // const [wait, setWait] = useState(500);

  // const [colorMode, setColorMode] = useColorMode();

  const colorMode = useSelector((state) => state.theme.theme);
  

  const data = [
    {
      imgPath: colorMode === "dark" ? darkWarrantyIcon :  WarrantyIcon,
      // darkModeImgPath: darkWarrantyIcon,
      title: "مدرک معتبر",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath:colorMode === "dark" ? darkJobChances : JobChances,
      // darkModeImgPath: darkJobChances,
      title: "فرصت های شغلی",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath:colorMode === "dark" ? darkSupportIcon : SupportIcon,
      // darkModeImgPath: darkcommunication,
      title: "پشتیبانی 24 ساعته",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath:colorMode === "dark" ? darkcommunication : communication,
      // darkModeImgPath: darkJobChances,
      title: "مشاوره",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
  ];

  return (
    <div
      // onMouseEnter={() => setWait(10000000)}
      // onMouseLeave={() => setWait(500)}
      className="m-auto flex justify-center flex-wrap gap-10 mt-4 mb-11 font-irSans"
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
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
        className="lg:hidden mySwiper min-[500px]:w-[300px] min-[500px]:h-[300px] w-[200px] h-[250px]"
      >
        {data.map((service, index) => (
          <SwiperSlide className="bg-center bg-cover" key={index}>
            <OneServiceComponent {...service} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="lg:flex lg:justify-center gap-5 h-[300px] w-[100%] hidden ">
        {data.map((service, index) => (
          <OneServiceComponent {...service} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ServiceKind };
