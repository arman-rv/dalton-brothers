import React, { useEffect, useState } from "react";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";
import { Comments } from "../../../Common/Comment/Comments/Comments";
import { ReplayComment } from "../../../Common/Comment/ReplayComment";
import { ArticComments } from "../../../Common/Comment/ArticleComments";

const CommentReplays = ({ id, courseId, className,setreplay }) => {
  const [replayList, setReplayList] = useState([]);
  const [emotion, setEmotion] = useState();
  const [replay, setReplay] = useState(false);
  const [replayedCommentId, setReplayedCommentId] = useState();
  const [text, setText] = useState("نمایش پاسخ ها");
  const handleClick = async () => {
    const result = await basicGet(
      `/Course/GetCourseReplyCommnets/${courseId}/${id}`
    );
    setReplayList(result);
  };
  const handleText = () => {
    if (text === "نمایش پاسخ ها") {
      setText("پنهان کردن پاسخ ها");
      // setreplay(false);
    } else {
      setText("نمایش پاسخ ها");
      // setreplay(true)
    }
  };
  useEffect(() => {
    handleClick();
  }, [emotion]);

  return (
    <div className={` w-full`}>
      {replay && (
        <ReplayComment
          setReplay={setReplay}
          comment={replayList}
          replayedCommentId={replayedCommentId}
          setEmotion={setEmotion}
          emotion={emotion}
        />
      )}
      <input type="checkbox" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="font-irSans xl:mt-[10px] mt-0 max-xl:relative max-xl:-top-[40px] max-md:-top-0 max-xl:left-[30%] max-md:left-[20%] flex justify-center text-[#4b5563] dark:text-mode-50\\\\"
        onClick={() => {
          handleClick();
          handleText();
        }}
      >
        {text}
      </label>
      <div className="peer-checked:h-fit peer-checked:flex gap-5 flex-col mt-[30px] hidden transition-all w-full  h-0">
        {/* each comment */}
        {replayList.map((el, index) => (
          <Comments
            {...el}
            key={index}
            setEmotion={setEmotion}
            setReplay={setReplay}
            setReplayedCommentId={setReplayedCommentId}
          />
        ))}
      </div>
    </div>
  );
};

export { CommentReplays };
