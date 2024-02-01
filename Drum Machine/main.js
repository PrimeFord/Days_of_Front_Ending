// import React, { useEffect } from "react";

function App() {
  const keyPad = [
    {
      id: "Heater1",
      keyCode: 81,
      keyTrigger: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater2",
      keyCode: 87,
      keyTrigger: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater3",
      keyCode: 69,
      keyTrigger: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater4",
      keyCode: 65,
      keyTrigger: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "Clap",
      keyCode: 83,
      keyTrigger: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "Open",
      keyCode: 68,
      keyTrigger: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick_n_",
      keyCode: 90,
      keyTrigger: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "Kick",
      keyCode: 88,
      keyTrigger: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Closed",
      keyCode: 67,
      keyTrigger: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const [key, setKey] = React.useState("");
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListenerEventListener("keydown", handleKeyPress);
    };
  }, []);
  const handleKeyPress = (e) => {
    keyPad.map((key) => {
      if (e.keyCode === key) {
        console.log(key);
      }
    });
  };
  const playSound = (keyId) => {
    const audioPad = document.getElementById(keyId);
    audioPad.currentTime = 0;
    audioPad.play();
    console.log(keyId);
  };

  return (
    <div id="drum-machine">
      <div id="display">BBBB</div>
      <div id="box">
        {keyPad.map((key, id) => (
          <button
            onClick={() => {
              playSound(key.keyTrigger);
            }}
            key={id}
            id={key.id}
            className="drum-pad"
          >
            <audio id={key.keyTrigger} className="clip" src={key.url} />
            {key.keyTrigger}
          </button>
        ))}
      </div>
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
