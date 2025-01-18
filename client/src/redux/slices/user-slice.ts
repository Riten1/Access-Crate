import { createSlice } from "@reduxjs/toolkit";

import {
  getToken,
  getUserData,
  isUserLogin,
  resetLoginData,
  setUserData,
  setUserLogin,
} from "../../utils/auth-storage";

export interface IUser {
  id: number;
  full_name: string;

  email: string;
  profile_pic: string;
  created_at: string;
  updated_at: string;
  role: string;
  contact_info: string;
  address: string;
  userData?: {
    email?: string;
  };
}

export interface IUserState {
  accessToken: string | null;
  user: IUser | null;
  loginStatus: boolean;
}

const initialState: IUserState = {
  accessToken: getToken() || null,
  user: getUserData() || {},
  loginStatus: isUserLogin() || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      setUserLogin({ ...action.payload });
      state.accessToken = action.payload?.accessToken;
      state.user = action.payload?.userData;
      state.loginStatus = true;
    },

    setUser: (state, action) => {
      setUserData({ ...state.user, ...action.payload });
      state.user = { ...state.user, ...action.payload };
    },

    resetLogin: (state) => {
      resetLoginData();
      state.user = null;
      state.loginStatus = false;
    },
  },
});

export const { setLogin, setUser, resetLogin } = userSlice.actions;
export default userSlice.reducer;
