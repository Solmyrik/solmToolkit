import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const qrSlice = createSlice({
  name: 'qrCode',
  initialState,
  reducers: {
    getVelueInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getVelueInput } = qrSlice.actions;

export default qrSlice.reducer;
