import { Provider, useDispatch, useSelector } from "https://esm.sh/react-redux";
import { createStore } from "https://esm.sh/redux";
import { decrease, increase, pause_play, reset } from "./redux/action";
import { clockReducer } from "./redux/reducers";
const store = createStore(clockReducer);

function App() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state);

  return (
    <div id="board">
      <div id="title">25 + 5 Clock</div>
      <div id="label">
        <div>
          Break Length
          <div id="break-label">
            <button
              id="break-decrement"
              onClick={() => {
                dispatch(decrease());
              }}
            >
              <i class="fa fa-arrow-down"></i>
            </button>
            <div id="break-length">5</div>
            <button
              id="break-increment"
              onClick={() => {
                dispatch(increase());
              }}
            >
              <i class="fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
        <div>
          Session Length
          <div id="session-label">
            <button
              id="session-decrement"
              onClick={() => {
                dispatch(decrease());
              }}
            >
              <i class="fa fa-arrow-down"></i>
            </button>
            <div id="session-length">25</div>
            <button
              id="session-increment"
              onClick={() => {
                dispatch(increase());
              }}
            >
              <i class="fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="display">
        <div id="timer-label">Session</div>
        <div id="time-left">25:00</div>
      </div>
      <div id="control">
        <button
          id="start_stop"
          onClick={() => {
            dispatch(pause_play());
          }}
        >
          <i class="fa fa-play"></i>
          <i class="fa fa-pause"></i>
        </button>
        <button
          id="reset"
          onClick={() => {
            dispatch(reset());
          }}
        >
          <i class="fa fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
