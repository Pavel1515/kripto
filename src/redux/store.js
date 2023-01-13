import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlices";
import valutes from "./slices/valuteSlices";
import user from "./slices/userSlices";
import cusr from "./slices/cursSlice";
import modal from "./slices/modalSlice";
export const store = configureStore({
  reducer: {
    auth,
    valutes,
    user,
    cusr,
    modal,
  },
});
