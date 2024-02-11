import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Comments } from "../../../../Common/Comment/Comments/Comments";
import { AddComment } from "../../../../Common/Comment/AddComment/AddComment";
import { ArticleCommentData } from "../../../../../Core/Services/data/";
import { getComment } from "../../../../../Core/Services/api/course/comment/getComment/getComment";
import { ReplayArticleComment } from "../../../../Common/Comment/ReplayArticleComment";
import { ArticComments } from "../../../../Common/Comment/ArticleComments";
import { AddArticleComment } from "../../../../Common/Comment/AddArticleComment";

const ArticleComments = ({ id, newsId }) => {
  const [modal, setModal] = useState(false);
  const [ArticleComment, setArticleComment] = useState([]);
  const [ArticleEmotion, setArticleEmotion] = useState();
  const [ArticleReplay, setArticleReplay] = useState(false);
  const [ArticleReplayedCommentId, setArticleReplayedCommentId] = useState();
  const token = useSelector((state) => state.token.token);

  const getArticleComments = async () => {
    const result = await getComment(`/News/GetNewsComments?NewsId=${id}`);
    setArticleComment(result);
    console.log(result);
  };
  useEffect(() => {
    getArticleComments();
  }, [ArticleEmotion]);

  return (
    <div className=" w-full py-[30px] flex flex-col relative">
      {ArticleReplay && (
        <ReplayArticleComment
          setArticleReplay={setArticleReplay}
          ArticleComment={ArticleComment}
          ArticleReplayedCommentId={ArticleReplayedCommentId}
          setArticleEmotion={setArticleEmotion}
          ArticleEmotion={ArticleEmotion}
          newsId={id}
          // id={id}
        />
      )}
      <h2 className="text-center lg:text-2xl text-xl py-[20px] font-irSBold dark:text-DarkPallete-100">
        {" "}
        نظرات{" "}
      </h2>
      {!token && (
        <p className="text-center lg:text-xl text-lg py-[20px] text-gray-800 font-irSans">
          .تنها کاربران سایت قادر به ثبت نظر هستند. برای ثبت نظر لازم است تا ثبت
          نام نمایید یا وارد شوید
        </p>
      )}
      <div className="w-full my-[50px] grid grid-col justify-items-center gap-12">
        <div className={`w-fit h-[600px]  overflow-scroll border rounded-[20px] grid grid-col justify-items-end gap-12  pt-[50px]  ${ArticleComment.length == 0 && "h-4 border-none "}`}>
          {ArticleComment.length !== 0 ? (
            ArticleComment.map((el, index) => (
              <ArticComments
                {...el}
                key={index}
                setArticleEmotion={setArticleEmotion}
                setArticleReplay={setArticleReplay}
                setArticleReplayedCommentId={setArticleReplayedCommentId}
                ArticleReplayedCommentId={ArticleReplayedCommentId}
              />
            ))
          ) : (
            <div className="flex font-irSans lg:text-2xl text-xl items-center justify-end text-gray-700 dark:text-mode-50  xl:right-[39%] lg:right-[34%] md:right-[30%] sm:right-[25%] right-[21%] top-48">
              تاکنون کامنتی در این مورد ثبت نشده{" "}
            </div>
          )}
        </div>

        <button
          className=" lg:px-8 lg:py-4 md:px-6 md:py-3 px-4 py-2 text-xl font-irSBold bg-white border-2 border-pallete-100 dark:border-DarkPallete-100 dark:bg-mode-900 m-auto rounded-full cursor-pointer text-pallete-100 dark:text-DarkPallete-100"
          onClick={() => setModal(!modal)}
        >
          {modal == true ? " بیخیال " : " ثبت نظر"}
        </button>
        <div className="mx-auto transition-all">
          {modal == true && <AddArticleComment newsId={id} getArticleComments={getArticleComments} setArticleEmotion={setArticleEmotion} ArticleEmotion={ArticleEmotion} setModal={setModal} modal={modal}/>}
        </div>
      </div>
    </div>
  );
};
export { ArticleComments };
