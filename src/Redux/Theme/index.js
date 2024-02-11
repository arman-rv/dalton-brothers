import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" },

  reducers: {
    onThemeChange: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { onThemeChange } = themeSlice.actions;

export default themeSlice.reducer;
