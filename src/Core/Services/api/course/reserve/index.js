import http from "../../../interceptor";
export const reserveCourse = async (courseId) => {
  try {
    const response = await http.post("/CourseReserve/ReserveAdd", courseId);
    return response;
  } catch (error) {
    //console.log(error);
  }
};
