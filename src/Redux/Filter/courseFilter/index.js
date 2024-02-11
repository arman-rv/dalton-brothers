import { createSlice } from "@reduxjs/toolkit";

const courseFilterSlice = createSlice({
  name: "masterFilter",
  initialState: {
    python: "",
    SQL: "",
    react: "",
    main: "",
    javaScript: "",
    next: "",
    backend: "",
    courseElse: true,
  },

  reducers: {
    onPythonChange: (state, action) => {
      state.python = action.payload;
    },
    onSQLChange: (state, action) => {
      state.SQL = action.payload;
    },
    onReactChange: (state, action) => {
      state.react = action.payload;
    },
    onMainChange: (state, action) => {
      state.main = action.payload;
    },
    onjavaScriptChange: (state, action) => {
      state.javaScript = action.payload;
    },
    onnextChange: (state, action) => {
      state.next = action.payload;
    },
    onbackendChange: (state, action) => {
      state.backend = action.payload;
    },
    onCourseElseChange: (state, action) => {
      state.courseElse = action.payload;
    },
  },
});

export const {
  onPythonChange,
  onSQLChange,
  onReactChange,
  onMainChange,
  onjavaScriptChange,
  onnextChange,
  onCourseElseChange,
  onbackendChange,
} = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
