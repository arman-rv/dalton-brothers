import { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router";
import { Combobox, Transition } from "@headlessui/react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";
import style from "./headerSearch.module.css";

function MyCombobox() {
  const [courseList, setCourseList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
  };
  const getArticles = async () => {
    const result = await basicGet("/News?PageNumber=1&RowsOfPage=10");
    const response = result.news;
    // //console.log(result.news);
    setArticleList(response);
  };

  const filteredPeople =
    query === ""
      ? []
      : courseList.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });
  const filteredArticles =
    query === ""
      ? []
      : articleList.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  const transfer = (title) => {
    // for course
    const selectedCourse = filteredPeople.find((el) => el.title === title);
    selectedCourse !== undefined &&
      navigate(`/courseDetail/${selectedCourse.courseId}`);
    // for news
    const selectedNews = filteredArticles.find((el) => el.title === title);
    selectedNews !== undefined && navigate(`/newsDetail/${selectedNews.id}`);
  };
  useEffect(() => {
    getCourses();
    getArticles();
  }, []);

  return (
    <Combobox
      value={selectedPerson}
      as={"div"}
      
      className="xl:mt-[300px] xl:w-[604px] lg:w-[50vw] lg:mt-[150px] mt-[100px] min-[400px]:w-96 w-[90%] mx-auto h-[65px] text-right text-black font-irSans relative flex flex-row-reverse flex-wrap  "
    >
      <Combobox.Input
        onFocusCapture={() => setQuery("")}
        onChange={(event) => setQuery(event.target.value)}
        displayValue={selectedPerson}
        className={
          "w-full  outline-none h-[65px] border-2 rounded-full py-1 flex justify-start items-center px-5 gap-3 mb-3 dark:bg-mode-900 dark:text-mode-50"
        }
        placeholder="دِنبال چی دَری ..."
      />
      <div
        className={` flex-row-reverse flex-wrap w-full hidden ${
          query !== "" ? style.container : ""
        }`}
      >
        <Combobox.Options
          className={
            "border-r-0 border-2 dark:border-[#16a34a] border-[#fcbf49] bg-white dark:bg-[#404042] z-50 w-[50%] h-[500px] mx-auto rounded-3xl rounded-r-none overflow-scroll"
          }
        >
          <h1 className="w-full flex justify-start pr-[60px] items-center font-irSBold py-[20px] dark:bg-[#16a34a] bg-[#fcbf49] text-white font-bold text-xl">
            دوره ها
          </h1>
          {filteredPeople.map((el, index) => (
            <Combobox.Option
              key={index}
              value={el.title}
              as={Fragment}
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:text-black transition-all duration-300 "
            >
              {({ active }) => (
                <li
                  onClick={(el) => {
                    setSelectedPerson(el.target.firstChild.data);
                    setQuery(el.target.firstChild.data);
                    transfer(el.target.firstChild.data);
                  }}
                  className={`${
                    active
                      ? "dark:bg-[#5f5f5f] bg-[#e9e9e9] text-black dark:text-white pr-8 h-[60px] flex items-center justify-start font-irSBold"
                      : " text-black dark:text-[#b0b3b6] h-[60px] flex items-center justify-start pr-5 font-irSBold"
                  } ${style.itemRight}`}
                >
                  {el.title}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
        <Combobox.Options
          className={
            " border-l-0 border-2 dark:border-[#16a34a] border-[#fcbf49] bg-white dark:bg-[#404042] z-50 w-[50%] h-[500px] mx-auto  rounded-3xl rounded-l-none overflow-scroll"
          }
        >
          <h1
            className={`w-full flex justify-start pr-[60px] items-center font-irSBold py-[20px] dark:bg-[#16a34a] bg-[#fcbf49] text-white font-bold text-xl`}
          >
            اخبار
          </h1>
          {filteredArticles.map((el, index) => (
            <Combobox.Option
              key={index}
              value={el.title}
              as={Fragment}
              className={`ui-active:bg-blue-500 ui-active:text-white ui-not-active:text-black transition-all`}
            >
              {({ active }) => (
                <li
                  onClick={(el) => {
                    setSelectedPerson(el.target.firstChild.data);
                    setQuery(el.target.firstChild.data);
                    transfer(el.target.firstChild.data);
                  }}
                  className={`${
                    active
                      ? "dark:bg-[#5f5f5f] bg-[#e9e9e9] text-black dark:text-white pr-8 h-[60px] flex items-center justify-start font-irSBold"
                      : " text-black dark:text-[#b0b3b6] h-[60px] flex items-center justify-start pr-5 font-irSBold"
                  } ${style.itemLeft}`}
                >
                  {el.title}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}

export default MyCombobox;
