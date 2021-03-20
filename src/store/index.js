import { configureStore, createSlice } from "@reduxjs/toolkit";
import modules from "./modules";

const initialState = {
  sidebarShow: "responsive",
  loading: false,
};

const globalStore = createSlice({
  name: "globalStore",
  initialState,
  reducers: {
    SET(state, action) {
      const [variable, value] = action.payload;
      state[variable] = value;
    },
  },
});

const { actions, reducer } = globalStore;
export const { SET } = actions;
const rootReducers = {
  ...modules,
  globalStore: reducer,
};

const store = configureStore({
  reducer: rootReducers,
});
export default store;
