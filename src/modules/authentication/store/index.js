import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services";

const initialState = {
  currentUser: {},
};

export const login = createAsyncThunk("auth/login", async (params) => {
  const res = await API.login(params);
  localStorage.setItem("accessToken", res.jwt);
  return res.user;
});

export const handleRegister = createAsyncThunk(
  "auth/register",
  async (params) => {
    const res = await API.register(params);
    localStorage.setItem("accessToken", res.jwt);
    return res.user;
  }
);

const store = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = {};
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [handleRegister.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

const { actions, reducer } = store;
export const { logout } = actions;
export default reducer;
