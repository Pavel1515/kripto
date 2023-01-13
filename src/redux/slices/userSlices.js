import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, actions) => {
      state.userData = actions.payload;
    },
    setUserList: (state, actions) => {
      state.userList = actions.payload;
    },
  },
});

export const { setUserData, setUserList } = userSlice.actions;

export default userSlice.reducer;
