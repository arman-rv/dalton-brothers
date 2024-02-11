import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import { Button } from "../../Common/buttons";
import { editProfileValidation } from "../../../Core/Validation/yup";
import { createCourse } from "../../../Core/Services/api/masterPanel/createCourse";

import defaultImg from "../../../assets/Images/register-person.png";
import defaulDarktImg from "../../../assets/Images/register-person DarkMode.png";

import { PanelInps } from "../../Common/Inputs/PanelInputs";
import MasterSelectOption from "../MasterSelectOption";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { useSelector } from "react-redux";

const CreateCourse = () => {
  const [personImg, setPersonImg] = useState();
  const [courseList, setCourseList] = useState([]);

  const colorMode = useSelector((state) => state.theme.theme);

  const defaultPicture = colorMode === "dark" ? defaulDarktImg : defaultImg;

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesWithPagination");

    setCourseList(result.courseFilterDtos);
  };

  const onSubmit = async (values) => {
    var formdata = new FormData();
    formdata.append("Title", values.Title);
    formdata.append("Describe", values.Describe);
    formdata.append("MiniDescribe", "<string>");
    formdata.append("Capacity", values.Capacity);
    formdata.append("CourseTypeId", values.CourseTypeId);
    formdata.append("SessionNumber", values.SessionNumber);
    formdata.append(
      "CurrentCoursePaymentNumber",
      values.CurrentCoursePaymentNumber
    );
    formdata.append("TremId", values.TremId);
    formdata.append("ClassId", values.ClassId);
    formdata.append("CourseLvlId", values.CourseLvlId);
    formdata.append("Cost", values.Cost);
    formdata.append("UniqeUrlString", Date.now());
    formdata.append("Image", personImg);
    formdata.append("StartTime", values.StartTime);
    formdata.append("EndTime", values.EndTime);
    formdata.append("GoogleSchema", "<string>");
    formdata.append("GoogleTitle", "<string>");
    formdata.append("CoursePrerequisiteId", values.CoursePrerequisiteId);
    formdata.append("ShortLink", "<string>");
    formdata.append("TumbImageAddress", personImg);
    formdata.append("ImageAddress", personImg);

    const user = await createCourse(formdata);

    //console.log(user);
  };
  const inpArray = [
    {
      title: "عنوان",
      name: "Title",
      placeholder: "...عنوان",
    },
    {
      title: "توضیحات کلی",
      name: "Describe",
      as: "textarea",
      placeholder: "...توضیحات کلی",
    },
    {
      title: "ظرفیت",
      name: "Capacity",
      placeholder: "...ظرفیت",
    },
    {
      title: "تعداد سرفصل ها",
      name: "SessionNumber",
      placeholder: "...تعداد سرفصل ها",
    },
    {
      title: "قیمت",
      name: "Cost",
      placeholder: "...قیمت ",
    },
    {
      title: "پیش پرداخت",
      name: "CurrentCoursePaymentNumber",
      placeholder: "...پیش پرداخت",
    },
    {
      title: "تاریخ شروع",
      name: "StartTime",
      type: "date",
      placeholder: "...تاریخ شروع",
    },
    {
      title: "تاریخ پایان",
      name: "EndTime",
      type: "date",
      placeholder: "...تاریخ پایان",
    },
  ];
  const selArray = [
    {
      title: "ترم برگذاری",
      name: "TremId",
      Children: [
        <option value="1" key={1}>
          ترم پاییز 1402
        </option>,
      ],
    },
    {
      title: "نوع برگذاری",
      name: "CourseTypeId",
      Children: [
        <option value="1" key={1}>
          حضوری
        </option>,
        <option value="2" key={2}>
          حضوری-انلاین
        </option>,
      ],
    },
    {
      title: "شماره کلاس",
      name: "ClassId",
      Children: [
        <option value="1" key={1}>
          کلاس شماره 1
        </option>,
        <option value="2" key={2}>
          کلاس شماره 2
        </option>,
      ],
    },
    {
      title: "سطح کلاس",
      name: "CourseLvlId",
      Children: [
        <option value="1" key={1}>
          مقدماتی
        </option>,
        <option value="2" key={2}>
          متوسط
        </option>,
        <option value="3" key={3}>
          پیشرفته
        </option>,
      ],
    },
    {
      title: "کلاس های پیش نیاز",
      name: "CoursePrerequisiteId",
      Children: [
        courseList &&
          courseList.map((el, index) => (
            <option value={el.courseId} key={index}>
              {el.title}
            </option>
          )),
      ],
    },
  ];
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <Formik
      initialValues={{
        Title: "",
        Describe: "",
        Capacity: "",
        SessionNumber: "",
        Cost: "",
        CurrentCoursePaymentNumber: "",
        StartTime: "00/00/0000",
        EndTime: "00/00/0000",
        TremId: "1",
        CourseTypeId: "2",
        ClassId: "1",
        CourseLvlId: "3",
        CoursePrerequisiteId: "",
      }}
      onSubmit={onSubmit}
      // validationSchema={editProfileValidation}
    >
      <Form className=" w-[900px] flex flex-col font-irSans">
        <div className="w-full h-[650px] overflow-scroll mb-[50px]">
          <div className=" self-center my-5 flex justify-center">
            <label
              htmlFor="pic1"
              className="cursor-pointer w-[100px] rounded-lg"
            >
              <img
                src={
                  personImg ? URL.createObjectURL(personImg) : defaultPicture
                }
                alt=""
                className="w-[150px]"
              />
            </label>
            <input
              className="hidden"
              type="file"
              id="pic1"
              onChange={(e) => setPersonImg(e.target.files[0])}
            />
          </div>
          <div className="flex flex-wrap">
            <div className="  w-1/2  flex flex-col justify-start  ">
              {inpArray.map((el, index) => (
                <PanelInps {...el} key={index} />
              ))}
            </div>
            <div className="  w-1/2  flex flex-col justify-start ">
              {selArray.map((el, index) => (
                <MasterSelectOption {...el} key={index} />
              ))}
            </div>
          </div>
        </div>
        <Button
          value={"ثبت تغیرات"}
          className={
            "bg-pallete-100 dark:bg-DarkPallete-100 dark:text-mode-50 w-[50%] m-auto z-30"
          }
          type={"submit"}
        />
      </Form>
    </Formik>
  );
};

export { CreateCourse };
