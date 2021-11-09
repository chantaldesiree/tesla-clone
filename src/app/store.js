import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";

/**
  * Exports a configured store with the carReducer object.
  */
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
