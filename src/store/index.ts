import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import statisticReducer from "./statisticSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    statistic: statisticReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
