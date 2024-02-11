import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import toast ,{ Toaster } from "react-hot-toast"

import { Authenticated } from "./Auth/Authenticated";
import { UnAuthenticated } from "./Auth/UnAuthenticated";
import { getItem } from "../Core/Services/common/storage.services";

const App = () => {
  const token = useSelector((state) => state.token.token);

  // const token = getItem("token");

  return (
    <>
      <ScrollToTop />
      <Toaster duration="5000" toastOptions={{style:{fontFamily:"iranSans"}}} />
      {token ? (
        <Authenticated location={location} />
      ) : (
        <UnAuthenticated location={location} />
      )}
    </>
  );
};

export default App;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
