import http from "../../../interceptor";

export const getDetail = async (url) => {
  try {
    const Response = await http.get(url);
    return Response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
export const postYourCourseRate = async (rate,courseId) => {
  try {
    const response = await http.post(`/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${rate}`);
    return response;
  } catch (error) {
  }
};
export const postYourNewsRate = async (rate,newsId) => {
  try {
    const response = await http.post(`/News/NewsRate?NewsId=${newsId}&RateNumber=${rate}`);
    return response;
  } catch (error) {
  }
};