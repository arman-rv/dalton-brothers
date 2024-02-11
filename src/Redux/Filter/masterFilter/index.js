import { createSlice } from "@reduxjs/toolkit";

const masterFilterSlice = createSlice({
  name: "masterFilter",
  initialState: {
    bah: "",
    naz: "",
    asg: "",
    esf: "",
    masterElse: true,
  },

  reducers: {
    onBahChange: (state, action) => {
      state.bah = action.payload;
    },
    onNazChange: (state, action) => {
      state.naz = action.payload;
    },
    onAsgChange: (state, action) => {
      state.asg = action.payload;
    },
    onEsfChange: (state, action) => {
      state.esf = action.payload;
    },
    onMasterElseChange: (state, action) => {
      state.masterElse = action.payload;
    },
  },
});

export const {
  onBahChange,
  onNazChange,
  onAsgChange,
  onEsfChange,
  onMasterElseChange,
} = masterFilterSlice.actions;

export default masterFilterSlice.reducer;
