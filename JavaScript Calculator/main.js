function App() {
  // $(document).ready(function(){})
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(expression);
  const display = (val) => {
    setExpression((prev) => prev + val);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9]/.test(val)) {
        setExpression(val);
      } else {
        setExpression(answer + val);
      }
    }
  };
  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const allClear = () => {
    setExpression("");
    setAnswer(0);
    // $("#display").text(0);
    // document.getElementById("display").innerText(0);
  };
  const clear = () => {
    setExpression((prev) =>
      prev
        .split("")
        .slice(0, prev.length - 1)
        .join("")
    );
    setAnswer(0);
  };
  return (
    <div id="wrapper">
      <div id="disp">
        <input
          id="result"
          type="text"
          value={expression}
          // placeholder="0"
          disable="true"
          readOnly
        />
        <div id="display">{answer}</div>
      </div>
      <div id="buttons">
        <button onClick={() => allClear()} id="clear">
          AC
        </button>
        <button onClick={() => clear()} id="back">
          C
        </button>
        <button onClick={() => display("*")} id="multiply">
          x
        </button>
        <button onClick={() => display("/")} id="divide">
          /
        </button>
        <div id="number">
          <button onClick={() => display("1")} id="one">
            1
          </button>
          <button onClick={() => display("2")} id="two">
            2
          </button>
          <button onClick={() => display("3")} id="three">
            3
          </button>
          <button onClick={() => display(4)} id="four">
            4
          </button>
          <button onClick={() => display(5)} id="five">
            5
          </button>
          <button onClick={() => display(6)} id="six">
            6
          </button>
          <button onClick={() => display(7)} id="seven">
            7
          </button>
          <button onClick={() => display(8)} id="eight">
            8
          </button>
          <button onClick={() => display(9)} id="nine">
            9
          </button>
          <button onClick={() => display(0)} id="zero">
            0
          </button>
          <button onClick={() => display(".")} id="decimal">
            .
          </button>
        </div>
        <button onClick={() => display("+")} id="add">
          +
        </button>
        <button onClick={() => display("-")} id="subtract">
          -
        </button>
        <button onClick={() => calculate()} id="equals">
          =
        </button>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
