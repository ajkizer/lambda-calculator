import React from "react";
import "./css/index.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import { useState } from "react";

import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState("+");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  function equals(value1, operator, value2) {
    setTotal(calculate(value1, operator, value2));
  }

  function changeDisplay(num) {
    if (total == 0) {
      setTotal(num);
    } else {
      setTotal(total + num);
    }
  }

  function saveFirstValue(displayValue) {
    setValue1(parseFloat(displayValue));
  }

  function saveOperator(operatorValue) {
    setOperator(operatorValue);
  }

  function saveSecondValue(displayValue) {
    setValue2(parseFloat(displayValue));
  }

  function calculate(prevValue, operator, lastValue) {
    if (operator === "/") {
      return prevValue / lastValue;
    } else if (operator === "x") {
      return prevValue * lastValue;
    } else if (operator === "+") {
      return prevValue + lastValue;
    } else if (operator === "-") {
      return prevValue - lastValue;
    } else {
      return 0;
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display total={total} />
        <div className="btn-container">
          <div className="btn-left">
            <div className="specials">
              <Specials />
            </div>
            <div
              className="numbers"
              onClick={e => {
                changeDisplay(e.target.textContent);
              }}
            >
              <Numbers />
            </div>
          </div>
          <div
            className="btn-right"
            onClick={e => {
              saveOperator(e.target.textContent);
              saveFirstValue(total);
            }}
          >
            <Operators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
