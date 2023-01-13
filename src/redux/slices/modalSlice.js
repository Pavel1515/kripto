import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openOne: false,
  openTwo: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenOne: (state, actions) => {
      state.openOne = actions.payload;
    },
    setOpenTwo: (state, actions) => {
      state.openTwo = actions.payload;
    },
  },
});

export const { setOpenOne, setOpenTwo } = modalSlice.actions;

export default modalSlice.reducer;
