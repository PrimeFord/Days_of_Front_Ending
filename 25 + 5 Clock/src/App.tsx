// import { useState } from "react";
import "./App.css";
import {
  decrement,
  increment,
  pause_play,
  reset,
} from "./features/timer/timerSlice";
import {
  FaArrowDown,
  FaArrowUp,
  FaPause,
  FaPlay,
  FaArrowRotateRight,
} from "react-icons/fa6";
// import { DisplayState } from "./helper";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useState } from "react";
import { decrease, increase } from "./features/timer/breakTimer";
// import { DisplayState, formatTimer } from "./helper";

function App() {
  // const defaultSessionTime = 25;
  // const min = 60;
  // const max = 60 * 60;
  // const interval = 60;

  // const [breatTime, setBreakTime] = useState(defaultBreakTime);
  // const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  // const [displayTime, setDisplayTime] = useState<DisplayState>({
  //   time: sessionTime,
  //   timeType: "Session",
  //   timerRunning: false,
  // });

  const timer: number = useAppSelector((state) => state.timer.value);
  const breakTimer = useAppSelector((state) => state.breaker.value);
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState(timer);
  const handleChange = () => {};
  return (
    <>
      <div id="board">
        <div id="title">25 + 5 Clock</div>
        <div id="label">
          <div>
            Break Length
            <div id="break-label">
              <button
                id="break-decrement"
                onClick={
                  breakTimer > 1 ? () => dispatch(decrease()) : () => null
                }
              >
                <FaArrowDown />
              </button>
              <div id="break-length">{breakTimer}</div>
              <button
                id="break-increment"
                onClick={
                  breakTimer < 60 ? () => dispatch(increase()) : () => null
                }
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
          <div>
            Session Length
            <div id="session-label">
              <button
                id="session-decrement"
                onClick={timer > 1 ? () => dispatch(decrement()) : () => null}
              >
                <FaArrowDown />
              </button>
              <div id="session-length">{timer}</div>
              <button
                id="session-increment"
                onClick={timer < 60 ? () => dispatch(increment()) : () => null}
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
        <div id="display">
          <div id="timer-label">Session</div>
          <div id="time-left">{display}</div>
        </div>
        <div id="control">
          <button id="start_stop" onClick={() => dispatch(pause_play())}>
            <FaPlay />
            <FaPause />
          </button>
          <button id="reset" onClick={() => dispatch(reset())}>
            <FaArrowRotateRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
