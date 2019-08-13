import React from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
import { useState } from "react";

const Numbers = () => {
  const [number, setNumber] = useState(numbers);
  console.log(numbers);
  return (
    <div>
      {numbers.map(number => (
        <NumberButton text={number} />
      ))}
    </div>
  );
};

export default Numbers;
