import http from "../../../interceptor";
export const addSave = async (courseId) => {
  try {
    const response = await http.post("/Course/AddCourseFavorite", courseId);
    return response;
  } catch (error) {
    //console.log(error);
  }
};

export const deleteArticleLike = async (deleteEntityId) => {
  try {
    const response = await http.delete("/News/DeleteLikeNews", {
      data: deleteEntityId,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    //console.log(error);
  }
};
export const deleteArticleCommentLike = async (deleteEntityId) => {
  try {
    const response = await http.delete("/News/DeleteCommentLikeNews", {
      data: deleteEntityId,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    //console.log(error);
  }
};
export const deleteArticleSave = async (deleteEntityId) => {
  try {
    const response = await http.delete("/News/DeleteFavoriteNews", {
      data: deleteEntityId,
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    //console.log(error);
  }
};
