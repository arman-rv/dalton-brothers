import { createSlice } from "@reduxjs/toolkit";

const moneySlice = createSlice({
  name: "money",
  initialState: { money: 0 },

  reducers: {
    onMoneyChange: (state, action) => {
      state.money = action.payload;
    },
  },
});

export const { onMoneyChange } = moneySlice.actions;

export default moneySlice.reducer;
