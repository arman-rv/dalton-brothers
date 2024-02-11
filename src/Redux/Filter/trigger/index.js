import { createSlice } from "@reduxjs/toolkit";

const triggerSlice = createSlice({
  name: "trigger",
  initialState: { trigger: false },

  reducers: {
    onTriggerChange: (state, action) => {
      state.trigger = action.payload;
    },
  },
});

export const { onTriggerChange } = triggerSlice.actions;

export default triggerSlice.reducer;
