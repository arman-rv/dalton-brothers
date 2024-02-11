import http from "../../../interceptor";

export const addDisLike = async (courseId) => {
  try {
    const response = await http.post(
      `/Course/AddCourseDissLike?CourseId=${courseId}`
    );
    return response;
  } catch (error) {
    //console.log(error);
  }
};
