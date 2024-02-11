import http from "../../../interceptor";

export const addLike = async (courseId) => {
  try {
    const response = await http.post(courseId);
    return response;
  } catch (error) {
    //console.log(error);
  }
};
export const deleteLike = async (user) => {
  try {
    const response = await http.delete("/Course/DeleteCourseLike", {
      data: user,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
