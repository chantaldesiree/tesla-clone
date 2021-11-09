import { createSlice } from "@reduxjs/toolkit";

/**
  * Creates an initial state for the cars object.
  */
const initialState = {
  cars: [
    "Model S",
    "Model 3",
    "Model X",
    "Model Y",
    "Solar Roof",
    "Solar Panels",
  ],
};

/**
  * Creates a slice with the name of car, using the initial state and with no reducers
  */
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
