import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: false,
  burger: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    onChangeTheme: (state, action) => {
      state.theme = !state.theme;
    },
    burger: (state) => {
      state.burger = !state.burger;
    },
  },
});

export const { onChangeTheme, burger } = headerSlice.actions;

export default headerSlice.reducer;
