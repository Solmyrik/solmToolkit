import { configureStore } from '@reduxjs/toolkit';
import randomNumSlice from './slices/randomNumSlice';
import passwordSlice from './slices/passwordSlice';
import qrSlice from './slices/qrSlice';
import headerSlice from './slices/headerSlice';
import wishSlice from './slices/wishSlice';
import converterSlice from './slices/converterSlice';

export const store = configureStore({
  reducer: {
    randomnum: randomNumSlice,
    password: passwordSlice,
    qrCode: qrSlice,
    header: headerSlice,
    wish: wishSlice,
    converter: converterSlice,
  },
});
