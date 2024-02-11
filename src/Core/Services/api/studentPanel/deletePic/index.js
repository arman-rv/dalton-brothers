import http from "../../../interceptor";

export const deletePic = async (form) => {
  try {
    const Response = await http.delete("/SharePanel/DeleteProfileImage", {
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return Response;
  } catch (error) {
    //console.log(error);
    return [];
  }
};
