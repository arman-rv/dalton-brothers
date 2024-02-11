import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Landing } from "../../../Components/Landing";
import { Layout } from "../../../Components/LayOut";
import { CourseList } from "../../../Components/Course/CourseList";
import { CourseDetail } from "../../../Components/CourseDetail/CourseDetail";
import { ArticleNews } from "../../../Components/Article & News/Article & News";
import { ArticleDetail } from "../../../Components/Article & News/ArticleDetail/ArticleDetail";
import { LayoutPanel } from "../../../Components/StudentPanel/LayoutPanel/LayoutPanel";
import { Dashboard } from "../../../Components/StudentPanel/Dashboard/Dashboard";
import { EditProfile } from "../../../Components/StudentPanel/EditProfile/EditProfile";
import { PanelCourses } from "../../../Components/StudentPanel/PanelCourses/PanelCourses";
import { PanelCoursesList } from "../../../Components/StudentPanel/PanelCoursesList/PanelCoursesList";
import { NotAccess } from "../../../Components/Common/NotAccess";
import { NotFound } from "../../../Components/Common/NotFound";
import { MasterCourses } from "../../../Components/MasterPanel/MasterCourses/MasterCourses";
import { CreateCourse } from "../../../Components/MasterPanel/CreateCourse/CreateCourse";
import { EditImg } from "../../../Components/StudentPanel/EditProfile/EditImg";

const Authenticated = ({ location }) => {
  const router = [
    { path: "/403", element: <NotAccess /> },
    { path: "/404", element: <NotFound /> },

    { path: "/", element: <Landing /> },
    {
      element: <Layout />,
      children: [
        { path: "/course", element: <CourseList /> },
        { path: "/courseDetail/:id", element: <CourseDetail /> },
        { path: "/news", element: <ArticleNews /> },
        { path: `/newsDetail/:id`, element: <ArticleDetail /> },
      ],
    },
    { path: "/signIn", element: <Navigate to={"/403"} /> },
    { path: "/register", element: <Navigate to={"/403"} /> },
    {
      path: "/forget",
      element: <Navigate to={"/403"} />,
    },
    { path: "/identify", element: <Navigate to={"/403"} /> },
    {
      element: <LayoutPanel />,
      children: [
        { path: "/panel", element: <Dashboard /> },
        { path: "/panel/EditProfile", element: <EditProfile /> },
        { path: "/panel/EditProfileImg", element: <EditImg /> },
        { path: "/panel/PanelCourses", element: <PanelCourses /> },
        { path: "/panel/PanelCoursesList", element: <PanelCoursesList /> },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ];
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {router.map((el, index) => (
          <Route path={el.path} element={el.element} key={index}>
            {el.children &&
              el.children.map((el, index) => (
                <Route path={el.path} element={el.element} key={index} />
              ))}
          </Route>
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export { Authenticated };
