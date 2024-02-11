import http from "../../interceptor";

export const createCourse = async (user) => {
  try {
    const response = await http.post(`/Course`, user);
    return response;
  } catch (error) {
    //console.log(error);
  }
};
