import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../Core/Services/common/storage.services";

const tokenValue = getItem("token");

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: tokenValue ? tokenValue : false,
  },

  reducers: {
    onTokenChange: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { onTokenChange } = tokenSlice.actions;

export default tokenSlice.reducer;
