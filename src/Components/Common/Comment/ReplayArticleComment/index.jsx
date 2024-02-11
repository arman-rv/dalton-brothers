import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import { Input } from "../../Inputs/Input";
import { Button } from "../../buttons";
import { commentValidation } from "../../../../Core/Validation/yup";
import { replayArticleCommentData} from "../../../../Core/Services/api/replayComment";
import { addArticleReplyComment } from "../../../../Core/Services/api/course/comment/addComment/addComment";

const ReplayArticleComment = ({
    setArticleReplay,
    ArticleComment,
    ArticleReplayedCommentId,
    setArticleEmotion,
    ArticleEmotion,
    newsId,
    id,
}) => {
  const [selArticleComment, setSelArticleComment] = useState({});

  const getComment = () => {
    if (ArticleReplayedCommentId) {
      const selectedComment = ArticleComment.find((el) => el.id === ArticleReplayedCommentId);
      setSelArticleComment(selectedComment);
    }
  };

  const handleReplay = async (values) => {
    const obj = {
      newsId : newsId,
      title : values.title,
      describe : values.describe,
      parentId : selArticleComment.id,
    }
    // console.log(obj,newsId);
    const user = await addArticleReplyComment(obj);
    console.log(user);
    if(user.success == true) {
      toast.success("نظر شما با موفقیت ارسال شد")
    }
    else{toast.error("مشکلی در ارسال نظر وجود دارد")}
  };
  
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div className="xl:w-[1000px] lg:w-[900px] md:w-[800px] sm:w-[600] w-[350px] py-[40px] rounded-3xl  absolute top-[20%] xl:left-[20%] lg:left-[10%] md:left-[5%] sm:right-[20%] right-[20%]   z-10 bg-white dark:bg-mode-900 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800">
      <div
        className="absolute top-0 right-0 w-[40px] h-[40px] flex justify-center items-center border-2 border-mode-700 dark:text-mode-50 rounded-tr-3xl "
        onClick={() => setArticleReplay(false)}
      >
        x
      </div>
      <div className="xl:w-[1000px] lg:w-[900px] md:w-[800px] sm:w-[600] w-[350px] m-auto flex justify-evenly">
        <Formik
          initialValues={{
            title: "",
            describe: "",
          }}
          validationSchema={commentValidation}
          onSubmit={(values) => handleReplay(values)}
        >
          <Form className=" flex w-full flex-col items-center font-irSans transition-all" >
            <div className="flex flex-col relative  mt-[30px] mb-[30px] mx-auto">
              <Input
                topic={"عنوان نظر"}
                className="rounded-[20px] xl:w-[650px] lg:w-[580px] md:w-[500px] sm:w-[500] w-[300px] dark:text-mode-50 dark:bg-mode-900"
                placeHolder={"...عنوان نظر"}
                type={"text"}
                name={"title"}
                as={"input"}
              />
            </div>
            <div className="flex flex-col w-full relative sm:w-3/4 lg:w-3/4 mb-[10px] md:px-[40px] px-1">
              <Input
                topic={"پیام شما"}
                className="rounded-[20px] min-h-[120px] max-h-[120px] pt-5 dark:text-mode-50 dark:bg-mode-900"
                placeHolder={"...متن پیام"}
                type={"text"}
                name={"describe"}
                as={"textarea"}
              />
            </div>
            <Button
              className="bg-[#fcbf49] hover:bg-[#c89c44] text-[#fff] dark:bg-DarkPallete-100"
              type={"submit"}
              children={"ثبت"}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { ReplayArticleComment };