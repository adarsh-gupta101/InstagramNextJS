import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
  name: "counter",
  initialState: {
    user: [],
  },
  reducers: {
    adduser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    removeuser: (state) => {
      state.user = [];
    },

  },
});
export const { adduser, removeuser } = loginSlice.actions
export const selectCount = (state) => state.counter.user;

export default loginSlice.reducer;
