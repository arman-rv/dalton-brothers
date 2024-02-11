import http from "../../../interceptor";

export const changePic = async (from) => {
  try {
    const Response = await http.post("/SharePanel/SelectProfileImage", from);
    return Response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
