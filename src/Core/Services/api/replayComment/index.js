import http from "../../interceptor";

export const replayComment = async (comment) => {
  try {
    const response = await http.post("/Course/AddReplyCourseComment", comment);
    return response;
  } catch (error) {
    //console.log(error);
  }
};
export const replayArticleCommentData = async (articleData) => {
  try {
    const response = await http.post(
      "/News/CreateNewsReplyComment",
      articleData
    );
    return response;
  } catch (error) {
    //console.log(error);
  }
};
