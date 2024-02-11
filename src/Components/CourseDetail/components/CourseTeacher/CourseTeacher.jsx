import React, { useEffect, useState } from "react";

import Master from "../../../Landing/BestMasters/BestMasterSection/Master";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";
import { masterData } from "../../../../Core/Services/data";

const CourseTeacher = ({teacherName}) => {
  // const [Teachers, setTeachers] = useState()
  const data = masterData;
  // const getAllTeachers = async () => {
  //   const teacher = await basicGet("/Home/GetTeachers")
  //   console.log(teacherName,teacher);
  //   const item = teacher.find((item) => item.fullName == teacherName);
  //   console.log(item);
  // }

  // useEffect(() => {
  //   getAllTeachers()
  // }, [])
  

  return (
    <div className=" w-full flex flex-col gap-5 ">
      <p className="text-center py-8 font-bold text-2xl dark:text-mode-50 "> اساتید دوره </p>
      <div>
        <div className=" mx-auto flex  flex-row-reverse flex-wrap justify-center gap-[50px] items-center">
          {data.map((master) => (
            <Master {...master} key={master.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CourseTeacher };
