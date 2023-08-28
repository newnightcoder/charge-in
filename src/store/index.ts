import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import statisticReducer from "./statisticSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    statistic: statisticReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
