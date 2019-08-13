import React from "react";
import { numbers } from "../../../data";

const NumberButton = props => {
  return <button className={`btn btn-${props.text}`}>{props.text}</button>;
};

export default NumberButton;
