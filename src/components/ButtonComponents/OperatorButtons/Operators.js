import React from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
import { useState } from "react";

const Operators = () => {
  const [operator, setOperator] = useState(operators);
  return (
    <div>
      {operators.map(operator => (
        <OperatorButton text={operator} />
      ))}
    </div>
  );
};

export default Operators;
