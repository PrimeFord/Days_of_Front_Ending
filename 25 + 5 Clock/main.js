function App() {
  return (
    <div id="board">
      <div id="title">25 + 5 Clock</div>
      <div id="label">
        <div>
          Break Length
          <div id="break-label">
            <button id="break-decrement">
              <i class="fa fa-arrow-down"></i>
            </button>
            <div id="break-length">5</div>
            <button id="break-increment">
              <i class="fa fa-arrow-up"></i>
            </button>
          </div>
        </div>
        <div>
          Session Length
          <div id="session-label">
            <button id="session-decrement">
              <i class="fa fa-arrow-down"></i>
            </button>
            <div id="session-length">25</div>
            <button id="session-increment">
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
        <button id="start_stop">
          <i class="fa fa-play"></i>
          <i class="fa fa-pause"></i>
        </button>
        <button id="reset">
          <i class="fa fa-arrows-rotate"></i>
        </button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
