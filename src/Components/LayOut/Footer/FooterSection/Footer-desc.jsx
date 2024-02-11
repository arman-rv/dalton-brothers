import React, { Fragment } from "react";

import FooterTitle from "./Footer-title";
import FooterText from "./Footer-text";
import { FooterIcon } from "./footer-icon";

const FooterDesc = ({ className }) => {
  return (
    <div
      className={`h-full flex flex-row-reverse gap-28  max-md:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-1  ${className}`}
    >
      <div className="py-[50px] px-9 flex flex-col gap-[30px]">
        <FooterTitle title={"بخش های سایت"} />
        <FooterText text={"قوانین و مقررات"} />
        <FooterText text={"مدرسان سایت"} />
        <FooterText text={"درباره ی سایت"} />
        <FooterText text={"ارتباط با ما"} />
      </div>
      <div className="py-[50px] px-9 flex flex-col gap-[30px]">
        <FooterTitle title={"برنامه‌نویسی"} />
        <FooterText text={"اندروید"} />
        <FooterText text={"پی اچ پی "} />
        <FooterText text={"پایتون "} />
        <FooterText text={"جاوا "} />
      </div>

      <div className="py-[50px] px-9 flex flex-col items-center gap-[30px]">
        <FooterTitle title={"راه های ارتباطی"} />
        <FooterText text={"09034893230"} />
        <FooterText text={"dalton-brothers@gmail.com"} />
        <FooterText text={"t.me/daltonBrothers"} />
        <FooterIcon />
      </div>
    </div>
  );
};

export { FooterDesc };
