import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChangeBorneOpen: false,
};

const borneSlice = createSlice({
  name: "borne",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isChangeBorneOpen = !state.isChangeBorneOpen;
    },
  },
});

export const { toggle } = borneSlice.actions;

export default borneSlice.reducer;
