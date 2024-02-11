import http from "../../../../interceptor";
export const deleteReserve = async (courseId) => {
  try {
    const response = await http.delete("/CourseReserve", {
      data: courseId,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    //console.log(error);
  }
};
