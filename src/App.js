import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult((eval(result) || "") + "");
    } catch (error) {
      setResult("error");
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="keypad">
        <button className="button gray" onClick={clear} value="AC">
          AC
        </button>
        <button className="button gray" onClick={backspace} value="C">
          C
        </button>
        <button className="button gray" onClick={handleClick} value="%">
          %
        </button>
        <button className="button gray" onClick={handleClick} value="/">
          /
        </button>
        <button className="button" onClick={handleClick} value="7">
          7
        </button>
        <button className="button" onClick={handleClick} value="8">
          8
        </button>
        <button className="button" onClick={handleClick} value="9">
          9
        </button>
        <button className="button gray" onClick={handleClick} value="*">
          x
        </button>
        <button className="button" onClick={handleClick} value="4">
          4
        </button>
        <button className="button" onClick={handleClick} value="5">
          5
        </button>
        <button className="button" onClick={handleClick} value="6">
          6
        </button>
        <button className="button gray" onClick={handleClick} value="-">
          -
        </button>
        <button className="button" onClick={handleClick} value="1">
          1
        </button>
        <button className="button" onClick={handleClick} value="2">
          2
        </button>
        <button className="button" onClick={handleClick} value="3">
          3
        </button>
        <button className="button gray" onClick={handleClick} value="+">
          +
        </button>
        <button className="button" onClick={handleClick} value="0">
          0
        </button>
        <button className="button" onClick={handleClick} value=".">
          .
        </button>
        <button className="button orange" onClick={calculate} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
