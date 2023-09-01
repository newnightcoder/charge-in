import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nom: "Nom",
    prénom: "Prénom",
    email: "prenom.nom@gmail.com",
  },
  isProfileModalOpen: false,
  isNotificationModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleProfileModal: (state) => {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },
  },
});

export const { toggleProfileModal } = userSlice.actions;

export default userSlice.reducer;
