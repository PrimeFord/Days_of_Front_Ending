export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const PAUSE_PLAY = "PAUSE_PLAY";
export const RESET = "RESET";

export const increase = (payload) => {
  return {
    type: INCREASE,
    payload,
  };
};
export const decrease = (payload) => {
  return {
    type: DECREASE,
    payload,
  };
};
export const pause_play = (payload) => {
  return {
    type: PAUSE_PLAY,
    payload,
  };
};
export const reset = (payload) => {
  return {
    type: RESET,
    payload,
  };
};
