import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AuthState, RootState} from "../../@types/redux_type";

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignIn: (state, action: PayloadAction<{token: string |null,refreshToken:string |null}>) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    setSignOut: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    }
  }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export default authSlice.reducer;
