/** @format */

import { configureStore } from "@reduxjs/toolkit";
import setPortalReducer from "./slices/set-Portal-Slice";
import authReducer from "./slices/auth-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      setPortal: setPortalReducer,
      auth: authReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
