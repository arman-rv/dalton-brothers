import { createSlice } from "@reduxjs/toolkit";

const listTechSlice = createSlice({
  name: "listTech",
  initialState: { listTech: "" },

  reducers: {
    onlistTechChange: (state, action) => {
      state.listTech = action.payload;
    },
  },
});

export const { onlistTechChange } = listTechSlice.actions;

export default listTechSlice.reducer;