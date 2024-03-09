export interface DisplayState {
  time: number;
  // | string
  timeType: "Session" | "Break";
  timerRunning: boolean;
}

export const formatTimer = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  console.log(minutes, seconds);
  return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${
    seconds < 10 ? "0" + seconds.toString() : seconds
  }`;
};
