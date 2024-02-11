import { createSlice } from "@reduxjs/toolkit";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState:  {} ,

  reducers: {
    onUserChange: (state, action) => {
      state.UserDetail = action.payload;
    },
  },
});

export const { onUserChange } = userDetailSlice.actions;

export default userDetailSlice.reducer;
