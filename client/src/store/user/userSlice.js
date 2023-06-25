import {createSlice} from "@reduxjs/toolkit";
import * as actions from "./asyncActions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    current: null,
    token: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.isLogin = false;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getCurrent.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(actions.getCurrent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.current = action.payload;
      state.isLogin = true;
    });
    builder.addCase(actions.getCurrent.rejected, (state, action) => {
      state.isLoading = false;
      state.current = null;
      state.isLogin = false;
      state.token = null;
    });
  },
});

export const {
  login,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
