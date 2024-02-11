import React from "react";
import { Title } from "../../Common/Title/Title";
import { CategoryKind } from "./CategorySections/CategoryKind/CategoryKind";
import { useSelector } from "react-redux";

const Category = () => {

  const colorMode = useSelector((state) => state.theme.theme);


  return (
    <div
      style={{ direction: "rtl" }}
      className="w-4/5 m-auto my-2 font-irSans border border-transparent"
    >
      <Title topic={'دسته بندی ها'} style={'text-[#fcbf49] justify-center'}/>
      <CategoryKind />
    </div>
  );
};

export { Category };
