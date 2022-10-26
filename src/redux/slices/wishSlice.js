import { createSlice } from '@reduxjs/toolkit';
import { menWish, womenWish } from '../../vocabulary';

const initialState = {
  value: '',
};

export const wishSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    onChangeString: (state, action) => {
      if (action.payload === 'man') {
        const currentMan = menWish[Math.floor(Math.random() * menWish.length)];
        state.value = currentMan;
      }
      if (action.payload === 'woman') {
        const currentWoman = womenWish[Math.floor(Math.random() * womenWish.length)];
        state.value = currentWoman;
      }
    },
  },
});

export const { onChangeString } = wishSlice.actions;

export default wishSlice.reducer;
