import http from "../../../interceptor";

export const registerS2 = async (number) => {
  try {
    const response = await http.post("/Sign/VerifyMessage", number);

    return response;
  } catch (error) {
    return false;
  }
};
