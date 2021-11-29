import { configureStore } from '@reduxjs/toolkit';
import carReducers from "../features/car/carSlice";


export const store = configureStore({
  reducer: {
    car:carReducers
  },
});
