import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (state) => {
      const toggled = !state.isMenuOpen;
      state.isMenuOpen = toggled;
    },
  },
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
