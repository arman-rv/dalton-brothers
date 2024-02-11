import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";
import { GotoArticle } from "./Components/GoToArticle/GoToArticle";
import { AboutArticle } from "./Components/AboutArticle/AboutArticle";
import { ScrollToTop } from "../../ScrollAnimation/ScrolToTop/ScrollToTop";
import { CourseComments } from "../../Common/Comment/CourseComment/CourseComment";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { ArticleComments } from "./Components/ArticleComent/ArticleComent";
import { Loading } from "../../Common/Loading/Loading";



const ArticleDetail = () => {
  const [ArticleDetail, setArticleDetail] = useState([]);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [change, setChange] = useState(false);


  const getArticleDetail = async () => {
    const result = await basicGet("/News?PageNumber=1&RowsOfPage=20");
    const response = result.news;
    setIsLoading(false);
    setArticleDetail(response);
  };
  useEffect(() => {
    getArticleDetail();
  }, [change]);

  const item = ArticleDetail.filter((item) => item.id === params.id).map(
    (item, index) => (
      <div className="flex flex-col gap-[100px]" key={index}>


        <AboutArticle
          {...item}
          insertDate={item.insertDate.split("T")[0].replaceAll("-", " / ")}
          updateDate={item.updateDate.split("T")[0].replaceAll("-", " / ")}
          setChange={setChange}
          change={change}
        />
        <ArticleIntroduction {...item} />
        <ArticleComments id={item.id} />
        <RelatedArticle addUserFullName={item.addUserFullName} id={item.id} />
      </div>
    )
  );

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
      <div className="">
        <GotoArticle />
        <ScrollToTop />
      </div>
      {item}
    </motion.div>
  );
};

export { ArticleDetail };

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
// import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";
// import { GotoArticle } from "./Components/GoToArticle/GoToArticle";
// import { AboutArticle } from "./Components/AboutArticle/AboutArticle";
// import { ScrollToTop } from "../../ScrollAnimation/ScrolToTop/ScrollToTop";
// import { ArticleComments } from "./Components/ArticleComent/ArticleComent";
// import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";

// const ArticleDetail = () => {
//   const [ArticleDetail, setArticleDetail] = useState([]);
//   const params = useParams();

//   const getArticleDetail = async () => {
//     const result = await basicGet("/News?PageNumber=1&RowsOfPage=10");
//     //console.log(result);
//     const response = result.news;

//     setArticleDetail(response);
//     //console.log(response);
//   };
//   useEffect(() => {
//     getArticleDetail();
//   }, [params.id]);

//   const item = ArticleDetail.filter((item) => item.id === params.id).map(
//     (item, index) => (
//       <div className="flex flex-col gap-[100px]" key={index}>
//         <AboutArticle {...item} />
//         <ArticleIntroduction {...item} />
//         <ArticleComments />
//         <RelatedArticle />
//       </div>
//     )
//   );
//   return (
//     <motion.div
//       className=""
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="">
//         <GotoArticle />
//         <ScrollToTop />
//       </div>
//       {ArticleDetail.map((item, index) => (
//         <div className="flex flex-col gap-[100px]" key={index}>
//           <AboutArticle />
//           <ArticleIntroduction />
//           <ArticleComments id={item.id} />
//           <RelatedArticle />
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export { ArticleDetail };
