import http from "../../../../interceptor";

export const addComment = async (url) => {
  try {
    const response = await http.post(`/Course/AddCommentCourse`, url);
    return response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
export const addArticleComment = async (url) => {
  try {
    const response = await http.post(`/News/CreateNewsComment`, url);
    //console.log(response);
    return response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
export const addArticleReplyComment = async (url) => {
  try {
    const response = await http.post(`/News/CreateNewsReplyComment`, url);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const ChangeOldPassword = async (url) => {
  try {
    const response = await http.post(`/SharePanel/ChangePassword`, url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const EditNewsComment = async (url) => {
  try {
    const response = await http.put(`/News/UpdateNewsComment`, url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const EditCourseComment = async (url) => {
  try {
    const response = await http.put(`/Course/UpdateCourseComment`, url);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
};