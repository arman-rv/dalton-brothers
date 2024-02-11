import { createSlice } from "@reduxjs/toolkit";

const teacherIdSlice = createSlice({
  name: "teacherId",
  initialState: { teacherId: "" },

  reducers: {
    onteacherIdChange: (state, action) => {
      state.teacherId = action.payload;
    },
  },
});

export const { onteacherIdChange } = teacherIdSlice.actions;

export default teacherIdSlice.reducer;