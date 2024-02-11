import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import AOS from "aos";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "../Common/Comment/CourseComment/CourseComment";
import { GoToCorse } from "./components/GoToCorse/GoToCorse";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { getDetail } from "../../Core/Services/api/course/courseDetail/courseDetail";
import Master from "../Landing/BestMasters/BestMasterSection/Master";
import { Loading } from "../Common/Loading/Loading";
import RatingBox from "./components/RatingBox";

const CourseDetail = () => {
  const [CourseDetail, setCourseDetail] = useState([]);
  const [change, setChange] = useState(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const getCourseDetail = async () => {
    const result = await getDetail(
      `/Home/GetCourseDetails?CourseId=${params.id}`
    );
    // console.log(result);
    setIsLoading(false);

    setCourseDetail([result]);
  };
  useEffect(() => {
    getCourseDetail();
  }, [change]);

  if (isLoading) {
    return <Loading style={""} />;
  }

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-5">
        <GoToCorse />
        <ScrollToTop />
      </div>
      {CourseDetail.map((item, index) => (
        <div className=" flex flex-col gap-[100px]" key={index}>
          
          <AboutCourse
            {...item}
            setChange={setChange}
            change={change}
            startTime={item.startTime?.split("T")[0].replaceAll("-", " / ")}
            endTime={item.endTime?.split("T")[0].replaceAll("-", " / ")}
          />
            
          <CourseIntroduction {...item} />
          <Needs />
          {/* masters on course details page */}
          {/* <Master teacherName={item.teacherName}/> */}
          <CourseComments id={item.courseId} />
          <RelatedCourses
            teacherName={item.teacherName}
            courseId={item.courseId}
          />
        </div>
      ))}
    </motion.div>
  );
};

export { CourseDetail };
