import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oneValutes: "USDT",
  twoValutes: "USDT",
};

export const valuteSlice = createSlice({
  name: "valute",
  initialState,
  reducers: {
    setOneValute: (state, actions) => {
      state.oneValutes = actions.payload;
    },
    setTwoValute: (state, actions) => {
      state.twoValutes = actions.payload;
    },
  },
});

export const { setOneValute, setTwoValute } = valuteSlice.actions;

export default valuteSlice.reducer;
