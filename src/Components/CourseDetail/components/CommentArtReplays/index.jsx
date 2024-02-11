import React, { useEffect, useState } from "react";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";
import { Comments } from "../../../Common/Comment/Comments/Comments";
import { ReplayComment } from "../../../Common/Comment/ReplayComment";
import { ArticComments } from "../../../Common/Comment/ArticleComments";

const CommentArtReplays = ({ id, className ,setNumReply,NumReply}) => {
  const [replayList, setReplayList] = useState([]);
  const [emotion, setEmotion] = useState();
  const [replay, setReplay] = useState(false);
  const [replayedCommentId, setReplayedCommentId] = useState();
  const [text, setText] = useState("نمایش پاسخ ها");
  console.log(id, "id replay");
  const handleClick = async () => {
    const result = await basicGet(`/News/GetRepliesComments?Id=${id}`);
    setReplayList(result);
    setNumReply(result.length)
    if(result.length==0){setText("")}
    
  };
  console.log(replayList, "replayed");
  const handleText = () => {
    if (text === "نمایش پاسخ ها") {
      setText("پنهان کردن پاسخ ها");
    } else if (text === "پنهان کردن پاسخ ها") {
      setText("نمایش پاسخ ها");
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
        className="font-irSans mt-[10px] flex justify-center text-[#4b5563]"
        onClick={() => {
          handleClick();
          handleText();
        }}
      >
        {text}
      </label>
      <div className="peer-checked:h-fit peer-checked:flex gap-5 flex-col mt-[30px] hidden transition-all w-full h-0 ">
        {/* each comment */}
        {replayList.map((el, index) => (
          <ArticComments
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

export { CommentArtReplays };
