import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import user from "../../../../assets/Images/panel/user.png";
import {
  IconEdit,
  IconThumbUp,
  IconMessageCircle2,
  IconThumbDown,
} from "@tabler/icons-react";
import {
  addLike,
  deleteLike,
} from "../../../../Core/Services/api/course/addLike";
import { CommentReplays } from "../CommentReplays";
import { useLocation } from "react-router-dom";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";
import { EditCommentCourse } from "../../EditCommentCourse";

const Comments = ({
  className,
  author,
  describe,
  title,
  likeCount,
  disslikeCount,
  dissLikeCount,
  id,
  currentUserEmotion,
  acceptReplysCount,
  setEmotion,
  emotion,
  pictureAddress,
  setReplay,
  setReplayedCommentId,
  courseId,
  newsId,
  currentUserIsLike,
  currentUserIsDissLike,
  currentUserLikeId,
}) => {
  const [like, setLike] = useState();
  const [DisLike, setDisLike] = useState();
  // const [replay, setreplay] = useState(false);
  const [fName, setfName] = useState();
  const [lName, setlName] = useState();
  const [isAuthor, setisAuthor] = useState(false);
  const [modal, setModal] = useState(false);

  const token = useSelector((state) => state.token.token);

  const isYourComment = async () =>{
    const result = await basicGet("/SharePanel/GetProfileInfo")
    setfName(result.fName)
    setlName(result.lName)

    const user = fName + "-" + lName
    if(author == user){
      console.log("is yours");
      setisAuthor(true);
    }
    else{
      console.log("not for you");
    }
  }

  const handleLike = async () => {
    if (token) {
      if (like == false) {
        const userLike = await addLike(
          `/Course/AddCourseCommentLike?CourseCommandId=${id}`
        );
        setLike(true);
        setDisLike(false);
        setEmotion(true);
      } else {
        const userDeleteLike = await deleteLike(
          `/Course/DeleteCourseCommentLike?CourseCommandId=${currentUserLikeId}`
        );
        console.log(userDeleteLike,currentUserLikeId);
        setLike(false);
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };

  const handleDisLike = async () => {
    if (token) {
      if (DisLike == false) {
        const userLike = await addLike(
          `/Course/AddCourseCommentDissLike?CourseCommandId=${id}`
        );
        setDisLike(true);
        setLike(false);
        setEmotion(false);
      } else {
        const userDeleteDisLike = await deleteLike(
          `/Course/DeleteCourseCommentLike?CourseCommandId=${currentUserLikeId}`
        );
        console.log(userDeleteDisLike);
        setDisLike(false);
      }
    } else {
      toast.error("برای دیس لایک باید در سایت ثبت نام کنید");
    }
  };

  useEffect(() => {
    if (currentUserEmotion == "-") {
      setLike(false);
      setDisLike(false);
    } else if (currentUserEmotion == "LIKED") {
      setLike(true);
      setDisLike(false);
    } else {
      setLike(false);
      setDisLike(true);
    }
  }, []);

  useEffect(() => {
    isYourComment()
  }, [fName,lName]);

  return (
    <div
      className={`xl:w-[1290px] max-lg:w-auto max  md:w-[780px] max-sm:pr-0  w-[410px] my-[20px] flex flex-wrap justify-end flex-row-reverse md:pr-[50px] pr-5 md:mr-6 mr-0 ${className}`}
    >
      <div className={`relative 2xl:w-[1000px] xl:w-[850px] lg:w-[790px] md:w-[670px] sm:w-[550px] w-[480px] max-md:h-32 md:h-36 xl:h-44 border border-gray-400 rounded-[20px] md:py-8 md:px-16 xl:py-3 py-0 dark:bg-mode-900  ${isAuthor ? "bg-blue-100 border-none dark:!bg-mode-800"   : "bg-white"}`}>
        {/*--------------------------------------------------------------- user img --------------------------------------------------------------- */}
        <div className="absolute top-[-40%] right-[-5%] max-lg:top-[-20%]  lg:w-[110px] lg:h-[110px] md:w-[80px] md:h-[80px] w-[65px] h-[65px] rounded-full bg-white">
          <img
            src={pictureAddress ? pictureAddress : user}
            className="w-full m-auto rounded-full text-center"
          ></img>
        </div>
        {/*--------------------------------------------------------------- author --------------------------------------------------------------- */}
        <span className="absolute top-[-10%] right-[10%]  text-gray-600 bg-white dark:bg-mode-900 dark:text-mode-50 lg:text-[19px] md:text-xl text-lg text-center font-irSBold px-3 rounded-full">
          {author}
        </span>
        {/*--------------------------------------------------------------- title --------------------------------------------------------------- */}
        <div className="max-md:relative max-md:top-6 max-lg:top-2 max-md:right-6 w-full text-right   lg:text-[17px] text-lg text-gray-500 whitespace-nowrap font-irSBold xl:pt-2 pt-0 pr-[20px] dark:text-mode-200 ">
          {title}
        </div>
        {/*--------------------------------------------------------------- describe --------------------------------------------------------------- */}
        <p className=" max-md:relative max-md:top-6 max-md:pr-4 text-gray-500 lg:text-xl text-md text-right font-BNa dark:text-mode-300 ">
          {describe}
        </p>
      </div>
      <div className="xl:w-[200px] lg:w-[170px] w-[140px] max-lg:h-14  m-auto flex flex-row  justify-evenly font-irSBold text-[#4b5563] rounded-[15px] ">
        {/*--------------------------------------------------------------- disLike --------------------------------------------------------------- */}
        <div className="lg:w-[50px] md:w-[50px] w-[40px]">
          {DisLike ? (
            <>
              <IconThumbDown
                fill="#707070"
                className="w-full h-[40px] text-mode-700 cursor-pointer"
                strokeWidth="1"
                onClick={() => handleDisLike()}
              ></IconThumbDown>
              <span className="ml-[19px]">{disslikeCount}</span>
            </>
          ) : (
            <>
              <IconThumbDown
                className="w-full h-[40px] text-mode-700  cursor-pointer"
                strokeWidth="1"
                onClick={() => handleDisLike()}
              ></IconThumbDown>
              <span className="ml-[19px] text-mode-700">{disslikeCount}</span>
            </>
          )}
        </div>
        {/*--------------------------------------------------------------- like --------------------------------------------------------------- */}
        <div className="lg:w-[50px] md:w-[50px] w-[40px]">
          {like ? (
            <>
              <IconThumbUp
                strokeWidth="1"
                fill="#ef4444"
                className="w-full h-[40px]  text-error-100 cursor-pointer"
                onClick={() => handleLike()}
              />
              <span className="ml-[19px] text-mode-700">{likeCount}</span>
            </>
          ) : (
            <>
              <IconThumbUp
                strokeWidth="1"
                className="w-full h-[40px] text-mode-700 cursor-pointer"
                onClick={() => handleLike()}
              />
              <span className="ml-[19px] text-mode-700">{likeCount}</span>
            </>
          )}
        </div>
        {/*--------------------------------------------------------------- comment --------------------------------------------------------------- */}
        <div className="lg:w-[50px]  md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
          <IconMessageCircle2
            strokeWidth="1"
            className="w-full h-[40px] text-mode-700 cursor-pointer"
            onClick={() => {
              setReplay(true);
              setReplayedCommentId(id);
            }}
          />
          <span className="ml-[17px] text-mode-700">{acceptReplysCount}</span>
        </div>
        {isAuthor &&
        <div className="lg:w-[50px]  md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
          <IconEdit
            strokeWidth="1"
            className="w-full h-[50px] text-mode-700 cursor-pointer"
            onClick={()=> setModal(!modal)}
          ></IconEdit>
        </div>       
        }
      </div>
      {modal && <EditCommentCourse setModal={setModal} modal={modal} courseId={courseId} id={id} setEmotion={setEmotion} emotion={emotion}/>}
      {acceptReplysCount > 0 && <CommentReplays id={id} courseId={courseId} />}
    </div>
  );
};

export { Comments };
