import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Landing } from "../../../Components/Landing";
import { Layout } from "../../../Components/LayOut";
import { SignIn } from "../../../Components/SignIn/SignIn";
import { Register } from "../../../Components/Register/Register";
import { ForgetPass } from "../../../Components/ForgetPass/ForgetPass";
import { Identify } from "../../../Components/ForgetPass/ForgetSection/Identify/Identify";
import { LayoutPanel } from "../../../Components/StudentPanel/LayoutPanel/LayoutPanel";
import { NotAccess } from "../../../Components/Common/NotAccess";
import { NotFound } from "../../../Components/Common/NotFound";
import { CourseList } from "../../../Components/Course/CourseList";
import { CourseDetail } from "../../../Components/CourseDetail/CourseDetail";
import { ArticleNews } from "../../../Components/Article & News/Article & News";
import { ArticleDetail } from "../../../Components/Article & News/ArticleDetail/ArticleDetail";
import { RegisterStep1 } from "../../../Components/Register/RegisterSection/RegisterStep1/RegisterStep1";
import { RegisterStep2 } from "../../../Components/Register/RegisterSection/RegisterStep2/RegisterStep2";
import { RegisterStep3 } from "../../../Components/Register/RegisterSection/RegisterStep3/RegisterStep3";
import { LayoutRegister } from "../../../Components/Register/RegisterSection/LayoutRegister/LayoutRegister";
import { ResetPass } from "../../../Components/ForgetPass/ForgetSection/ResetPass";
const UnAuthenticated = ({ location }) => {
  const router = [
    { path: "/403", element: <NotAccess /> },
    { path: "/404", element: <NotFound /> },
    { path: "/", element: <Landing /> },
    {
      element: <Layout />,
      children: [
        { path: "/course", element: <CourseList /> },
        { path: "/courseDetail/:courseId", element: <Navigate to={"/403"} /> },
        { path: "/news", element: <ArticleNews /> },
        { path: `/newsDetail/:id`, element: <Navigate to={"/403"} /> },
      ],
    },
    { path: "/signIn", element: <SignIn /> },
    {
      element: <Register />,
      children: [
        { path: "/register", element: <RegisterStep1 /> },
        { path: "/register/step2", element: <RegisterStep2 /> },
        { path: "/register/step3", element: <RegisterStep3 /> },
      ],
    },
    { path: "/forget", element: <ForgetPass /> },
    { path: "/identify", element: <Identify /> },
    { path: "/reset", element: <ResetPass /> },
    {
      element: <LayoutPanel />,
      children: [
        { path: "/panel", element: <Navigate to={"/signIn"} /> },
        { path: "/panel/EditProfile", element: <Navigate to={"/403"} /> },
        { path: "/panel/PanelCourses", element: <Navigate to={"/403"} /> },
        { path: "/panel/PanelCoursesList", element: <Navigate to={"/403"} /> },
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

export { UnAuthenticated };
