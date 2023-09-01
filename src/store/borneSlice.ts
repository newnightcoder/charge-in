import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isChangeBorneOpen: false,
  isBorne: false,
  isAccessoire: false,
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
    setIsAccessoire: (state, action) => {
      state.isAccessoire = action.payload;
    },
  },
});

export const { toggle, setIsBorne, setIsAccessoire } = borneSlice.actions;

export default borneSlice.reducer;
