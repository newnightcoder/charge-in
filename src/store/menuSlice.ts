import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
