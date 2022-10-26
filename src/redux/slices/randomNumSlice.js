import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  min: 0,
  max: 0,
};

export const randomNumSlice = createSlice({
  name: 'randomnum',
  initialState,
  reducers: {
    minNum: (state, action) => {
      console.log(action);
      state.min = action.payload;
    },
    maxNum: (state, action) => {
      state.max = action.payload;
    },
    generatorRandomNum: (state, action) => {
      const range = state.max - state.min;
      const currentRandom = Math.round(Math.random() * range) + Number(state.min);
      if (state.min >= state.max) {
        alert('первое число должно быть меньше второго');
        return;
      }
      state.value = currentRandom;
    },
  },
});

export const { generatorRandomNum, maxNum, minNum } = randomNumSlice.actions;

export default randomNumSlice.reducer;
