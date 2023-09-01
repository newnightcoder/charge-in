import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nom: "Nom",
    prénom: "Prénom",
    email: "prenom.nom@gmail.com",
  },
  isProfileModalOpen: false,
  isNotificationModalOpen: false,
  notifications: 28,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleProfileModal: (state) => {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },
    toggleNotifModal: (state) => {
      state.isNotificationModalOpen = !state.isNotificationModalOpen;
    },
  },
});

export const { toggleProfileModal, toggleNotifModal } = userSlice.actions;

export default userSlice.reducer;
