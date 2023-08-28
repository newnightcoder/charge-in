import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    nom: "Nom",
    prénom: "Prénom",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
