import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clientsSlice";
import menuReducer from "./menuSlice";
import statisticReducer from "./statisticSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    statistic: statisticReducer,
    user: userReducer,
    clients: clientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
