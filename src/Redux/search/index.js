import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: "" },

  reducers: {
    onSearchChange: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { onSearchChange } = searchSlice.actions;

export default searchSlice.reducer;
