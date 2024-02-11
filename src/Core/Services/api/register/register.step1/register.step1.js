import http from "../../../interceptor";

export const registerS1 = async (number) => {
  try {
    const response = await http.post("/Sign/SendVerifyMessage", number);

    return response;
  } catch (error) {
    return false;
  }
};
