import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// Define a type for the slice state
interface TimerState {
  value: number;
}

// Define the initial state using that type
const initialState: TimerState = {
  value: 25,
};

export const timerSlice = createSlice({
  name: "timer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    pause_play: (state) => {
      state.value;
    },
    reset: (state) => {
      state.value = 25;
    },
  },
});

export const { increment, decrement, pause_play, reset } = timerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectTime = (state: RootState) => state.timer.value;

export default timerSlice.reducer;

// export const timerSlice = createSlice({
//   name: "timer",
//   initialState: {
//     value: 25,
//   },
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes.
//       // Also, no return statement is required from these functions.
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     pause_play: (state) => {
//       state.value;
//     },
//     reset: (state) => {
//       state.value = 25;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, pause_play, reset } = timerSlice.actions;

// export default timerSlice.reducer;
