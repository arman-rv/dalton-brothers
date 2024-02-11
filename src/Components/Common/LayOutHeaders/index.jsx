import React from "react";

import { Link } from "react-router-dom";
import {NavLinks} from "../Links/NavLinks/NavLinks";
import { Title } from "../Title/Title";

const LayOutHeaders = ({ topic }) => {
  return (
    <div className="w-[90%] mx-auto flex flex-row-reverse justify-between items-center">
      <Title
        topic={topic}
        style={"text-[#6b7280] font-bold  min-[500px]:text-xl text-base"}
      />
      <NavLinks
        path={"/"}
        Children={"بازگشت به صفحه ی اصلی"}
        className="bg-[#334155] text-[#fff] min-[500px]:text-xl text-base"
      />
    </div>
  );
};

export { LayOutHeaders };
