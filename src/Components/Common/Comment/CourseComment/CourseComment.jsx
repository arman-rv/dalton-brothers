import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Comments } from "../Comments/Comments";
import { AddComment } from "../AddComment/AddComment";
import { getComment } from "../../../../Core/Services/api/course/comment/getComment/getComment";
import { ReplayComment } from "../ReplayComment";
import { array } from "yup";
import { useLocation } from "react-router-dom";

const CourseComments = ({ id }) => {
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState([]);
  const [emotion, setEmotion] = useState();
  const [replay, setReplay] = useState(false);
  const [replayedCommentId, setReplayedCommentId] = useState();
  const token = useSelector((state) => state.token.token);

  const getCourseComment = async () => {
    if (location.pathname === `/courseDetail/${id}`) {
      const result = await getComment(`/Course/GetCourseCommnets/${id}`);
      setComment(result);
    }
    if (location.pathname === `/newsDetail/${id}`) {
      const result = await getComment(`/News/GetNewsComments?NewsId=${id}`);
      setComment(result);
    }
  };
  useEffect(() => {
    getCourseComment();
  }, [emotion]);
  return (
    <div className=" w-full py-[30px] flex flex-col  relative">
      {replay && (
        <ReplayComment
          setReplay={setReplay}
          comment={comment}
          replayedCommentId={replayedCommentId}
          setEmotion={setEmotion}
          emotion={emotion}
        />
      )}
      <h2 className="text-center lg:text-2xl text-xl py-[20px] font-irSBold dark:text-DarkPallete-100">
        نظرات
      </h2>
      {!token && (
        <p className="text-center lg:text-xl text-lg py-[20px] text-gray-800 dark:text-mode-50 font-irSans">
          .تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا ثبت
          نام نمایید یا وارد شوید
        </p>
      )}
      <div className="w-full my-[50px] grid grid-col justify-items-center gap-12">
        <div className={`w-fit h-[600px] overflow-scroll border rounded-[20px] grid grid-col justify-items-end gap-12  pt-[50px] ${comment.length == 0 && "h-5 border-none"}`}>
          {/* each comment */}
          {comment.length == 0 ? 
          <div className="flex font-irSans lg:text-2xl text-xl items-center justify-end text-gray-700  xl:right-[39%] lg:right-[34%] md:right-[30%] sm:right-[25%] right-[21%] top-48 dark:text-mode-50">تاکنون کامنتی در این مورد ثبت نشده  </div>
          :
           comment.map((el, index) => (
            <Comments
              {...el}
              key={index}
              setEmotion={setEmotion}
              setReplay={setReplay}
              setReplayedCommentId={setReplayedCommentId}
            />
          ))}
        </div>
        <button
          className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl font-irSBold bg-white border-2 border-pallete-100 dark:border-DarkPallete-100 dark:bg-mode-900 m-auto rounded-full cursor-pointer text-pallete-100 dark:text-DarkPallete-100"
          onClick={() => setModal(!modal)}
        >
          {modal == true ? " بیخیال  " : " ثبت نظر"}
        </button>
        <div className="mx-auto transition-all">
          {modal == true && <AddComment id={id} setEmotion={setEmotion} emotion={emotion} modal={modal} setModal={setModal}/>}
        </div>
      </div>
    </div>
  );
};

export { CourseComments };
