import React, { useState } from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  // //console.log(totalPosts, postsPerPage);

  return (
    <div className=" mx-auto flex justify-center items-center  gap-3 p-2 rounded-2xl flex-row-reverse">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={
              page == currentPage
                ? "bg-orange-300 w-10 h-10 rounded-xl text-white"
                : "w-9 h-9 bg-gray-200 rounded-lg hover:bg-orange-200"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export { Pagination };
