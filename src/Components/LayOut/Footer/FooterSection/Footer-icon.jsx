import React from "react";

import icon1 from "../../../../assets/Images/footer-icon1.png";
import icon2 from "../../../../assets/Images/footer-icon2.png";
import icon3 from "../../../../assets/Images/footer-icon3.png";

const FooterIcon = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <img src={icon1} className="w-8 h-8" alt="" />
      <img src={icon2} className="w-8 h-8" alt="" />
      <img src={icon3} className="w-8 h-8" alt="" />
    </div>
  );
};

export { FooterIcon };
