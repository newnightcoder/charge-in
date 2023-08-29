import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChangeBorneOpen: false,
  isBorne: false,
};

const borneSlice = createSlice({
  name: "borne",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isChangeBorneOpen = !state.isChangeBorneOpen;
    },
    setIsBorne: (state, action) => {
      state.isBorne = action.payload;
    },
  },
});

export const { toggle, setIsBorne } = borneSlice.actions;

export default borneSlice.reducer;
