import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { MyCourse } from "../PanelCourses/Component/MyCourse/MyCourse";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { useDispatch, useSelector } from "react-redux";

const PanelCoursesList = () => {
  const search = useSelector((state) => state.search.search);
  const [totalCount, setTotalCount] = useState();
  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const handlePageClick = (data) => {
    const numberOfCurrentPage = data.selected + 1;
    setCurrentPage(numberOfCurrentPage);
  };

  const getCount = async () => {
    const Count = await basicGet("/Home/GetCoursesWithPagination");
    setTotalCount(Count.totalCount);
  };

  const getSearch = search ? `Query=${search}` : "";

  const getCourses = async () => {
    const result = await basicGet(
      `/Home/GetCoursesWithPagination?${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}`
    );
    setCourseList(result.courseFilterDtos);
  };
  const numberOfPage = Math.ceil(totalCount / postsPerPage);

  useEffect(() => {
    getCourses();
    getCount();
  }, []);
  useEffect(() => {
    getCourses();
  }, [search, currentPage]);

  return (
    <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
      <div className=" w-full xl:h-[100px] h-[60px] flex xl:justify-evenly justify-start items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
        <div className="w-[80px] xl:h-[50px] h-[40px] text-center text-gray-600 dark:text-mode-50">
          تصویر
        </div>
        <div className="w-[210px] xl:h-[50px] h-[40px] text-center text-gray-600 dark:text-mode-50">
          نام دوره
        </div>
        <div className="w-[170px] xl:h-[50px] h-[40px] text-center text-gray-600 dark:text-mode-50">
          مدرس
        </div>
        {/* <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
        سطح دوره   
        </div> */}
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600  dark:text-mode-50  max-xl:hidden">
          وضعیت
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600 dark:text-mode-50">
          قیمت
        </div>
        <div className="w-[60px] xl:h-[50px] h-[40px] text-center text-gray-600  dark:text-mode-50"></div>
      </div>
      <div className="w-full h-[500px] pt-3 flex flex-col gap-1">
        {courseList && courseList.length > 0 ? (
          courseList.map((item, index) => (
            <MyCourse
              courseName={item.title}
              courseMaster={item.teacherName}
              term={item.levelName}
              state={item.statusName}
              price={item.cost}
              key={index}
              courseId={item.courseId}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <div className=" w-full h-[90px]">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={numberOfPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={
            "flex justify-center mx-auto text-xl items-center p-1"
          }
          pageClassName="mx-1"
          nextClassName="mx-1 p-2 "
          previousClassName="mx-1 p-2 "
          nextLinkClassName="p-2 scale-120 "
          previousLinkClassName="p-2 scale-120"
          pageLinkClassName="bg-gray-200 mx-1 px-[14px] py-2 rounded-md"
          breakLinkClassName="mx-1 p-2"
          activeLinkClassName="bg-pallete-100 dark:bg-DarkPallete-100 text-white"
        ></ReactPaginate>
      </div>
    </div>
  );
};

export { PanelCoursesList };
