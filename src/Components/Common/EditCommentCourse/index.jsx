import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import { Input } from "../Inputs/Input";
import { Button } from "../buttons";
import { commentValidation } from "../../../Core/Validation/yup";
import { EditCourseComment} from "../../../Core/Services/api/course/comment/addComment/addComment";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";

const EditCommentCourse = ({
    courseId,
    id,
    modal,
    setModal,
    setEmotion,
    emotion,
}) => {
    const [OldText, setOldText] = useState([])
    const [Title, setTitle] = useState()
    const [Describe, setDescribe] = useState()

    const fetchData = async () => {
        try{
            const result = await basicGet(`/Course/GetCourseCommnets/${courseId}`);
            const item = result.find((item) => item.id === id);
            setOldText(item,result)
        }
        catch(error){
            alert(error.message)
        }
    }
    useEffect(() => {
      fetchData();
    }, [])
    // console.log(OldText.title,OldText.describe);

  const handleReplay = async (values) => {
    var formdata = new FormData();
    formdata.append("CommentId", id);
    formdata.append("CourseId", courseId);
    formdata.append("Title", values.title);
    formdata.append("Describe", values.describe);

    console.log(formdata);
    const user = await EditCourseComment(formdata);
    console.log(user);
    if(user.success == true) {
      toast.success("نظر شما با موفقیت تغییر کرد")
      setModal(!modal)
      setEmotion(!emotion)
    }
    else{toast.error("مشکلی در ویرایش نظر وجود دارد")}
  };

    useEffect(() => {
    if(OldText){
      setTitle(OldText.title)
      setDescribe(OldText.describe)
    }
    else{
      setTitle("")
      setDescribe("") 
    }
    console.log(Title,Describe);
    }, [OldText])

  return (
    <div className="w-[60%] py-[40px] rounded-3xl  absolute top-[20%] left-[20%]   z-10 bg-white dark:bg-mode-900 shadow-[0_0_5px_4px] shadow-zinc-200 dark:shadow-[0_0_2px_3px] dark:shadow-mode-800">
      <div
        className="absolute top-0 right-0 w-[40px] h-[40px] flex justify-center items-center border-2 border-[#272268] rounded-tr-3xl"
        onClick={() => setModal(!modal)}
      >
        x
      </div>
      <div className=" w-[1000px] m-auto flex justify-evenly">
        <Formik
        enableReinitialize
          initialValues={{
            title:Title ,
            describe:Describe ,
          }}
          validationSchema={commentValidation}
          onSubmit={(values) => handleReplay(values)}
        >
          <Form className=" flex w-full flex-col items-center font-irSans transition-all" >
            <div className="flex flex-col w-full relative  sm:w-3/4 lg:w-full mt-[30px] mb-[30px] px-[40px]">
              <Input
                topic={"عنوان نظر"}
                className="rounded-[20px] dark:bg-mode-900 dark:text-mode-50" 
                placeHolder={"...عنوان نظر"}
                type={"text"}
                name={"title"}
                as={"input"}
              />
            </div>
            <div className="flex flex-col w-full relative sm:w-3/4 lg:w-full mb-[10px] px-[40px]">
              <Input
                topic={"پیام شما"}
                className="rounded-[20px] min-h-[120px] max-h-[120px] pt-5 dark:bg-mode-900 dark:text-mode-50"
                placeHolder={"...متن پیام"}
                type={"text"}
                name={"describe"}
                as={"textarea"}
              />
            </div>
            <Button
              className="bg-[#fcbf49] hover:bg-[#c89c44] text-[#fff] dark:bg-DarkPallete-100"
              type={"submit"}
              children={"ویرایش"}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { EditCommentCourse };