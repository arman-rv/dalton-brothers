import React, { useEffect, useState } from "react";

import security from "../../../../../assets/Images/categoy/security.png";
import DarkModeSecurity from "../../../../../assets/Images/categoy/modeSecurity.png";
import web from "../../../../../assets/Images/categoy/web.png";
import DarkModeWeb from "../../../../../assets/Images/categoy/modeWeb.png";
import it from "../../../../../assets/Images/categoy/it.png";
import DarkModeIt from "../../../../../assets/Images/categoy/modeIt.png";
import graphic from "../../../../../assets/Images/categoy/graphic.png";
import DarkModegraphic from "../../../../../assets/Images/categoy/modeGraphic.png";
import computer from "../../../../../assets/Images/categoy/computer.png";
import DarkModecomputer from "../../../../../assets/Images/categoy/modeComputer.png";
import ai from "../../../../../assets/Images/categoy/ai.png";
import DarkModeai from "../../../../../assets/Images/categoy/modeAi.png";
import { OneCategoryComponent } from "../OneCategoryComponent/OneCategoryComponent";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";
import { useSelector } from "react-redux";

const CategoryKind = () => {
  const [category, setCategory] = useState();

  const colorMode = useSelector((state) => state.theme.theme);

  const data = category && [
    {
      imgPath: colorMode === "dark" ? DarkModeWeb : web,
      title: category[0]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModecomputer : computer,
      title: category[1]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModeIt : it,
      title: category[2]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModeSecurity : security,
      title: category[3]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModegraphic : graphic,
      title: category[4]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModeai : ai,
      title: category[5]?.techName,
    },
    {
      imgPath: colorMode === "dark" ? DarkModegraphic : graphic,
      title: category[6]?.techName,
    },
  ];
  const getCategory = async () => {
    const result = await basicGet("/Home/GetTechnologies");
    setCategory(result);
    // console.log(result);
  };

  // category && //console.log(category[0]);
    useEffect(() => {
      getCategory();
    }, []);
  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-10 mb-16">
      {data &&
        data.map((service, index) => (
          <OneCategoryComponent {...service} key={index} />
        ))}
    </div>
  );
};

export { CategoryKind };
