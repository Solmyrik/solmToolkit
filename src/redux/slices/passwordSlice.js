import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
  password: '',
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    progresLength: (state, action) => {
      state.value = action.payload;
      const numberChars = '0123456789';
      const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
      const symbolChars = '!@#$%^&*()_=+';

      const allChars = numberChars + upperChars + lowerChars + symbolChars;

      let randomStr = '';
      for (let i = 0; i < state.value; i++) {
        let random = Math.floor(Math.random() * allChars.length);
        randomStr += allChars[random];
      }
      state.password = randomStr;
    },
  },
});

export const { progresLength } = passwordSlice.actions;

export default passwordSlice.reducer;
