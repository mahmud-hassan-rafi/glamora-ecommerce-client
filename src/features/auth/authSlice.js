import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  authChecked: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.authChecked = true;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.authChecked = true;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
