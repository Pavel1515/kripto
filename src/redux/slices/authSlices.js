import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  authentication: false,
  baseUrl: "http://192.168.1.102:5000/kripto/",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthentication: (state) => {
      if (localStorage.getItem("token")) {
        state.authentication = true;
      } else {
        state.authentication = false;
      }
    },
    setToken: (state, actions) => {
      localStorage.setItem("token", `${actions.payload}`);
      state.authentication = true;
      state.token = actions.payload;
    },
    deleteToken: (state) => {
      localStorage.removeItem("token");
      state.authentication = false;
    },
  },
});

export const { setAuthentication, setToken, deleteToken } = authSlice.actions;

export default authSlice.reducer;
