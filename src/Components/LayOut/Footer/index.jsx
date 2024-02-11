import React from "react";

import { CommentPlace } from "../../Common/Comment/Index";
import { FooterDesc } from "../Footer/FooterSection/Footer-desc";

import illustration from "../../../assets/Images/footer-img.png";

import style from "../layOut.module.css";

const LayFooter = () => {
  return (
    <>
      <FooterDesc style={"pt-[80px] max-xl:pt-[20px]"} />
      <picture className={style.illustration}>
        <img
          className="max-xl:hidden max-xl:invisible "
          src={illustration}
          alt=""
        />
      </picture>
      <div className=" sm:w-[500px] w-[370px]">
        {/* <CommentPlace /> */}
      </div>
    </>
  );
};

export default LayFooter;
