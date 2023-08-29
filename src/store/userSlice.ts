import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nom: "Nom",
    prénom: "Prénom",
    email: "prenom.nom@gmail.com",
  },
  isModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggle } = userSlice.actions;

export default userSlice.reducer;
