import http from "../../../interceptor";
export const deleteSave = async (courseId) => {
  try {
    const response = await http.delete("/Course/DeleteCourseFavorite", {
      data: courseId,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
