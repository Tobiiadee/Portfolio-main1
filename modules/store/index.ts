/** @format */

import { configureStore } from "@reduxjs/toolkit";
import setPortalReducer from "./slices/set-Portal-Slice";

export type RootStateType = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    setPortal: setPortalReducer,
  },
});

export default store;
