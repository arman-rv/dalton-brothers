import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import { Article } from "../../../ArticleSections/Article/Article";
import { relatedNews } from "../../../../../Core/Services/data";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const RelatedArticle = ({ addUserFullName, id }) => {
  const [OtherArticle, setOtherArticle] = useState([]);

  const getAllArticle = async () => {
    const result = await basicGet(`/News`);
    const response = result.news;
    setOtherArticle(response);
  };
  const filterAllAuthorArticle = OtherArticle.filter(
    (item) => item.addUserFullName == addUserFullName
  );
  const filterOtherAuthorArticle = filterAllAuthorArticle.filter(
    (item) => item.id != id
  );
  //console.log(filterOtherAuthorArticle);
  // const items = filterOtherAuthorArticle.map((article, index) => (
  //   <Article
  //     {...article}
  //     key={index}
  //     insertDate={article.insertDate.split("T")[0].replaceAll("-", "/")}
  //     updateDate={article.updateDate.split("T")[0].replaceAll("-", "/")}
  //   />
  // ));
  useEffect(() => {
    getAllArticle();
  }, []);

  return (
    <>
      {filterOtherAuthorArticle.length == 0 ? (
        <></>
      ) : (
        <div className=" w-full">
          <p className="text-center h-[80px] w-full font-irSBold text-2xl mb-[50px] p-[30px] dark:text-DarkPallete-100 ">
            {" "}
            دیگر خبر های این نویسنده{" "}
          </p>
          <div className="w-full flex justify-evenly flex-wrap gap-9">
            {/* {items} */}
            <>
              <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={false}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  1280: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  1536: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="2xl:w-[90%] md:w-[80%] mySwiper w-[100%] h-[100%] "
              >
                {filterOtherAuthorArticle.map((article, index) => (
                  <SwiperSlide
                    className="flex justify-center items-center"
                    key={index}
                  >
                    <Article
                      {...article}
                      insertDate={article.insertDate
                        .split("T")[0]
                        .replaceAll("-", "/")}
                      updateDate={article.updateDate
                        .split("T")[0]
                        .replaceAll("-", "/")}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export { RelatedArticle };
