import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./features/UI/HeaderSlice";

export const store = configureStore({
  reducer: {
    headerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
