import http from "../../../interceptor";

export const basicGet = async (url) => {
  try {
    const Response = await http.get(url);
    return Response;
  } catch (error) {
    return [];
  }
};
