import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: { sort: "lastUpdate" },

  reducers: {
    onSortChange: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { onSortChange } = sortSlice.actions;

export default sortSlice.reducer;
