import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toValue: null,
  fromValue: null,
  toPrice: 'USD',
  fromPrice: 'RUB',
  rates: {},
};

export const converterSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    onChangeFromValues: (state, action) => {
      state.fromValue = action.payload;
      const price = state.rates[state.toPrice] / state.rates[state.fromPrice];
      state.toValue = price * state.fromValue;
    },
    onChangeToValues: (state, action) => {
      const value = action.payload;
      const price = (state.rates[state.fromPrice] / state.rates[state.toPrice]) * value;
      state.toValue = value;
      state.fromValue = price;
    },
    onFromPrice: (state, action) => {
      state.fromPrice = action.payload;
    },
    onToPrice: (state, action) => {
      state.toPrice = action.payload;
    },
    onRates: (state, action) => {
      state.rates = action.payload;
    },
  },
});

export const { onChangeFromValues, onFromPrice, onRates, onToPrice, onChangeToValues } =
  converterSlice.actions;

export default converterSlice.reducer;
