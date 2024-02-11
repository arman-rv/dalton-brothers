import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: { minPrice: 0, maxPrice: 2000000000 },

  reducers: {
    onMinPriceChange: (state, action) => {
      state.minPrice = action.payload;
    },
    onMaxPriceChange: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { onMinPriceChange, onMaxPriceChange } = priceSlice.actions;

export default priceSlice.reducer;
