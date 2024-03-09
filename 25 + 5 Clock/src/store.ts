import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timer/timerSlice";
import breakerReducer from "./features/timer/breakTimer";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    breaker: breakerReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
