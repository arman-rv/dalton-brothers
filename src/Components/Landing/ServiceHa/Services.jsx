import React, { useEffect } from "react";

import { Title } from "../../Common/Title/Title";
import { ServiceKind } from "./ServiceSections/ServiceKind";

const Services = () => {




  return (


    <div dir="rtl" className="w-4/5 mx-auto mt-[80px] h-[420px] font-irSBold" >
      <Title
        topic={" خدمات"}
        style={
          " text-[#fcbf49] text-center font-irSans justify-center text-3xl dark:text-DarkPallete-100 dark:font-semibold"
        }
      />
      <ServiceKind />
    </div>
  );
};

export { Services };
