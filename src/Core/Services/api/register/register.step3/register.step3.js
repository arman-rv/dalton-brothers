import http from "../../../interceptor";

export const registerS3 = async (number) => {
  try {
    const response = await http.post("/Sign/Register", number);

    return response;
  } catch (error) {
    return false;
  }
};
