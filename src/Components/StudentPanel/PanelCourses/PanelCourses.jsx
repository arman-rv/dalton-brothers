import React, { useState, useEffect } from "react";
import { MyCourse } from "./Component/MyCourse/MyCourse";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { useDispatch, useSelector } from "react-redux";
import { onMoneyChange } from "../../../Redux/money";
import toast from "react-hot-toast";
import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
import { Loading } from "../../Common/Loading/Loading";
import { useLocation } from "react-router-dom";

const PanelCourses = () => {
  const [courseListCount, setCourseListCount] = useState([]);
  const [courseList, setCourseList] = useState(null);
  const [reservedCourses, setReservedCourses] = useState([]);
  const [courseDeleteId, setCourseDeleteId] = useState("");
  const [allCosts, setAllCosts] = useState("پرداخت شد");
  const payCheck = getItem("payCheck");
  const money = useSelector((state) => state.money.money);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  const getCount = async () => {
    const count = await basicGet("/SharePanel/GetMyCoursesReserve");
    const filteredCount = count.filter((el) => el.accept === false);
    console.log(filteredCount);
    setCourseListCount(filteredCount);
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
    setIsLoading(false);
    if (location.pathname !== "/panel/PanelCourses") {
      setIsLoading(true);
    }
  };
  const getCourseDetail = () => {
    if (courseList) {
      const reservedCoursesArray =
        courseListCount.length !== 0
          ? courseListCount.map((el) =>
              courseList.filter((ele) => ele.courseId === el.courseId)
            )
          : [];
      const reservedCourses = reservedCoursesArray.map((el) => el[0]);
      const afterDelete =
        reservedCourses.length !== 0
          ? reservedCourses.filter((el) => el.courseId !== courseDeleteId)
          : [];
      setReservedCourses(afterDelete ? afterDelete : []);
    }
  };
  function SumCalculator() {
    if (reservedCourses && !payCheck) {
      const costArray = reservedCourses.map((el) => el.cost);
      const numbers = costArray;
      const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setAllCosts(sum);
    }
  }

  const handlePay = () => {
    if (money >= allCosts) {
      toast.success("پرداخت با موفقیت انجام شد");
      dispatch(onMoneyChange(money - allCosts));
      setAllCosts("پرداخت شد");
      setItem("payCheck", true);
    } else if (allCosts > money) {
      toast.error("شارژ حساب شما به اندازه ی کافی نیست");
    }
  };
  useEffect(() => {
    getCount();
  }, []);
  useEffect(() => {
    getCourseDetail();
  }, [courseList, courseDeleteId]);
  useEffect(() => {
    SumCalculator();
  }, [reservedCourses]);

  if (isLoading) {
    return <Loading style={"2xl:mr-[400px] xl:mr-[200px] "} />;
  }
  return (
    <>
      {reservedCourses.length !== 0 ? (
        <>
          <div className=" flex flex-row-reverse items-start gap-16 justify-between w-full pt-[10px]  max-2xl:flex-col max-2xl:justify-center max-2xl:items-center">
            <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
              <div className=" w-full h-[100px] flex xl:justify-evenly justify-start items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
                <div className="w-[80px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  تصویر
                </div>
                <div className="w-[210px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  نام دوره
                </div>
                <div className="w-[170px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  مدرس
                </div>
                <div className="w-[130px] h-[50px] text-center text-gray-600 dark:text-mode-200 max-xl:hidden">
                  وضعیت
                </div>
                <div className="w-[130px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  قیمت
                </div>
                <div className="w-[150px] h-[50px] text-center text-gray-600 "></div>
              </div>
              <div className="w-full min-h-[200px] max-2xl:h-auto  h-[500px] overflow-scroll pt-3 flex flex-col gap-1">
                {reservedCourses.map((item, index) => (
                  <MyCourse
                    coursePic={item.tumbImageAddress}
                    courseName={item.title}
                    courseMaster={item.teacherName}
                    term={item.statusName}
                    state={item.levelName}
                    price={item.cost}
                    key={index}
                    courseId={item.courseId}
                    reserveId={courseListCount[index].reserveId}
                    setCourseDeleteId={setCourseDeleteId}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-[10px] font-irSBold text-[#636363] mt-[160px] max-2xl:mt-[20px]">
              <div className=" rounded-lg w-[300px] h-[50px] flex flex-wrap flex-row-reverse gap-[5px] justify-center items-center bg-[#fff2da] dark:bg-DarkPallete-50">
                <span>مجموع</span>:<span>{allCosts}</span>
              </div>
              <button
                className="w-full h-[50px] bg-pallete-100 transition-all hover:bg-[#f59e0b] dark:bg-DarkPallete-100 text-mode-50 rounded-lg"
                onClick={handlePay}
              >
                پرداخت
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[1200px] max-xl:w-[600px] max-lg:w-auto h-[500px] flex justify-center items-center">
          <p className="font-irSBold text-[#636363] bg-[#fff2da] dark:bg-mode-800 dark:text-mode-50 w-[500px] h-[200px] flex justify-center items-center rounded-lg">
            دوره ای برای نمایش وجود ندارد برای رزرو دوره به لیست دوره ها بروید
          </p>
        </div>
      )}
    </>
  );
};

export { PanelCourses };
