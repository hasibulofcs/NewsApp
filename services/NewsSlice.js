import { createSlice } from "@reduxjs/toolkit";

export const topNewsSlice = createSlice({
  name: "topNewses",
  initialState: {
    value: [],
  },
  reducers: {
    save: (state) => {
      state.value = [...state, state.value];
    },
  },
});

export const { save } = topNewsSlice.actions;

export default topNewsSlice.reducer;
