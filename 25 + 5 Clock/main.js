function App() {
  return (
    <div>
      <div id="title"></div>
      <div id="label">
        <div id="break-label">
          <button id="break-decrement"></button>
          <div id="break-length">5</div>
          <button id="break-increment"></button>
        </div>
        <div id="session-label">
          <button id="session-decrement"></button>
          <div id="session-length">25</div>
          <button id="session-increment"></button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
