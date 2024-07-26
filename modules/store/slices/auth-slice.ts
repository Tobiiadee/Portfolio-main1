/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActionAuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export interface AuthType {
  auth: boolean;
}

let authState: AuthType = {
  auth: true,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setAuth(state, action: PayloadAction<ActionAuthResponse>) {
      action.payload && action.payload.idToken
        ? (state.auth = !state.auth)
        : state.auth;

      return state;
    },

    logOut(state) {
      state.auth = false;
    },
  },
});

export const AuthSliceAction = AuthSlice.actions;
export default AuthSlice.reducer;
