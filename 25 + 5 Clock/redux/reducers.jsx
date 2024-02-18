import { DECREASE, INCREASE, PAUSE_PLAY, RESET } from "./action";

const time = 25;
// const time = { session: 25, break: 5 };

export const clockReducer = (state = time, action) => {
  switch (action.type) {
    case INCREASE:
      return payload + 1;
    case DECREASE:
      return payload - 1;
    case PAUSE_PLAY:
      return payload;
    case RESET:
      return (payload = 25);
    default:
      return state;
  }
};
