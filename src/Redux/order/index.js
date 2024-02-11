import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: { order: "DESC" },

  reducers: {
    onorderChange: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { onorderChange } = orderSlice.actions;

export default orderSlice.reducer;
