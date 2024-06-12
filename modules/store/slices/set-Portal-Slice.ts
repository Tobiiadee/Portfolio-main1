/** @format */

import { createSlice } from "@reduxjs/toolkit";

const setPortalSlice = createSlice({
  initialState: { isSet: false },
  name: "portalSlice",
  reducers: {
    setPortal(state) {
      state.isSet = !state.isSet;
    },
  },
});

export const setPortalAction = setPortalSlice.actions;

export default setPortalSlice.reducer;
