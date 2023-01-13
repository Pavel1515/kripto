import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurse = createAsyncThunk(
  "cusr/fetchCurse",
  async (params) => {
    const { oneValutes, twoValutes, baseUrl } = params;
    const json = JSON.stringify({
      oneValute: oneValutes,
      twoValute: twoValutes,
    });
    const { data } = await axios.post(`${baseUrl}chekcurse`, json, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data.curse;
  }
);

const initialState = {
  curs: 1,
  status: true,
  error: "",
};

export const cursSlice = createSlice({
  name: "cusr",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurse.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchCurse.fulfilled, (state, action) => {
        state.status = false;
        state.curs = action.payload;
      })
      .addCase(fetchCurse.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      });
  },
});

export default cursSlice.reducer;
