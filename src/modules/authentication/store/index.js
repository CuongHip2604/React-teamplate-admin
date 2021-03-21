import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services";

const initialState = {
  currentUser: {},
};

export const login = createAsyncThunk(
  "authentication/login",
  async (params) => {
    const res = await API.login(params);
    localStorage.setItem("accessToken", res.jwt);
    return res.user;
  }
);

export const handleRegister = createAsyncThunk(
  "authentication/register",
  async (params) => {
    const res = await API.register(params);
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
  },
});

const { actions, reducer } = store;
export const { logout } = actions;
export default reducer;
