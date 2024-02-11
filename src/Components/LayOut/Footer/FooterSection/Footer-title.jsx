import React from "react";
import FooterText from "./Footer-text";

const FooterTitle = ({ title }) => {
  return (
    <>
      <h1 className="font-irSBold text-mode-900 dark:text-mode-50 text-lg whitespace-nowrap">
        {title}
      </h1>
    </>
  );
};

export default FooterTitle;