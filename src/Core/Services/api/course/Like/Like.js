import http from "../../../interceptor";

export const addArticleLike = async (user) => {
  try {
    const response = await http.post(user);
    return response;
  } catch (error) {
    //console.log(error);
  }
};
