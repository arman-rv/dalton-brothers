import React from "react";

import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../../../../Common/buttons";
import { HeaderTopText } from "../HeaderText/HeaderTopText";

const HeaderContent = () => {
  return (
    <div className="lg:items-start   h-auto mt-[0px] flex flex-col flex-wrap items-center gap-9 w-4/5 mr-16">
      <HeaderTopText  />
      <HeaderText />
      <Button
        type={"button"}
        children={"شروع سفر"}
        className={"bg-[#fcbf49] text-[#fff] h-10 flex justify-center items-center dark:bg-DarkPallete-100"}
      />
    </div>
  );
};

export { HeaderContent };
