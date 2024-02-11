import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";
// import { Article } from "./ArticleSections/Article";
import { Article } from "./ArticleSections/Article/Article";
// import { newsData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { basicGet } from "../../Core/Services/api/course/courseList/courseList";
import { Loading } from "../Common/Loading/Loading";

const ArticleNews = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [Emotion, setEmotion] = useState();


  const handlePageClick = (data) => {
    const numberOfCurrentPage = data.selected + 1;
    setCurrentPage(numberOfCurrentPage);
  };
  const getArticles = async () => {
    const result = await basicGet(`/News?PageNumber=${currentPage}&RowsOfPage=${postsPerPage}`);
    setIsLoading(false);

    const response = result.news;
    console.log(result);
    setArticleList(response);
    setTotalCount(result.totalCount);

  };
  const numberOfPage = Math.ceil(totalCount / postsPerPage);
  useEffect(() => {
    getArticles();
  }, [currentPage,Emotion]);

  if (isLoading) {
    return <Loading style={""}  />;
  }

  return (
    <motion.div
      className="w-100 flex flex-col gap-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <LayOutHeaders topic={"اخبار و مقالات"} /> */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-9 gap-y-7 scale-x-90 mt-10">
        {articleList?.map((news, index) => (
          <Article
            {...news}
            key={index}
            insertDate={news.insertDate.split("T")[0].replaceAll("-", "/")}
            updateDate={news.updateDate.split("T")[0].replaceAll("-", "/")}
            setEmotion={setEmotion}
            Emotion={Emotion}
          />
        ))}
      </div>
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
        nextLinkClassName="p-2 scale-120"
        previousLinkClassName="p-2 scale-120"
        pageLinkClassName="bg-gray-200  mx-1 px-[14px] py-2 rounded-md"
        breakLinkClassName="mx-1 p-2"
        activeLinkClassName="bg-pallete-100 dark:bg-DarkPallete-100 text-white"
      ></ReactPaginate>
      <ScrollToTop />
    </motion.div>
  );
};

export { ArticleNews };
