import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {},

  reducers: {
    onCourseChange: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const { onCourseChange } = courseSlice.actions;

export default courseSlice.reducer;
