import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { onSearchChange } from "../../../../../Redux/search";

const PanelSearch = () => {
  const dispatch = useDispatch();
  const handleSearch = (values) => {
    dispatch(onSearchChange(values.target.value));
  };
  return (
    <>
      <Formik initialValues={{ PanelSearch: "" }}>
        <Form className="w-full h-full rounded-[30px] ">
          <Field
            className="w-full h-[40px] rounded-[30px] px-5 text-right bg-mode-50 dark:bg-mode-800 dark:text-mode-50  font-irSans placeholder:dark:text-mode-50"
            name="panelSearch"
            placeholder="... جستجو"
            as="input"
            onChange={handleSearch}
          ></Field>
        </Form>
      </Formik>
    </>
  );
};

export { PanelSearch };
