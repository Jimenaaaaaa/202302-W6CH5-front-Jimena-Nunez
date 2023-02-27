import { configureStore } from "@reduxjs/toolkit";
import { dogsReducer } from "../reducer/dog.reducer";

export const store = configureStore({
  reducer: {
    dogs: dogsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
