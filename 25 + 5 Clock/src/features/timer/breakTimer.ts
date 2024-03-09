import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define a type for the slice state
interface BreakerState {
  value: number;
}

// Define the initial state using that type
const initialState: BreakerState = {
  value: 5,
};

export const breakerSlice = createSlice({
  name: "breaker",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    pause_play: (state) => {
      state.value;
    },
    reset: (state) => {
      state.value = 5;
    },
  },
});

export const { increase, decrease, pause_play, reset } = breakerSlice.actions;
export const selectBreak = (state: RootState) => state.timer.value;

export default breakerSlice.reducer;
