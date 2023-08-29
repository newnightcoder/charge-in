import { configureStore } from "@reduxjs/toolkit";
import borneReducer from "./borneSlice";
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
    borne: borneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
